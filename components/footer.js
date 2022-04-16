import { memo } from "react";

const Footer = () => (
  <footer>
    <p className="copyright">2022 © Harshit Singhai</p>
    <div className="social">
      <a href="https://github.com/harshitsinghai77" target="_blank">
        <img src="/images/github-logo.png" alt="Github social icon" />
      </a>
      <a href="https://twitter.com/harshit_778" target="_blank">
        <img src="/images/twitter-logo.png" alt="Twitter social icon" />
      </a>
    </div>
  </footer>
);

export default memo(Footer);
