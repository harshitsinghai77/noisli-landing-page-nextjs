import { memo } from "react";

const Footer = () => (
  <footer>
    <p className="copyright">2021 © Harshit Singhai</p>
    <div className="social">
      <a href="https://github.com/harshitsinghai77" target="_blank">
        <img src="/images/github-logo.png" alt="Instagram social icon" />
      </a>
    </div>
  </footer>
);

export default memo(Footer);
