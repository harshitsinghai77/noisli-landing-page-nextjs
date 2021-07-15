import { Header, Footer } from "../components";

export default function AboutUs() {
  return (
    <>
      <Header />
      <main>
        <section className="about-us">
          <div>
            <h2>About Noisli</h2>

            <p>Noisli is your digital place for focus.</p>
            <p>
              With Noisli you can mix and match different sounds in order to
              create your perfect sound environment. In places where it is
              either too loud or too quiet, Noisli helps to mask annoying noises
              and to create a pleasant sound environment in order to stay
              focused and relax.
            </p>
            <p>
              Our timer keeps tracks of the time you've been focused and
              productive. You can keep track of the last seven days with our
              chart visualization.
            </p>

            <h3>Self-started with passion</h3>
            <p>
              Noisli started as a side project in 2021. At that time the
              founder, Harshit, was working remotely as software engineer.
              Struggling to find motivation and to not feel isolated at home,
              but also finding it difficult to maintain focus when working from
              home, Noisli was the solution to the problem. Today Noisli is
              helping people around the world to stay sane at work, at home and
              on the go.
            </p>

            <h3>Simplicity and care for people.</h3>
            <p>
              At Noisli we value simplicity, care for good design and details
              and we put passion in everything we do. We are driven by the goal
              to create the best possible product and to provide our users with
              a service that is not just helping them but which they also love
              to use.
            </p>
            <p>
              We put people at the core of our work, respecting our users and
              treating them with kindness. We’re building Noisli around people
              and their needs and we believe that products should not fight for
              users’ attention at all times and at any cost. Products can be
              useful and respectful, honest and enjoyable. And we want to do
              exactly that, making our small contribution to make the world a
              better place.
            </p>
            <p>
              If you want to support us, then just help spreading some kindness
              or say hello :)
            </p>

            <p>
              All the Best <br /> Harshit Singhai
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
