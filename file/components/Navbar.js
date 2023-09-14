"use client";
import { AiOutlineFire } from "react-icons/ai/";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiAccountPinCircleFill } from "react-icons/ri";
const profileName = "Ashish";
const Navbar = () => {
  const navItems = [
    {
      key: 1,
      name: "Explore",
    },
    { key: 2, name: "Problems" },
    { key: 3, name: "Content" },
    { key: 4, name: "Discuss" },
    { key: 5, name: "Interview" },
    { key: 6, name: "About us" },
  ];

  const userCheck = () => {
    profileName ? "redirecting" : "loading";
  };

  var premium = true;
  return (
    <>
      <main className="bg-black flex right-full mainNav">
        {navItems.map((item) => {
          return (
            <>
              <div key={item.key} className="navDiv">
                {" "}
                {item.name}
              </div>
            </>
          );
        })}

        <div className="rightItems">
          <div className="right-0 flex rightNav">
            <div className="item">
              {" "}
              <IoMdNotificationsOutline size={20} color="white" />
            </div>
            <div className="item">
              {" "}
              <AiOutlineFire size={20} color="white" />
            </div>
            <div onClick={userCheck} className="item">
              {" "}
              <RiAccountPinCircleFill size={20} color="white" />
            </div>
            {premium ? (
              <button className="btnpremium text-white ">Premium </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </main>
    </>
  );
};
export default Navbar;
