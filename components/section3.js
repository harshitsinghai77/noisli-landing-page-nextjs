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
            create your perfect sound environment. We currently offer 16 high
            quality background sounds that you can play individually or combine
            with each other. You can adjust the volume for each sound in order
            to customize your combinations to your needs and make them your own.
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

          <h3>Personalize everything.</h3>
          <p>
            Which background color help you relax and stay calm, after how much
            second do you need it to change? Do you want all colors or do you
            want a specific color? How many session do you plan to do each day?
            How much long should each session last? Nemo is highly customizable.
            We want to help you create your perfect environment so that you can
            have undistracted focus and do your best and most amazing work.
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
          <h3>Keep track of your day.</h3>
          <p>
            Our anlytics helps you to measure your productivity. The
            visualization helps you have a clear picture of your unproductive
            days and also helps with other insights on how your week went.
          </p>

          <h3>Focus your energy to concentrate better.</h3>
          <p>
            With our Timer, students or working professionals can stay
            concentrated in small blocks of time in order to be more efficient
            without draining too much energy. Moreover, frequent breaks allow
            you to recharge and enter the next session fresh and energized. The
            length of the Timer and the Breaks can be customized individually by
            each user.
          </p>

          <h3>Get Better Insights</h3>
          <p>
            We also provide additional insights. Such as your best day and how
            much far away are you from your goal. You can configure your week
            goal depending on your work. We will tell you which day was the best
            week day and how many more hours you need to put in to reach your
            week goal.
          </p>

          <h3>Default Settings</h3>
          <p>
            We don't ask you unnecessary questions to help you identify your
            perfect environment. Nemo comes with default settings, you can
            always edit settings based on your preferences to create your
            focused environment.
          </p>
        </div>
      </div>
    </section>
  );
}
