import {
  Header,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Footer,
} from "../components";

function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
