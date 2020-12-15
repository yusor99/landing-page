import Cards from "../componennt/cards";
import Desktop from "./../componennt/desktop";
import Mobile from "./../componennt/mobile";
import { PlayCircleOutlined } from "@ant-design/icons";
const Home = () => {
  return (
    <>
      <html lang="en">
        <head>
          <meta name="Description" content="landing" />
          <title>20-week training schedule for your first marathon</title>
        </head>

        <Desktop />
        <Mobile />
        <section className="home-cover">
          <img src="/img/cover.png" alt="cover" />
          <div
            className="overlay"
            style={{ backgroundColor: "rgba(0,0,253,0.2)" }}
          >
            <div className="container">
              <section className="head">
                <p className="des">Lorem ipsum</p>
                <small
                  style={{
                    color: "rgba(255, 255, 255, 0.70)",
                    fontWeight: 400,
                    fontSize: 14,
                  }}
                >
                  <span style={{ marginLeft: "10%" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  </span>
                  <br />
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </small>
                <button className="btn-view">VIEW OUR PROJECTS</button>
              </section>
            </div>
          </div>
        </section>
        <section
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 50,
          }}
        >
          <h1 style={{ fontWeight: 300, marginBottom: 10 }}>
            Lorem ipsum dolor sit
          </h1>

          <small style={{ maxWidth: 600, color: "rgba(0, 0, 0, 0.65)" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            ultrices accumsan ornare. Phasellus tristique ullamcorper luctus.
            Nunc varius ullamcorper felis. Nulla nibh ipsum, rutrum.
          </small>
        </section>
        <section className="container">
          <Cards />
        </section>
        <section className="home-cover">
          <img src="/img/image.png" alt="img" />
          <div
            className="overlay"
            style={{ backgroundColor: "rgba(21,116,185,0.3)" }}
          >
            <div className="container">
              <section className="head">
                <div style={{ color: "white", fontSize: 45, marginBottom: 20 }}>
                  <PlayCircleOutlined />
                </div>
                <p className="des">Our Case Studies</p>
                <small
                  style={{
                    letterSpacing: 1.5,
                    color: "rgb(255, 255, 255)",
                    fontWeight: 500,
                    fontSize: 17,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  ultrices accumsan ornare .<br /> Phasellus tristique
                  ullamcorper luctus. Nunc varius ullamcorper felis. Nulla nibh
                  ipsum, rutrum
                </small>
              </section>
            </div>
          </div>
        </section>
        <section
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 30,
            paddingBottom: 60,
          }}
        >
          <h1 style={{ fontWeight: 300 }}>Featured Projects</h1>

          <small style={{ maxWidth: 600, color: "rgba(0, 0, 0, 0.65)" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            ultrices accumsan ornare. Phasellus tristique ullamcorper luctus.
            Nunc varius ullamcorper felis. Nulla nibh ipsum, rutru
          </small>
        </section>
        <section className="aside">
          <section className="head">
            <p className="des">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <small
              style={{
                color: "rgba(0, 0, 0, 0.70)",
                fontWeight: 400,
                fontSize: 14,
                width: 350,
                padding: 10,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              ultrices accumsan ornare. Phasellus tristique ullamcorper luctus.
            </small>
            <button className="btn-view">VIEW OUR PROJECTS</button>
          </section>
          <section>
            <img src="img/rec.png" alt="featured"></img>
          </section>
        </section>
        <section className="footer">
          <span>Copyright 2017. All Rights Reserved.</span>
        </section>
      </html>
    </>
  );
};
export default Home;
