import React from "react";
import prev from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";
import close from "../images/icon-close.svg";

function Lightbox({ products, slideIndex, nextSlide, previousSlide, setShowLightBox }) {
  return (
    <>
      <article
        className=" bg-black/75 fixed top-0 left-0 right-0
        bottom-0 z-50"
      >
        <button onClick={() => setShowLightBox(false)}>
          <img 
            src={close} alt="" 
            className="w-10 absolute top-10 right-10 cursor-pointer" 
          />
        </button>
        <div className="flex items-center justify-center h-screen">
          {products.map((item, index) => (
            <div
              key={index}
              className={slideIndex === index + 1 ? "relative" : "hidden"}
            >
              <img
                src={item.mainImage}
                alt=""
                className="big-image lg:w-full lg:rounded-2xl"
              />

              <ul>
                <li>
                  <button
                    onClick={previousSlide}
                    className="bg-white rounded-full p-5 shadow 
                        absolute left-4 top-1/2 -translate-y-1/2"
                  >
                    <img src={prev} alt="" />
                  </button>
                </li>
                <li>
                  <button
                    onClick={nextSlide}
                    className="bg-white rounded-full p-5 shadow 
                        absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <img src={next} alt="" />
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}

export default Lightbox;
