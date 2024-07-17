import { useAuth0 } from "@auth0/auth0-react";
import { createFileRoute } from "@tanstack/react-router";
import { IoIosLogOut } from "react-icons/io";

export const Route = createFileRoute("/calendar")({
  component: () => {
    const auth0 = useAuth0();

    return (
      <div className="w-full h-full rounded-md grid grid-cols-1 desktop:grid-cols-4 p-2 desktop:gap-5">
        <div className="col-span-1 border rounded-md h-full flex flex-col space-y-5">
          <div className="w-full bg-white h-[3.5rem] rounded-md border flex items-center justify-between p-5 space-x-2">
            <div>
              <div className="text-sm font-medium">{auth0.user?.name}</div>
              <div className="text-xs text-gray-500">{auth0.user?.email}</div>
            </div>
            <IoIosLogOut
              onClick={() => auth0.logout()}
              className="text-2xl hover:text-@Crayola cursor-pointer"
            />
          </div>
          <div className="w-full bg-white h-full rounded-md border flex items-center p-3 space-x-2"></div>
        </div>
        <div className="col-span-3 border rounded-md h-full bg-white"></div>
      </div>
    );
  },
});
