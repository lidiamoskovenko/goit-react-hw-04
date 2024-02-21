import { useState, useEffect } from "react";
import fetchImages from "../Api.js";
import Searchbar from "../Searchbar/Searchbar.jsx";

import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import LoadMoreButton from "../LoadMoreButton/LoadMoreButton";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";

 const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [total, setTotal] = useState(null);


  useEffect(() => {
    if (query === "") return;

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedData = await fetchImages(query, page);
        setImages((prevImages) => [...prevImages, ...fetchedData.results]);
        setTotal(fetchedData.total);

      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [query, page]);

    const searchImages = (value) => {
    setQuery(value);
    setPage(1);
    setImages([]);
  };

const loadMoreImages = () => {
  setLoading(true);
  setPage(page+1);
}

  return (
<div>
<Searchbar onSubmit={searchImages} currentQuery={query}/>
{loading && <Loader />}
{images.length > 0 && <ImageGallery images={images}/>}
{images.length < total && !error && !loading  && <LoadMoreButton onClick={loadMoreImages} />}
{total === 0 && !error &&<ErrorMessage message={`Not found, try again`}/>}
{error &&<ErrorMessage message={' Whoops! Something bad happened, try reloading page 🥲'}/>}
</div>)}

export default App;