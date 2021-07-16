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
            Get notified about updates and be the first to get early access. Be
            more productive with {APP_NAME}.
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
        <a href="https://noisli.netlify.app/" target="_blank">
          <input type="submit" className="btn" value="Join our Newsletters" />
        </a>
      </div>
    </section>
  );
}
