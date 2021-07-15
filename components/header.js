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
        <li className="language-switcher">
          <a href="/">Homepage</a>
        </li>
        <li className="language-switcher">
          <a href="/about-us">About us</a>
        </li>
        <li>
          <a className="flag-icon flag-icon-fr" href="/fr-fr">
            Fuck me
          </a>
        </li>
      </ul>
    </div>
  </header>
);

export default memo(Header);
