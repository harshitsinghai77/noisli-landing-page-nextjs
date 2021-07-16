import { APP_NAME } from "../utils/constants";

export default function Section3() {
  return (
    <section className="text-info">
      <div className="left-column">
        {/* <img src="/images/noisli_logo.png" alt="Checkbox icon" /> */}
        <div>
          <h2>{APP_NAME} is your digital place for focus.</h2>
        </div>
        <div>
          <p>
            With {APP_NAME} you can mix and match different sounds in order to
            create your perfect sound environment. We currently offer 28 high
            quality background sounds that you can play individually or combine
            with each other. You can adjust the volume for each sound in order
            to customize your combinations to your needs and make them your own.
          </p>
        </div>
      </div>
      <div className="right-column">
        <div>
          <h3>
            Mix different sounds and create your perfect sound environment to
            work and relax.
          </h3>
          <p>
            We provide background sounds that help to mask annoying noises in
            order to keep you sane, improve your focus and boost your
            productivity.
          </p>
          <h3>Get Visualization on how your day went.</h3>
          <p>
            Our anlytics helps you with insights on how your week went and how
            much hours were your productive each day.
          </p>
          <h3>
            No matter where you are working from, once out of focus, it takes
            you an average of 25 minutes to fully focus again!
          </h3>
          <p>
            Distractions are everywhere and most of the time you have very
            little control over them: a sound notification from your phone or
            computer, someone on a call next to you, people coming in and out,
            or a simple thought you’re having in your mind giving you no rest.
          </p>
          <h3>Focus your energy to study better.</h3>
          <p>
            With our Timer, students can stay concentrated in small blocks of
            time in order to be more efficient without draining too much energy.
            Moreover, frequent breaks allow students to recharge and enter the
            next session fresh and energized. The length of the Timer and the
            Breaks can be customized individually by each user.
          </p>
        </div>
      </div>
    </section>
  );
}
