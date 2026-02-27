import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="notfound">
      <span className="eyebrow">404</span>
      <h1>This page wandered off.</h1>
      <p>
        The space you’re looking for doesn’t exist, or has been moved.
        Let’s return to something familiar.
      </p>

      <Link to="/" className="cta">
        Go back home
      </Link>
    </section>
  );
}

export default NotFound;