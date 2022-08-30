import React, { useEffect } from "react";
import { homeStep } from "../../../utils/homeData";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import LoadImage from "../../../components/LoadImage";
import AOS from "aos";
import "./styles.scss";

const HomeStep = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <section className="steps" data-aos="fade-up" data-aos-duration="1500">
      <Container>
        <div className="primary-yellow-text">Order steps</div>

        <div className="steps__container">
          <Grid container spacing={3}>
            {homeStep.map(({ img, step, content }, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                lg={3}
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-delay="500"
                data-aos-easing="ease-in-sine"
              >
                <div className="steps__container-step">
                  <div className="wrapper">
                    <img className="img" src={LoadImage(img)} alt="step" />
                    <span>{step}</span>
                  </div>
                  <div className="content">{content}</div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default HomeStep;
