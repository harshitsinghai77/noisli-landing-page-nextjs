import { Header, Footer } from "../components";
export default function OtherProduct() {
  return (
    <>
      <Header />
      <main>
        <section className="about-us">
          <div>
            <a href="https://nemo-lofi.netlify.app/" target="_blank">
              <h3 className="pinkColored">Nemo Lofi</h3>
            </a>
            <p>
              Nemo Lofi is a lofi music player by Nemo that allows you to listen
              to lofi sounds to help you focus, be productive and get work done.
            </p>
            <a href="https://nemothread-1-e7133226.deta.app/" target="_blank">
              <h3 className="pinkColored">Nemo Thread</h3>
            </a>
            <p>
              Saving Twitter threads have never been easier. No sign up
              required. Just mention{" "}
              <span className="pinkColored">@focus_with_nemo</span> and you're
              done.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}