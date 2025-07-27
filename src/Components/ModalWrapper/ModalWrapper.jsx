import './ModalWrapper.scss';

const ModalWrapper = ({ children, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleOverlayClick}>
      <div className="modalWrapper">{children}</div>
    </div>
  );
};

export default ModalWrapper;
