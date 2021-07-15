import { memo } from "react";

const Footer = () => (
  <footer>
    <p className="copyright">2021 © Harshit Singhai</p>
    <div className="social">
      <img
        src="https://nextjs-multi-language-site.vercel.app/images/facebook.png"
        alt="Facebook social icon"
      />
      <img
        src="https://nextjs-multi-language-site.vercel.app/images/facebook.png"
        alt="Instagram social icon"
      />
      <img
        src="https://nextjs-multi-language-site.vercel.app/images/facebook.png"
        alt="Twitter social icon"
      />
    </div>
  </footer>
);

export default memo(Footer);
