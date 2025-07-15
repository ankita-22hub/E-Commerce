import { Navigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import ProductNames from "../components/ProductNames";
import Sales from "../components/Sales";
import Carousel from "../components/Carousel";

function ECommersePage() {
  const isAuthenticated = localStorage.getItem("authenticated") === "true";

  // ✅ If not logged in, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // ✅ Image slides for carousel
  const slides = [
    "./w1.jpg",
    "./w2.jpg",
    "./w3.jpg",
    "./w4.jpg",
    "./w5.jpg",
    "./w7.jpg",
    "./w8.jpg",
    "./w9.jpg",
  ];

  return (
    <>
      <NavBar />

      {/* Video Section */}
      <div className=" w-screen h-150px flex text-black">
        <div className=" w-1/2  h-auto items-center justify-center flex">
          <div className="w-auto h-auto border-l-4 border-b-4 pl-1 pb-1 ">
            <p className="">----New Trend</p>
            <p className="text-5xl justify-items-center font-extrabold">
              SHOP NEST
            </p>
            <h1 className="text-5xl animate-pulse from-black to-white ">
              <b>Sale is Live</b>
            </h1>
            <br />
            <h2>New style New you</h2>
            <a
              href="https://www.myntra.com/"
              className="text-sm underline hover:text-red-700"
            >
              {" "}
              DISCOVER MORE
            </a>{" "}
          </div>
        </div>

        <div className=" w-1/2 h-auto items-center justify-center flex ">
          <div className="w-full h-auto ">
            <video autoPlay muted loop playsInline>
              <source
                src="vid.mp4"
                type="video/mp4"
                className="pr-2 duration-75 "
              />
            </video>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex justify-center items-center h-screen">
        <div className="w-auto h-screen">
          <Carousel autoSlide autoSlideInterval={3000}>
            {slides.map((s, i) => (
              <img
                key={i}
                src={s}
                alt={`Slide ${i + 1}`}
                className="h-[700px] w-150 object-cover rounded-xl"
              />
            ))}
          </Carousel>
        </div>
      </div>

      {/* Deals + Product Section */}
      <div className="bg-slate-500 w-full">
        <div className="bg-slate-600 flex items-center justify-center h-20 animate-bounce">
          <h1 className="text-3xl text-white font-bold">Top Deals</h1>
        </div>
        <div className="p-4">
          <Sales />
        </div>
      </div>

      <ProductNames />
    </>
  );
}

export default ECommersePage;
