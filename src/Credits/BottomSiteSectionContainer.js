import "./BottomSiteSectionContainer.css";
import React from "react";

const BottomSiteSectionContainer = () => {
  return (
    <section className="bottomSite">
      <div className="bottomSite-Wrapper">
        <div className="bottomSiteWebsiteTitleContainer">
          <h2>Endless Demands</h2>
        </div>
        <div className="contactWrapper">
          <div className="formContainer">
            <form action="https://formspree.io/f/mjvlvgad" method="POST">
              <input
                type="email"
                id="Email"
                className="email"
                name="email"
                placeholder="Your email.."
              />

              <input
                type="text"
                id="subject"
                className="subject"
                name="subject"
                placeholder="Subject.."
              />

              <textarea
                id="message"
                name="message"
                className="message"
                placeholder="Write something.."
              ></textarea>
              <input type="submit" className="submit" value="Submit" />
            </form>
          </div>
          <div className="contactMethods">
            <h3>Get in Touch</h3>
            <p>
              Feel free to contact me regarding my projects, code or invite me
              to any future opportunities that you think could benefit from my
              skillset or input. Thank you dear viewer for visiting my site
              Endless Demands and I hope to hear from you soon about any amazing
              opportunities. Thank you.
            </p>
            <div className="contactIcons"></div>
          </div>
        </div>
      </div>
      <div className="credits">
        <p>Created by Ryan Van Den Eeckhout</p>
      </div>
    </section>
  );
};

export default BottomSiteSectionContainer;
