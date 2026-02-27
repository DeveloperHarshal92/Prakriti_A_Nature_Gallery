import img1 from "../../assets/images/Artist1.avif";
import img2 from "../../assets/images/Artist2.avif";
import img3 from "../../assets/images/Artist3.avif";

const Curators = () => {
  return (
    <section className="about-curators">
      <h2>Behind the Gallery</h2>

      <div className="curator-list">
        <div className="curator-card">
          <img src={img1} alt="Curator" />
          <h3>Aarav Mehta</h3>
          <p>Drawn to negative space and quiet light.</p>
        </div>

        <div className="curator-card">
          <img src={img2} alt="Curator" />
          <h3>Neha Kapoor</h3>
          <p>Exploring form through nature and texture.</p>
        </div>

        <div className="curator-card">
          <img src={img3} alt="Curator" />
          <h3>Rohan Iyer</h3>
          <p>Finding stories in everyday stillness.</p>
        </div>
      </div>
    </section>
  );
};

export default Curators;