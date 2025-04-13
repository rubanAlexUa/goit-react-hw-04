import c from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
export default function ImageGallery({
  articles,
  setFullImage,
  setOpenedModal,
}) {
  return (
    <ul className={c.gallery_list}>
      {articles.map((article) => (
        <ImageCard
          key={article.id}
          article={article}
          setFullImage={setFullImage}
          setOpenedModal={setOpenedModal}
        />
      ))}
    </ul>
  );
}
