import React from "react";
import "./index.scss";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {
  PhoneInTalkOutlined,
  EmailOutlined,
  BusinessOutlined,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
} from "@material-ui/icons";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <div className="footer__contacts">
              <h4 className="footer__contact-title">About us</h4>
              <div className="footer__contact">
                <span className="footer__contact-txt">Introduce </span>
              </div>
              <div className="footer__contact">
                <span className="footer__contact-txt">Recruitment </span>
              </div>
              <div className="footer__contact">
                <span className="footer__contact-txt">Shipping Policy</span>
              </div>
              <div className="footer__contact">
                <span className="footer__contact-txt">
                  Information Security
                </span>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <div className="footer__contacts">
              <h4 className="footer__contact-title">Customer care</h4>
              <div className="footer__contact">
                <span className="footer__contact-txt">Help Center</span>
              </div>
              <div className="footer__contact">
                <span className="footer__contact-txt">Order Guide</span>
              </div>
              <div className="footer__contact">
                <span className="footer__contact-txt">Payment</span>
              </div>
              <div className="footer__contact">
                <span className="footer__contact-txt">Returns & Refunds</span>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <div className="footer__contacts">
              <h4 className="footer__contact-title">Contact us</h4>

              <div className="footer__contact">
                <PhoneInTalkOutlined className="footer__contact-icon" />
                <span className="footer__contact-txt">
                  <a href="tel:18000000"> 1800 0000</a>
                </span>
              </div>

              <div className="footer__contact">
                <EmailOutlined className="footer__contact-icon" />
                <span className="footer__contact-txt">
                  <a href="mailto:ductai2982@gmail.com">Ductai2982@gmail.com</a>
                </span>
              </div>

              <div className="footer__contact">
                <BusinessOutlined className="footer__contact-icon" />
                <span className="footer__contact-txt">
                  70 Tô Ký, Q.12, TPHCM
                </span>
              </div>
              <div className="footer__contact footer__contact--icons">
                <Facebook style={{ fill: "#2D88FF" }} className="icon" />
                <Twitter style={{ fill: "#5DA9DD" }} />
                <Instagram style={{ fill: "#F56040" }} />
                <YouTube style={{ fill: "#FF0000" }} />
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <div className="footer__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2946148355454!2d106.61419711457225!3d10.865181860520774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752a1a124f4105%3A0xb89315414737dcb1!2zxJDhuqFpIEjhu41jIEdpYW8gVGjDtG5nIFbhuq1uIFThuqNpIFRQIEhDTSAtIEPGoSBz4bufIDM!5e0!3m2!1svi!2s!4v1641549553741!5m2!1svi!2s"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen={true}
                loading="lazy"
                scrolling="auto"
                title="map"
              ></iframe>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
