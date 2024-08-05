import React from "react";
import Styles from "@/styles/semi.module.css";
import ImageLoader from "@/components/imageLoader";

const index = () => {
  const images = [
    "/assets/person.png",
    "/assets/arjit.jpeg",
    "/assets/arjit.jpeg",
  ];

  const imageCarousel = [
    "/assets/person.png",
    "/assets/arjit.jpeg",
    "/assets/img1.png",
    "/assets/carousel.png",
    "/assets/carousel.png",
  ];
  return (
    <>
      <div
        className={Styles.upperBlk}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          marginTop: "5%",
        }}
      >
        <h3>Singers</h3>
        <ImageLoader images={images} />
        <h4 className="ms-5">
          <span className="text-dark">
            Choose <br /> from
          </span>{" "}
          100+ <br />
          Categories <br /> <img src="/assets/explore.svg" alt="" />
        </h4>
      </div>

      {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Carousel images={imageCarousel} />
    </div> */}

      <div>
        <img src="/assets/secondPortion.svg" width={"100%"} alt="" />
      </div>
      <div className="mt-5 w-100">
        <img
          src="/assets/snake.svg"
          alt=""
          style={{ position: "absolute", height: "120vh", marginLeft: "42%" }}
        />
        <div style={{ position: "relative" }}>
          <div
            className={`my-5 d-flex align-items-center w-100`}
            style={{ marginLeft: "25%", opacity: "37%" }}
          >
            <article
              className="mx-5"
              style={{ color: "#ffffff", width: "12%" }}
            >
              Late Night Maggie Party for the boost
            </article>
            <img
              className="mx-5"
              src="/assets/img1.png"
              alt=""
              width={180}
              height={180}
              style={{ transform: "rotate(25deg)", borderRadius: "25px" }}
            />
          </div>

          <div
            className={`d-flex align-items-center`}
            style={{ marginLeft: "50%", marginTop: "5%", opacity: "37%" }}
          >
            <article className="" style={{ color: "#ffffff", width: "22%" }}>
              Late Night Maggie Party for the boost
            </article>
            <img
              className="mx-5"
              src="/assets/img1.png"
              alt=""
              width={180}
              height={180}
              style={{ transform: "rotate(15deg)", borderRadius: "25px" }}
            />
          </div>

          <div
            className={`mt-5 d-flex align-items-center w-100`}
            style={{ marginLeft: "25%", opacity: "37%" }}
          >
            <article
              className="mx-5"
              style={{ color: "#ffffff", width: "12%" }}
            >
              Late Night Maggie Party for the boost
            </article>
            <img
              className="mx-5"
              src="/assets/img1.png"
              alt=""
              width={180}
              height={180}
              style={{ transform: "rotate(25deg)", borderRadius: "25px" }}
            />
          </div>

          <div
            className={`d-flex align-items-center`}
            style={{ marginLeft: "50%", marginTop: "5%", opacity: "37%" }}
          >
            <article className="" style={{ color: "#ffffff", width: "22%" }}>
              Late Night Maggie Party for the boost
            </article>
            <img
              className="mx-5"
              src="/assets/img1.png"
              alt=""
              width={180}
              height={180}
              style={{ transform: "rotate(15deg)", borderRadius: "25px" }}
            />
          </div>
        </div>
      </div>

      <div className={`mb-5 ${Styles.designDynamo}`}>
        <h4>Meet Our Starclinch Squads</h4>
        <section>
          <img
            src="/assets/circle.svg"
            alt=""
            width={1000}
            style={{
              marginLeft: "15%",
              marginBottom: "5vw",
              position: "absolute",
            }}
          />
          <img
            src="/assets/arrows.svg"
            alt=""
            width={34}
            style={{
              marginLeft: "38%",
              marginBottom: "5vw",
              position: "absolute",
              cursor: "pointer",
            }}
          />
          <img
            src="/assets/arrowRight.svg"
            alt=""
            width={34}
            style={{
              marginLeft: "60%",
              marginBottom: "5vw",
              position: "absolute",
              cursor: "pointer",
            }}
          />

          <div
            className="d-flex align-items-center flex-column"
            style={{ position: "relative", width: "80%", marginLeft: "10%" }}
          >
            <img
              src="/assets/carousel.png"
              alt=""
              width={160}
              height={160}
              style={{
                top: "-15%",
                borderRadius: "25px",
                position: "absolute",
              }}
            />

            <img
              src="/assets/carousel.png"
              alt=""
              width={160}
              height={160}
              style={{
                top: "25%",
                left: "10%",
                borderRadius: "50%",
                position: "absolute",
                opacity: "50%",
              }}
            />
            <img
              src="/assets/carousel.png"
              alt=""
              width={160}
              height={160}
              style={{
                top: "25%",
                right: "10%",
                borderRadius: "50%",
                position: "absolute",
                opacity: "50%",
              }}
            />

            <img
              src="/assets/carousel.png"
              alt=""
              width={160}
              height={160}
              style={{
                top: "90%",
                left: "4%",
                borderRadius: "50%",
                position: "absolute",
                opacity: "50%",
              }}
            />

            <img
              src="/assets/carousel.png"
              alt=""
              width={160}
              height={160}
              style={{
                top: "90%",
                right: "4%",
                borderRadius: "50%",
                position: "absolute",
                opacity: "50%",
              }}
            />

            <img
              src="/assets/button5.svg"
              alt=""
              style={{ marginTop: "13%" }}
            />
            <div className="text-light fs-4" style={{ marginTop: "3%" }}>
              Design Dynamos
            </div>
            <div
              className="w-50 text-center mt-4 fs-8"
              style={{
                color: "#FFFFFF",
                opacity: "37%",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              The artists behind the visuals. These design superheroes bring
              ideas to life, painting our projects with creativity and
              imagination
            </div>
            <div
              className="w-50 text-center mt-4"
              style={{ color: "#58D1D3", fontSize: "14px", fontWeight: "400" }}
            >
              Our design team is growing. Apply Now{" "}
              <img src="/assets/playicon.svg" alt="" />
            </div>
          </div>
        </section>
      </div>
      <img className="my-5" src="/assets/nora.svg" width={"100%"} alt="" />

      <footer className="my-5">
        <img
          src="/assets/btmSemi.svg"
          height={400}
          alt=""
          style={{ position: "absolute" }}
        />
        <img
          src="/assets/bottom.svg"
          width={"100%"}
          height={400}
          alt=""
          style={{ position: "absolute", marginLeft: "38%" }}
        />
        <img
          src="/assets/centerbtm.svg"
          height={400}
          alt=""
          style={{ marginLeft: "15%", marginBottom: "10%" }}
        />
      </footer>
    </>
  );
};

export default index;
