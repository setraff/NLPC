import { TRPCError } from "@trpc/server";
import t from "../trpc";
import jwt from "jsonwebtoken";
import getJwks from "../../utils/getJwks";
import jwkToPem from "jwk-to-pem";
import getUser from "../../utils/getUser";
import jwksClient from "jwks-rsa";
import axios from "axios";

const privateProcedure = t.procedure.use(async ({ ctx, next }) => {
  const accessToken = ctx.accessToken;

  if (!accessToken) {
    throw new TRPCError({
      message: "Missing token",
      code: "UNAUTHORIZED",
    });
  }

  const decoded = jwt.decode(accessToken, { complete: true });

  if (!decoded) {
    throw new TRPCError({
      message: "Invalid header",
      code: "UNAUTHORIZED",
    });
  }

  const { header, signature, payload } = decoded;

  const { data: configuration } = await axios.get(
    `https://${process.env.AUTH0_DOMAIN}.us.auth0.com/.well-known/openid-configuration`
  );

  const issuer = configuration.issuer;
  const jwksUri = configuration.jwks_uri;
  const algorithms =
    configuration.token_endpoint_auth_signing_alg_values_supported;

  const client = jwksClient({
    jwksUri,
  });

  const key = await client.getSigningKey(header.kid);
  const publicKey = key.getPublicKey();

  const thing = jwt.verify(accessToken, publicKey, {
    algorithms: algorithms,
    issuer,
  });

  if (payload.sub && typeof payload.sub === "string") {
    return next({
      ctx: {
        auth0UserId: payload.sub,
      },
    });
  } else {
    throw new TRPCError({
      message: "User ID not found",
      code: "INTERNAL_SERVER_ERROR",
    });
  }
});

export default privateProcedure;
