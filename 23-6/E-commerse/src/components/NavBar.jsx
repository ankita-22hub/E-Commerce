import React from "react";
import { useNavigate } from "react-router-dom";
import { LogIn, Search, Heart, ShoppingCart } from "lucide-react";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-slate-500 flex justify-between w-full h-14 p-2 items-center">
        <div className="flex  flex-row text-white">
          <ul className="flex gap-4">
            <li className="cursor-pointer hover:text-black duration-200 flex gap-1">
              {" "}
              MEN
            </li>
            <li className="cursor-pointer hover:text-black duration-200 flex gap-1">
              {" "}
              WOMEN
            </li>
            <li className="cursor-pointer hover:text-black duration-200 flex gap-1">
              {" "}
              KIDS
            </li>
            <li className="cursor-pointer hover:text-black duration-200 flex gap-1">
              {" "}
              HOME
            </li>
            <li className="cursor-pointer hover:text-black duration-200 flex gap-1">
              {" "}
              BEAUTY
            </li>
            <li className="cursor-pointer hover:text-black duration-200 flex gap-1">
              {" "}
              GENZ
            </li>
            <li className="cursor-pointer hover:text-black duration-200 flex gap-1">
              {" "}
              STDUIO
              <sup className=" pt-2 text-rose-900 font-extrabold animate-bounce">
                NEW
              </sup>
            </li>
          </ul>
        </div>
        <div className="flex ">
          <input
            type="text"
            placeholder="search"
            className="px-4 py-2 border border-b-amber-50 rounded-lg shadow-sm focus:ring-white w-2xl text-white"
          />
        </div>
        <div className="flex gap-3 mr-5 text-white">
          <button
            className="cursor-pointer hover:bg-black hover:text-white hover:scale-90 duration-200  pading-3 flex gap-1"
            onClick={() => {
              navigate("/login");
            }}
          >
            <LogIn />
          </button>

          <button
            className="cursor-pointer hover:bg-black hover:text-white hover:scale-90 duration-200  pading-3 flex gap-1"
            onClick={() => {
              navigate("/signuppage");
            }}
          >
            <Search />
          </button>

          <button className="cursor-pointer hover:bg-black hover:text-white hover:scale-90 duration-200  pading-3 flex gap-1">
            <Heart />
          </button>

          <button className="cursor-pointer hover:bg-black hover:text-white hover:scale-90 duration-200  pading-3 flex gap-1">
            <ShoppingCart />
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
