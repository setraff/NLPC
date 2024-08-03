import { useAuth0 } from "@auth0/auth0-react";
import { IoMdLogOut } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";

const UserInfo = () => {
  const auth0 = useAuth0();
  const image = auth0.user?.picture;
  return (
    <>
      <div className="flex font-medium items-center  space-x-3 w-full px-5 pt-5">
        <img className="h-10 w-10 rounded-full" src={image} />
        <div>{auth0.user?.name}</div>
      </div>
      <div
        onClick={() => auth0.logout()}
        className="w-full  justify-center  cursor-pointer text-gray-600 hover:text-red-500 flex items-center space-x-2"
      >
        <LuLogOut />
        <div>Log Out</div>
      </div>
    </>
  );
};

export default UserInfo;
