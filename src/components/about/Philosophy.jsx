import img1 from "../../assets/images/Big.avif";

const Philosophy = () => {
  return (
    <section className="about-philosophy">
      <div className="text">
        <span className="eyebrow">OUR PHILOSOPHY</span>
        <h1>Curated, not collected.</h1>
        <p>
          This gallery exists to slow things down. In a world of endless images,
          we believe fewer works, chosen with intent, create deeper connection.
          Each piece here is selected for stillness, emotion, and honesty.
        </p>
      </div>

      <div className="visual">
      <img src={img1} alt="Nature 1" />
    </div>
    </section>
  );
};

export default Philosophy;