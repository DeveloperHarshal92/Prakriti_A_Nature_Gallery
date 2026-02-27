const BlogCard = ({ title, excerpt, date }) => {
  return (
    <article className="blog-card">
      <span className="date">{date}</span>
      <h2>{title}</h2>
      <p>{excerpt}</p>
      <span className="read">Read article →</span>
    </article>
  );
};

export default BlogCard;