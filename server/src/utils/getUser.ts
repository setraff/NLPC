import axios from "axios";
import Jwk from "../types/Jwk";

// sub claim in jwk
const getUser = async (accessToken: string) => {
  const response = await axios.get<{ email: string; sub: string }>(
    `https://${process.env.AUTH0_DOMAIN}/userinfo}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
};

export default getUser;
