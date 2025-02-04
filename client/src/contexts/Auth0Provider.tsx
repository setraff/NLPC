import { Auth0Provider as A0P } from "@auth0/auth0-react";
import config from "../config";

interface IAuthProvder {
  children: React.ReactNode;
}

const Auth0Provider: React.FC<IAuthProvder> = (p) => {
  return (
    <A0P
      clientId="NphpiEywgK7mdQMs8ThO3qRYRCXzrNSL"
      domain={"dev-jdrx3kw7potdyibs.us.auth0.com"}
      authorizationParams={{
        redirect_uri: config.redirectUri,
        audience: "https://dev-jdrx3kw7potdyibs.us.auth0.com/api/v2/",
      }}
    >
      {p.children}
    </A0P>
  );
};

export default Auth0Provider;
