import c from "./ImageCard.module.css";
export default function Imagecard({ article, setFullImage, setOpenedModal }) {
  const handleClick = () => {
    setFullImage(article.urls.full);
    setOpenedModal(true);
  };
  return (
    <li className={c.image_card}>
      <img
        src={article.urls.small}
        alt={article.alt_description}
        onClick={handleClick}
      />
    </li>
  );
}
