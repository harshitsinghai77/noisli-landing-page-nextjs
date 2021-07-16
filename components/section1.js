import { memo } from "react";
import { APP_NAME } from "../utils/constants";

const Section1 = () => (
  <section className="headline-with-button">
    <div>
      <h1>Be productive with {APP_NAME}</h1>
      <p>
        We provide background sounds that help to mask annoying noises in order
        to keep you sane, improve your focus and boost your productivity.
      </p>

      <section className="get-started">
        <div className="form">
          <a href="https://noisli.netlify.app/" target="_blank">
            <input
              type="submit"
              className="btn"
              value="Get Started with Noisli"
            />
          </a>
        </div>
      </section>
    </div>
    <div className="button">
      <img src="/images/rocket.svg" width="10%" alt="To the moon" />
    </div>
  </section>
);

export default memo(Section1);
