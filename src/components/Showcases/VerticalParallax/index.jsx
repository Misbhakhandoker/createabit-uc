import Link from "next/link";
import { useEffect } from "react";
//= Scripts
import parallaxieGroup from "@/common/parallaxieGroup";
import data from "@/data/Showcases/frame-slider.json";
function VerticalParallax({ lightMode }) {
  useEffect(() => {
    parallaxieGroup(`.bg-img.parallaxie`, 0.2);
  }, []);

  return (
    <section className="parallax-show">
      {data && data.length > 0
        ? data.map((softwareData) => (
            <div
              key={softwareData.id}
              className="bg-img inner parallaxie valign"
              data-background={`${softwareData.background}`}
              data-overlay-dark="3"
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="text-center caption">
                      <h6
                        className="sub-title mb-30"
                        data-swiper-parallax="-1000"
                      >
                        © {softwareData.year} {softwareData.type}
                      </h6>
                      <h1>
                        <Link href={softwareData.link}>{softwareData.title}</Link>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : null}

      {/* <div
        className="bg-img inner parallaxie valign"
        data-background="/dark/assets/imgs/works/full/2.jpg"
        data-overlay-dark="3"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center caption">
                <h6 className="sub-title mb-30" data-swiper-parallax="-1000">
                  © 2023 Branding
                </h6>
                <h1>
                  <Link
                    href={
                      lightMode
                        ? "/light/page-product-category2"
                        : "/dark/page-product-category2"
                    }
                  >
                    Tech Products
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-img inner parallaxie valign"
        data-background="/dark/assets/imgs/works/full/3.jpg"
        data-overlay-dark="3"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="text-center caption">
                <h6 className="sub-title mb-30" data-swiper-parallax="-1000">
                  © 2023 Branding
                </h6>
                <h1>
                  <Link
                    href={
                      lightMode
                        ? "/light/page-product-category3"
                        : "/dark/page-product-category3"
                    }
                  >
                    Interactive Production
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default VerticalParallax;
