import React, { useEffect, useState } from "react";

const Sales = () => {
  const [btnClicked, setBtnClicked] = useState("");

  return (
    <div>
      <div className="flex justify-center gap-3 bg-slate-500  p-5">
        <button
          className="bg-slate-700 hover:bg-slate-950 hover:cursor-pointer duration-200 text-white p-2 rounded text-3xl  "
          onClick={() => {
            setBtnClicked("80 to 90 % off");
          }}
        >
          All
        </button>
        <button
          className="bg-slate-600 hover:bg-slate-950 hover:cursor-pointer duration-200 text-white p-2 rounded text-3xl"
          onClick={() => {
            setBtnClicked("60% off");
          }}
        >
          Man
        </button>
        <button
          className="bg-slate-600 hover:bg-slate-950 hover:cursor-pointer duration-200 text-white p-2 rounded text-3xl"
          onClick={() => {
            setBtnClicked("90% off");
          }}
        >
          Women
        </button>
        <button
          className="bg-slate-600 hover:bg-slate-950 hover:cursor-pointer duration-200 text-white p-2 rounded text-3xl"
          onClick={() => {
            setBtnClicked("90% off");
          }}
        >
          Kids
        </button>
        <button
          className="bg-slate-600 hover:bg-slate-950 hover:cursor-pointer duration-200 text-white p-2 rounded text-3xl"
          onClick={() => {
            setBtnClicked("45% off");
          }}
        >
          Others
        </button>
      </div>
      <div className="  flex justify-center items-center  bg-slate-500">
        <h3 className="text-2xl text-black font-extrabold  ">{btnClicked}</h3>
      </div>
    </div>
  );
};

export default Sales;
