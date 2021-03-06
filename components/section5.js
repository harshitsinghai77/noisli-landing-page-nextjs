import { APP_NAME } from "../utils/constants";

export default function Section5() {
  return (
    <section className="email-signup">
      <div className="description">
        <div>
          <h2>Get notified</h2>
        </div>
        <div>
          <p>
            Get notified about updates and be the first to get early access.
          </p>
        </div>
      </div>
      <div className="form">
        <div>
          <p>Your Email:</p>
        </div>
        <input
          type="text"
          className="email-input"
          name="FirstName"
          placeholder="Enter email to recieve updates."
        />
        <a href="https://nemo-app.netlify.app/" target="_blank">
          <input type="submit" className="btn" value="Take me home" />
        </a>
      </div>
      {/* <div className="img">
        <img src="/images/rocket.svg" width="80%" alt="Nemo" />
      </div> */}
    </section>
  );
}
