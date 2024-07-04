import { TRPCError } from "@trpc/server";
import t from "../trpc";
import jwt from "jsonwebtoken";
import getJwks from "../../utils/getJwks";
import jwkToPem from "jwk-to-pem";
import getUser from "../../utils/getUser";

const privateProcedure = t.procedure.use(async ({ ctx, next }) => {
  const accessToken = ctx.accessToken;

  if (!accessToken) {
    throw new TRPCError({
      message: "Missing token",
      code: "UNAUTHORIZED",
    });
  }

  const header = jwt.decode(accessToken, { complete: true })?.header;

  if (!header) {
    throw new TRPCError({
      message: "Invalid header",
      code: "UNAUTHORIZED",
    });
  }

  const keys = await getJwks();
  const headerKid = header.kid;
  const matchingKey = keys.find((k) => k.kid === headerKid);

  if (!matchingKey) {
    throw new TRPCError({
      message: "Invalid token",
      code: "UNAUTHORIZED",
    });
  }

  const pemPublicKey = jwkToPem(matchingKey);
  jwt.verify(accessToken, pemPublicKey, {
    //@ts-ignore
    algorithms: [header.alg],
    issuer: process.env.AUTH0_DOMAIN,
  });

  const user = await getUser(accessToken);

  return next({
    ctx: {
      email: user.email,
      auth0UserId: user.sub,
    },
  });
});

export default privateProcedure;
