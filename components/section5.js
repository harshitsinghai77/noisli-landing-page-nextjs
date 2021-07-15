export default function Section5() {
  return (
    <section className="email-signup">
      <div className="description">
        <div>
          <h2>Get notified</h2>
        </div>
        <div>
          <p>
            Get notified about updates and be the first to get early access to
            the become more productive and focus Facebook social iconInstagram
            social icon.
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
        <input type="submit" className="btn" value="Join our Newsletters" />
      </div>
    </section>
  );
}
