//= Data
import data from "@/data/app-data.json";
import Link from "next/link";

function DarkFooter() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="sub-bg dark-footer">
      <div className="footer-container">
        <div className="container pb-80 pt-80 ontop">
          {/* <div className="text-center call-box mb-80">
            <h2>
              <a href="page-contact.html">
                Let's <span className="stroke"> Discuss</span>
              </a>
              <span className="arrow">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </h2>
          </div> */}
          <div className="row">
            <div className="col-lg-3">
              <div className="logo" style={{ marginBottom: "20px" }}>
                <a href="#">
                  <img src="/dark/assets/imgs/logo-light.png" alt="" />
                </a>
              </div>
              <small>
                We tend to believe we are not just a company. We are
                incorporated but for the sake of representation. However, our
                actual belief is far beyond incorporation, this is a concept. A
                concept which sees ‘design’ as a medium to trigger the
                undiscovered “seventh sense” of the human psychology
              </small>
            </div>

            <div className="col-lg-3 offset-lg-1">
              <div className="colum md-mb50">
                <div className="mb-20 tit">
                  <h6>Company</h6>
                </div>
                <div className="text">
                  <p className="mb-10">
                    <a href="#0">info@createabit.com</a>
                  </p>
                  <h5>
                    <a href="#">+703-347-6512</a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 md-mb50">
              <div className="mb-20 tit">
                <h6>Sitemap</h6>
              </div>

              <ul className="rest social-text ">
                <li className="mr-30">
                  <Link href="/dark/page-team">Our Team</Link>
                </li>
                <li className="mr-30">
                  <Link href="/dark/page-team">Our Client</Link>
                </li>
                <li className="mr-30">
                  <Link href="/dark/blog-classic">Our Blog</Link>
                </li>
                <li>
                  <Link href="/dark/shop-list">Shop</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <div className="mb-20 tit">
                <h6>Social</h6>
              </div>
              {/* <div className="subscribe">
                <form action="contact.php">
                  <div className="form-group rest">
                    <input type="email" placeholder="Type Your Email" />
                    <button type="submit">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </form>
              </div> */}
              <ul className="rest social-text ">
                <li className="mr-30">
                  <Link href="https://www.facebook.com/CreateAbitDesigns">
                    Facebook
                  </Link>
                </li>
                <li className="mr-30">
                  <Link href="">Instagram</Link>
                </li>
                <li className="mr-30">
                  <Link href="">Twitter</Link>
                </li>
                <li>
                  <Link href="">LInkedin</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-40 pb-40 sub-footer bord-thin-top ontop">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="copyright d-flex">
                  <div className="ml-auto">
                    <p className="fz-13">
                    Copyright © {currentYear} Create-A-Bit All rights reserved.{" "}
                      {/* <span className="underline">
                        {" "}
                        <a href={data.author_link}>{data.author}</a>
                      </span> */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default DarkFooter;
