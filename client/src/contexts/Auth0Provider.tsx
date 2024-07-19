import { Auth0Provider as A0P } from "@auth0/auth0-react";

interface IAuthProvder {
  children: React.ReactNode;
}

const Auth0Provider: React.FC<IAuthProvder> = (p) => {
  return (
    <A0P
      clientId="NphpiEywgK7mdQMs8ThO3qRYRCXzrNSL"
      domain={"dev-jdrx3kw7potdyibs.us.auth0.com"}
      authorizationParams={{
        redirect_uri: "http://localhost:5173/",
      }}
    >
      {p.children}
    </A0P>
  );
};

export default Auth0Provider;
