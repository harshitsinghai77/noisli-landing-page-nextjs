import { memo } from "react";

const Header = () => (
  <header>
    <div className="menu">
      <a href="/">
        <img className="logo" src="/images/noisli_logo.png" alt="Site logo" />
      </a>
    </div>
    <div className="menu">
      <ul>
        <li>
          <a href="/">Homepage</a>
        </li>
        <li>
          <a href="/about-us">About</a>
        </li>
        <li>
          <a target="_blank" href="https://nemo-app.netlify.app/">
            Get Started
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://fictionally-irrelevant.vercel.app/posts/nemo-your-digital-place-to-focus"
          >
            Learn More
          </a>
        </li>
      </ul>
    </div>
  </header>
);

export default memo(Header);
