import BlogCard from "./BlogCard";

const BlogList = () => {
  const posts = [
    {
      title: "Why fewer images say more",
      excerpt:
        "In an age of endless scrolling, restraint becomes a form of expression.",
      date: "Mar 2026",
    },
    {
      title: "Curation as an act of care",
      excerpt:
        "Selecting work is not about exclusion, but about creating space.",
      date: "Feb 2026",
    },
    {
      title: "Designing for stillness",
      excerpt:
        "What happens when interfaces stop asking for attention?",
      date: "Jan 2026",
    },
  ];

  return (
    <section className="blog-list">
      {posts.map((post, index) => (
        <BlogCard key={index} {...post} />
      ))}
    </section>
  );
};

export default BlogList;