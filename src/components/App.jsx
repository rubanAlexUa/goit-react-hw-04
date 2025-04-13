import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { BeatLoader } from "react-spinners";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageModal from "./ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [fullImage, setFullImage] = useState("");
  const [openedModal, setOpenedModal] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const handleQuery = (e) => {
    e.preventDefault();
    setArticles([]);
    setQuery(inputValue.trim(" "));
    setPage(1);
  };
  useEffect(() => {
    async function getPhotos() {
      if (!query) return;
      try {
        setLoader(true);
        const response = await axios.get(
          `https://api.unsplash.com/search/photos/?client_id=wzjARsj0HvynxBJy0M3xj3JOf_214KKEZB4wlBT_UZU&per_page=10&page=${page}&query=${query}`
        );
        setArticles((prev) => [...prev, ...response.data.results]);
        if (response.data.results.length === 0) {
          toast.error("Nope!");
          return setError(true);
        }
        setError(false);
        toast.success("Success!");
      } catch (error) {
        setError(true);
        toast.error("Nope!");
      } finally {
        setLoader(false);
      }
    }
    getPhotos();
  }, [query, page]);
  useEffect(() => {
    if (fullImage) return setOpenedModal(true);
  }, [fullImage]);

  const exitModal = (e) => {
    if (e.target.tagName !== "IMG") {
      setOpenedModal(false);
    }
  };

  return (
    <>
      <SearchBar
        inputValue={inputValue}
        handleQuery={handleQuery}
        setInputValue={setInputValue}
      />
      {loader && <BeatLoader />}
      <ImageGallery
        articles={articles}
        setFullImage={setFullImage}
        setOpenedModal={setOpenedModal}
      />
      {error && <ErrorMessage query={query} />}
      {articles.length > 0 && <LoadMoreBtn onClick={() => setPage(page + 1)} />}
      {openedModal && (
        <ImageModal fullImage={fullImage} exitModal={exitModal} />
      )}
      <Toaster />
    </>
  );
}

export default App;
