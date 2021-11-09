import { memo } from "react";
import Link from "next/link";

const Header = () => (
  <header>
    <div className="menu">
      <Link href="/">
        <img className="logo" src="/images/nemo_logo.png" alt="Site logo" />
      </Link>
    </div>
    <div className="menu">
      <ul>
        <li>
          <Link href="/">Homepage</Link>
        </li>
        <li>
          <Link href="/about-us">About</Link>
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
