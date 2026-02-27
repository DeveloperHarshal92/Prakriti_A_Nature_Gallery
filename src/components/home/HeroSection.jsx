import heroVideo from "../../assets/videos/Nature_film_abstract_art_gallery_delpmaspu_.mp4";

function HeroSection() {
  return (
    <section id="section1">
      <div className="hero-left">
        <h1>Art That Breathes</h1>
        <p>
          A curated digital space where light, form, and stillness come together
          to create calm, immersive experiences.
        </p>

        <a href="/gallery" className="cta">
          <span>Explore Gallery</span>
          <i className="ri-arrow-right-line"></i>
        </a>
      </div>

      <div className="hero-right">
        <video src={heroVideo} autoPlay muted loop playsInline controls />
      </div>
    </section>
  );
}

export default HeroSection;
