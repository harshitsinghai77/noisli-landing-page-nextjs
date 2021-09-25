import { memo } from "react";
import { APP_NAME } from "../utils/constants";

const Section1 = () => (
  <section className="headline-with-button">
    <div>
      <h1>Be productive with {APP_NAME}</h1>
      <p>
        Nemo is your little helper and companion no matter if you need to focus,
        tune out other noises or if you want to have a moment of calm and relax.
      </p>

      <section className="get-started">
        <div className="form">
          <a href="https://nemo-app.netlify.app/" target="_blank">
            <input
              type="submit"
              className="btn"
              value="Get Started with Nemo"
            />
          </a>
        </div>
      </section>
    </div>
    <div className="button">
      <img src="/images/rocket.svg" width="80%" alt="To the moon" />
    </div>
  </section>
);

export default memo(Section1);
