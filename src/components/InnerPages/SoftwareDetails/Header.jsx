import { useEffect } from "react";
//= Scripts
import parallaxie from "@/common/parallaxie";

function Header({ currentPageDate }) {
  useEffect(() => {
    parallaxie(".proj-header2.parallaxie", 0.3, 0);
  }, []);

  return (
    <header
      className="proj-header2 bg-img valign parallaxie"
      data-background="/dark/assets/imgs/works/projects/2/1.jpg"
      data-overlay-dark="5"
    >
      <div className="container mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center caption">
              <h1>{currentPageDate?.title}</h1>
              <h6 className="sub-title">{currentPageDate?.type}</h6>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
