export default function Section2() {
  return (
    <section className="full-width-image auto-grid">
      <div className="main-img">
        <video width="100%" controls preload="none" autoPlay>
          <source src="/asset/nemo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="main-img">
        <img src="/images/nemo_1.png" alt="" />
      </div>
      <div className="background left-bg">
        <img
          src="https://nextjs-multi-language-site.vercel.app/images/full-width-image-background.png"
          alt="Background pattern"
        />
      </div>
      <div className="background left-bg">
        <img
          src="https://nextjs-multi-language-site.vercel.app/images/full-width-image-background.png"
          alt="Background pattern"
        />
      </div>
      <div className="main-img">
        <img src="/images/nemo_3.png" alt="" />
      </div>
      <div className="background left-bg">
        <img
          src="https://nextjs-multi-language-site.vercel.app/images/full-width-image-background.png"
          alt="Background pattern"
        />
      </div>
    </section>
  );
}
