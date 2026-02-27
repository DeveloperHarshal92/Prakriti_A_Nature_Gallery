const BookForm = () => {
  return (
    <section className="book-form">
      <form>
        <div className="field">
          <label>Name</label>
          <input type="text" placeholder="Your full name" />
        </div>

        <div className="field">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" />
        </div>

        <div className="field">
          <label>Date</label>
          <input type="date" />
        </div>

        <div className="field">
          <label>Message</label>
          <textarea placeholder="Anything you'd like us to know…" />
        </div>

        <button type="submit">Request Booking</button>
      </form>
    </section>
  );
};

export default BookForm;
