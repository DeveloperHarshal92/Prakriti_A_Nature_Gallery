import philosophy1 from "../../assets/images/gallery-1.jpeg";
import philosophy2 from "../../assets/images/gallery-2.jpeg";
import philosophy3 from "../../assets/images/gallery-3.jpeg";

function PhilosophySection() {
  return (
    <section id="section2">
      <div className="philo-box">
        <div className="philo-text">
          <h2>Curated With Intention</h2>
          <p>
            Every artwork is selected for its ability to communicate emotion,
            balance, and visual harmony rather than noise or trend.
          </p>
        </div>
        <div className="philo-image">
          <img src={philosophy1} alt="Curated art" />
        </div>
      </div>

      <div className="philo-box reverse">
        <div className="philo-text">
          <h2>Designed As A Journey</h2>
          <p>
            The experience unfolds gradually, allowing visitors to pause,
            observe, and explore without distraction or overload.
          </p>
        </div>
        <div className="philo-image">
          <img src={philosophy2} alt="Art experience" />
        </div>
      </div>

      <div className="philo-box">
        <div className="philo-text">
          <h2>Where Art Breathes</h2>
          <p>
            Light, space, and stillness come together to create a calm digital
            environment that encourages deeper observation.
          </p>
        </div>
        <div className="philo-image">
          <img src={philosophy3} alt="Gallery atmosphere" />
        </div>
      </div>
    </section>
  );
}

export default PhilosophySection;