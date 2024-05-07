import React from "react";
import avatar from '../../assets/chowdeck/icons8-avatar-30.png'
import wallet from '../../assets/chowdeck/icons8-wallet-64.png'
import logout from '../../assets/chowdeck/icons8-logout-24.png'

const MyOrders = () => {
  return (
    <div>
      <div className="border-black border-2 rounded-lg w-56 h-36 divide-y">
        <div className="h-16 hover:bg-green-50 flex">
          <div className="mt-1">
            <span className="flex items-center">
              <img
                src={avatar}
                style={{
                  height: "32px",
                  width: "32px",
                  paddingTop: "4px",
                  marginBottom: "2rem",
                }}
              />
              <span className="font-sans text-[15px] mr-10 pb-7 ">
                Al-ameen AbdulRazaq
                <img src={wallet} style={{ height: "14px", width: "14px" }} />
                {/* <span className="ml-5 mb-3 pt-20 ">0{`₦0`}</span> */}
              </span>
            </span>
          </div>
        </div>
        <div className="h-9 hover:bg-green-50 p-2">
          <p>My Orders</p>
        </div>
        <div className="h-9 p-2 hover:bg-red-100 flex">
          <p>Logout </p>
          <span className="pb-3 ml-[8.5rem] ">
            <img src={logout} style={{ height: "16px", width: "16px" }} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
