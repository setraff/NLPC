import { RSA } from "jwk-to-pem";

interface Jwk {
  alg: string;
  kty: "RSA";
  use: string;
  x5c: string[];
  n: string;
  e: string;
  kid: string;
  x5t: string;
}

export default Jwk;
