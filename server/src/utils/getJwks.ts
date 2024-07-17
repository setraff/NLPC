import axios from "axios";
import Jwk from "../types/Jwk";

const getJwks = async () => {
  const response = await axios.get<{ keys: Jwk[] }>(
    `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  );
  return response.data.keys;
};

export default getJwks;