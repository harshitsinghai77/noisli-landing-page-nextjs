import { memo } from "react";

const Section1 = () => (
  <section className="headline-with-button">
    <div>
      <h1>Be productive with Noisli</h1>
      <p>
        Life can feel overwhelming, but it doesn’t have to. Todoist lets you
        keep track of everything in one place, so you can get it all done and
        enjoy more peace of mind along the way.
      </p>
    </div>
    <div className="button">
      <img src="/images/rocket.svg" width="10%" alt="To the moon" />
    </div>
  </section>
);

export default memo(Section1);
