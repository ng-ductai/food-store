import { useEffect, useRef } from "react";
import "./styles.scss";
import { homeWork } from "../../../utils/homeData";
import gsap from "gsap";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import LoadImage from "../../../components/LoadImage";

const HomeWork = () => {
  let containerRef = useRef(null);
  let captionRef = useRef(null);
  let headingRef = useRef(null);
  let stepOneRef = useRef(null);
  let stepTwoRef = useRef(null);
  let stepThreeRef = useRef(null);
  let stepFourRef = useRef(null);
  const stepRefs = [stepOneRef, stepTwoRef, stepThreeRef, stepFourRef];

  // animation
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef,
        start: "20% bottom",
      },
    });

    tl.from(captionRef, {
      x: 20,
      opacity: 0,
      duration: 0.7,
    })
      .from(headingRef, { x: -20, opacity: 0, duration: 0.8 }, "-=0.2")
      .from(stepRefs[0], { y: 20, opacity: 0, duration: 0.8 }, "-=0.2")
      .from(stepRefs[1], { y: 20, opacity: 0, duration: 0.6 }, "-=0.2")
      .from(stepRefs[2], { y: 20, opacity: 0, duration: 0.6 }, "-=0.2")
      .from(stepRefs[3], { y: 20, opacity: 0, duration: 0.6 }, "-=0.2");
  }, []);

  return (
    <section ref={(el) => (containerRef = el)} className="home-work">
      <Container>
        <div ref={(el) => (captionRef = el)} className="primary-yellow-text">
          Order now!
        </div>
        <h2 ref={(el) => (headingRef = el)} className="primary-heading-text">
          How it works
        </h2>

        <div className="home-work__steps">
          <Grid container spacing={3}>
            {homeWork.map(({ img, step, content, arrow }, index) => (
              <Grid key={index} item xs={12} sm={6} lg={3}>
                <div
                  ref={(el) => (stepRefs[index] = el)}
                  className="home-work__step"
                >
                  <div className="home-work__thumb">
                    <div className="home-work__thumb-wrapper">
                      <img
                        className="home-work__img"
                        src={LoadImage(img)}
                        alt="steps"
                      ></img>
                      <span>{step}</span>
                      <div
                        style={{ backgroundImage: `url(${arrow})` }}
                        className="home-work__thumb-arrow"
                      ></div>
                    </div>
                  </div>
                  <div className="home-work__content">{content}</div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default HomeWork;
