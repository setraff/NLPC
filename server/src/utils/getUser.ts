import axios from "axios";
import Jwk from "../types/Jwk";

const getUser = async (accessToken: string) => {
  const response = await axios.get<{ email: string; sub: string }>(
    `https://${process.env.AUTH0_DOMAIN}.us.auth0.com/userinfo`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
};

export default getUser;
