import BookHero from "../components/book/BookHero";
import BookForm from "../components/book/BookForm";
import BookInfo from "../components/book/BookInfo";

const Book = () => {
  return (
    <main className="book-page">
      <BookHero />
      <BookForm />
      <BookInfo />
    </main>
  );
};

export default Book;
