const Values = () => {
  return (
    <section className="about-values">
      <h2>How the Gallery Works</h2>

      <div className="values-grid">
        <div className="value-item">
          <h3>Selection over scale</h3>
          <p>Only a limited number of works are shown at a time.</p>
        </div>

        <div className="value-item">
          <h3>No algorithmic ranking</h3>
          <p>Works are presented without popularity bias.</p>
        </div>

        <div className="value-item">
          <h3>Slow updates</h3>
          <p>The collection evolves gradually, not constantly.</p>
        </div>

        <div className="value-item">
          <h3>Artist-first approach</h3>
          <p>Expression matters more than metrics.</p>
        </div>
      </div>
    </section>
  );
};

export default Values;