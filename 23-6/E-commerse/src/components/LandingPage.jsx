import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/mainvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-10">
        <div className="bg-white/30 backdrop-blur-md border border-white/30 pt-3 pl-3 rounded-3xl shadow-2xl max-w-3xl w-full flex flex-col animate-fade-in">
          <div className="border-t-2 border-l-2 border-black">
            <p className="text-sm text-black pl-4 pt-3 ">---- New Trend</p>
            <p className="text-black text-3xl font-extrabold pl-4">
              MYTHIC COLLECTION
            </p>
            <h1 className="text-black text-3xl animate-pulse font-extrabold pl-4">
              Sale is Live
            </h1>
            <p className="mt-2 text-black font-bold pl-4">New style, New you</p>
            <a
              href="https://www.myntra.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm underline text-blue-800 hover:text-red-600 pl-4"
            >
              DISCOVER MORE
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-20 w-full justify-center pt-10 pb-6">
            <button
              onClick={() => navigate("/login")}
              className=" hover:bg-slate-500 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 w-full sm:w-auto hover:cursor-pointer hover:scale-95"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className=" hover:bg-slate-500 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 w-full sm:w-auto hover:cursor-pointer hover:scale-95"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
