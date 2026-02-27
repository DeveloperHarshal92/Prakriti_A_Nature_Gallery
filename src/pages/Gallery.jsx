import { useEffect, useState } from "react";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
   const [index, setIndex] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://picsum.photos/v2/list?page=${index}&limit=80`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }

        const data = await response.json();
        setImages(data);
        setFilteredImages(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchData();
  }, [index]);

  useEffect(() => {
    const filtered = images.filter((img) =>
      img.author.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredImages(filtered);
  }, [search, images]);

  return (
    <section className="gallery-page">
      <div className="gallery-header">
        <h1>Gallery</h1>
        <input
          type="text"
          placeholder="Search by author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading && (
        <div className="gallery-loading">
          <span>Loading artworks…</span>
        </div>
      )}

      {!loading && filteredImages.length === 0 && (
        <div className="gallery-empty">
          <span>No images found</span>
        </div>
      )}

      {!loading && (
        <div className="gallery-box">
          {filteredImages.map((img) => (
            <div className="gallery-card" key={img.id}>
              <img src={img.download_url} alt={img.author} />
            </div>
          ))}
        </div>  
      )}

       <div className="gallery-pagination">
        <button
          disabled={index === 1}
          onClick={() => setIndex((prev) => prev - 1)}
        >
          Previous
        </button>

        <span>Page {index}</span>

        <button onClick={() => setIndex((prev) => prev + 1)}>
          Next
        </button>
      </div>
    </section>
  );
};

export default Gallery;