import React, { useEffect } from "react";
import Link from "next/link";
//= Scripts
import loadBackgroudImages from "@/common/loadBackgroudImages";
//= Data
import data from "@/data/Showcases/frame-slider.json";

function FrameSlider() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
const currentYear = new Date().getFullYear()

  return (
    <div className="slideshow">
      <div className="slides slides--images">
        {data.map((item, index) => (
          <div
            className={`slide ${index === 0 ? "slide--current" : ""}`}
            key={item.id}
          >
            <div
              className="slide__img bg-img"
              data-background={item.background}
            ></div>
          </div>
        ))}
      </div>
      <div className="slides slides--titles">
        {data.map((item, index) => (
          <div
            className={`slide ${index === 0 ? "slide--current" : ""}`}
            key={item.id}
          >
            <h1 className="text-center custom-h1 slide__title">
              <span className="sub-title custom-span">
                © {currentYear} {item.type}
              </span>{" "}
              <br />
              <span>
                <Link href={`/dark/${item.link}`}>{item.title}</Link>
              </span>
            </h1>
          </div>
        ))}
      </div>
      <nav className="slidenav">
        <div className="container">
          <button className="cursor-pointer slidenav__item slidenav__item--prev">
            <span>
              <i className="fas fa-chevron-left"></i>
            </span>
            <span>
              <span>Prev</span>
            </span>
          </button>
          <button className="cursor-pointer slidenav__item slidenav__item--next">
            <span>
              <span>Next</span>
            </span>
            <span>
              <i className="fas fa-chevron-right"></i>
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default FrameSlider;
