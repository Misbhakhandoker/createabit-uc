import Link from "next/link";
//= Data
// import data from "@/data/Showcases/software.json"; 
import data from "@/data/Showcases/interactive-center-horizontal.json";

const   HomeSoftware = () => {
  function handleMouseEnter(event) {
    var tab_id = event.currentTarget.getAttribute("data-tab");

    document.querySelectorAll(".links-text li").forEach((el) => {
      el.classList.remove("current");
      el.classList.add("no-active");
    });
    event.currentTarget.classList.add("current");
    event.currentTarget.classList.remove("no-active");

    document
      .querySelectorAll(".links-img .img")
      .forEach((el) => el.classList.remove("current"));
    document.querySelector("#" + tab_id).classList.add("current");

    if (event.currentTarget.classList.contains("current")) return false;
  }

  function handleMouseLeave() {
    document
      .querySelectorAll(".links-text li")
      .forEach((el) => el.classList.remove("current"));
    document
      .querySelectorAll(".links-img .img")
      .forEach((el) => el.classList.remove("current"));
    document
      .querySelectorAll(".links-text li")
      .forEach((el) => el.classList.remove("no-active"));
  }
  return (
    <section className="inter-links-center custom-inter-links-center horizontal d-flex align-items-center">
      <div className="container-xxl">
        <div class="row" style={{ marginBottom: "25px" }}>
          <div class="col-lg-6">
            <div class="position-re">
              <h6 className="mt-15 dot-titl-non">Software</h6>
              <h2
                className="d-rotate wow animated"
                style={{ visibility: "visible" }}
              >
                <span className="rotate-text">Versatile SAAS Solutions</span>
              </h2>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-center">
            <p>
              At CreateAbit, we offer a range of SAAS-based software designed to
              cater to diverse industry needs. Our solutions streamline
              operations, enhance productivity, and drive growth.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="links-text d-flex justify-content-center">
              <ul className="rest">
                {data.map((item) => (
                  <li
                    data-tab={`tab-${item.id}`}
                    key={item.id}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <h2>
                      <span className="num">{item.number}.</span>
                      <Link href={`/dark/${item.link}`}>
                        <span className="tag sub-title">{item.type}</span>{" "}
                        <span className="text">{item.title}</span>
                      </Link>
                    </h2>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="links-img">
        {data.map((item) => (
          <div className="img" id={`tab-${item.id}`} key={item.id}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeSoftware;
