import { Header, Footer } from "../components";
import { APP_NAME } from "../utils/constants";

export default function Privacy() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <section className="about-us">
          <div>
            <h2> {APP_NAME} Privacy Policy</h2>
            <p>
              We understand that your privacy is important, and this policy
              outlines how we collect, use, and protect your information.
            </p>
            <h3>What information do we collect?</h3>
            <ul>
              <li>
                <strong>Device and browser information:</strong> We collect
                basic information about your device and browser, such as{" "}
                operating system, browser type, and language. This helps us
                optimize our app for different platforms and provide the best
                possible experience.
              </li>
              <li>
                <strong>Usage data:</strong> We collect data about how you use{" "}
                {APP_NAME}, such as the sounds you mix, session duration, and
                timer settings. This information helps us understand your
                preferences and improve the app's functionality.
              </li>
              <li>
                <strong>Analytics data:</strong> We use anonymous analytics
                tools to track things like app usage, user behaviors, and
                overall performance . This helps us identify areas for
                improvement and ensure {APP_NAME} is constantly evolving.
              </li>
            </ul>
            <h3>How do we use your information?</h3>
            <ul>
              <li>
                <strong>Enhance your experience:</strong> We use your usage data
                to personalize your {APP_NAME} experience, including
                recommending sounds and settings you might enjoy.
              </li>
              <li>
                <strong>Improve the app:</strong> We use your anonymized data to
                improve {APP_NAME}'s features and functionality, ensuring it
                meets your needs.
              </li>
              <li>
                <strong>Communicate with you:</strong> If you share your email
                address, we may send you occasional updates, newsletters, and
                promotional offers.
              </li>
            </ul>
            <h3>How do we protect your information?</h3>
            <ul>
              <li>
                <strong>Security measures:</strong> We employ industry-standard
                security measures to protect your information from unauthorized
                access, disclosure, alteration, or destruction.
              </li>
              <li>
                <strong>Data anonymization:</strong> We anonymize your usage
                data before using it for analysis or improvement purposes.
              </li>
              <li>
                <strong>Data minimization:</strong> We collect only the
                information necessary to operate {APP_NAME} effectively and
                deliver the best possible experience .
              </li>
            </ul>
            <h3>Your choices and rights:</h3>
            <ul>
              <li>
                <strong>Access and update your information:</strong> You can
                access and update your information at any time by visiting the
                settings page.
              </li>
              <li>
                <strong>Opt-out of analytics:</strong> You can choose to opt-out
                of anonymous analytics tracking within the app settings.
              </li>
              <li>
                <strong>Withdraw your consent:</strong> If you choose to share
                your email address, you can withdraw your consent at any time by
                contacting us .
              </li>
              <li>
                <strong>Data deletion:</strong> You have the right to request
                deletion of your personal data. We will promptly comply with
                your request unless we are legally obligated to retain the
                information.
              </li>
            </ul>
            <h5>Contact us:</h5>
            If you have any questions about this privacy policy or your
            information, please feel free to contact us at{" "}
            <span className="pinkColored">harshitsinghai77@gmail.com</span>
            <p>
              All the Best
              <br />
              Harshit Singhai
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
