import { useState } from "react";

function ExploreSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Message sent successfully");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="section3">
      <div className="explore-left">
        <h2>Explore the Space</h2>
        <p>
          Navigate through curated sections or reach out to begin a conversation.
        </p>

        <div className="explore-cards">
          <a href="/gallery" className="card">Gallery</a>
          <a href="/about" className="card">About</a>
          <a href="/blog" className="card">Journal</a>
          <a href="/book" className="card">Book a Visit</a>
        </div>
      </div>

      <div className="explore-right">
        <form onSubmit={handleSubmit} noValidate>
          <h3>Contact Us</h3>

          <div className="field">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <small>{errors.name}</small>}
          </div>

          <div className="field">
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small>{errors.email}</small>}
          </div>

          <div className="field">
            <textarea
              name="message"
              placeholder="Your message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <small>{errors.message}</small>}
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default ExploreSection;