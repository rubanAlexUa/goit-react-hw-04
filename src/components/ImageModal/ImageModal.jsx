import c from "./ImageModal.module.css";
export default function ImageModal({ fullImage, exitModal }) {
  return (
    <div className={c.modal} onClick={exitModal}>
      <img src={fullImage} alt="fullImageVersion" />
    </div>
  );
}
