import "./App.css";
import Dog from "./components/Dog";
import { Canvas } from "@react-three/fiber";

const placeholder =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

function App() {
  return (
    <main>
      <div className="images">
        <img id="tomorrowland" src={placeholder} alt="Tomorrowland project" />
        <img id="navy-pier" src={placeholder} alt="Navy Pier project" />
        <img id="msi-chicago" src={placeholder} alt="MSI Chicago project" />
        <img id="phone" src={placeholder} alt="Mobile experience" />
        <img id="kikk" src={placeholder} alt="KIKK Festival project" />
        <img id="kennedy" src={placeholder} alt="Kennedy Center project" />
        <img id="opera" src={placeholder} alt="Royal Opera project" />
      </div>
      <Canvas
        id="canvas-elem"
        style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <Dog />
      </Canvas>
      <section id="section-1">
        <nav>
          <div className="nav-elem brand">Dogstudio</div>
          <div className="nav-elem menu-item">
            <i className="ri-arrow-drop-right-line"></i>
            Our Show Reel
          </div>
          <div className="nav-elem menu-item">
            <i className="ri-menu-3-line"></i>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Rare by Design</p>
            <h1>
              We build motion-led
              <br />
              experiences that feel
              <br />
              impossibly alive.
            </h1>
            <p className="hero-text">
              A studio for ambitious brands, spatial narratives, and cultural
              moments. We combine 3D, code, and storytelling to turn bold ideas
              into unforgettable worlds.
            </p>
            <div className="hero-actions">
              <button className="primary">Start a conversation</button>
              <button className="secondary">View the reel</button>
            </div>
          </div>

          <div className="hero-cards">
            <div className="card card-rare">
              <span>Ultra Rare Thought</span>
              <p>Every frame is designed to feel like a limited edition moment.</p>
            </div>
            <div className="card card-motion">
              <span>Motion as Memory</span>
              <p>We craft animated systems that breathe with timing, depth and surprise.</p>
            </div>
            <div className="card card-geometry">
              <span>Geometry of Feeling</span>
              <p>Form, light, and texture work together to create emotional resonance.</p>
            </div>
          </div>
        </div>

        <div className="section-lines">
          <div className="first-line"></div>
          <div className="second-line"></div>
        </div>
      </section>

      <section id="section-2">
        <div className="section-heading">
          <p className="eyebrow">Selected Works</p>
          <h2>Projects that keep you looking twice.</h2>
        </div>

        <div className="titles">
          <div img-title="tomorrowland" className="title">
            <small>2020 - ONGOING</small>
            <h1>Tomorrow land</h1>
          </div>
          <div img-title="navy-pier" className="title">
            <small>2020 - ONGOING</small>
            <h1>Navy Pier</h1>
          </div>
          <div img-title="msi-chicago" className="title">
            <small>2020 - ONGOING</small>
            <h1>MSI Chicago</h1>
          </div>
          <div img-title="phone" className="title">
            <small>2020 - ONGOING</small>
            <h1>This was Louise's Phone</h1>
          </div>
          <div img-title="kikk" className="title">
            <small>2020 - ONGOING</small>
            <h1>KIKK Festival 2018</h1>
          </div>
          <div img-title="kennedy" className="title">
            <small>2020 - ONGOING</small>
            <h1>The Kennedy Center</h1>
          </div>
          <div img-title="opera" className="title">
            <small>2020 - ONGOING</small>
            <h1>Royal Opera Of Wallonia</h1>
          </div>
        </div>
      </section>

      <section id="section-3">
        <div className="section-heading center">
          <p className="eyebrow">The thinking</p>
          <h2>Rare ideas, amplified with motion.</h2>
        </div>

        <div className="thought-grid">
          <article className="thought-card">
            <h3>Look again</h3>
            <p>
              We design every surface so it rewards attention for longer than a
              glance.
            </p>
          </article>
          <article className="thought-card">
            <h3>Sense of scale</h3>
            <p>
              Depth, contrast and lighting become the secret storytelling
              language of the work.
            </p>
          </article>
          <article className="thought-card">
            <h3>Unexpected detail</h3>
            <p>
              Small shifts in pace create meaning. We treat animation like
              architecture.
            </p>
          </article>
        </div>
      </section>

      <section id="section-4">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>Let's make something rare together.</h2>
            <p>
              Send us a brief, share your wildest idea, or ask how we can make your
              next brand moment feel alive.
            </p>
          </div>
          <div className="contact-actions">
            <a className="primary" href="mailto:hello@dogstudio.com">
              hello@dogstudio.com
            </a>
            <a className="secondary" href="/#section-2">
              Explore the work
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
