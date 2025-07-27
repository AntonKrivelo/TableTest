import ModalWrapper from '../ModalWrapper/ModalWrapper';
import './ConfirmModal.scss';

const ConfirmModal = ({ onClose, onSubmit }) => {
  return (
    <ModalWrapper onClose={onClose}>
      <div className="wrapper">
        <h2 className="title">Удалить элемент?</h2>
        <div className="buttons">
          <button className="button button--cancel" onClick={onClose} type="button">
            Нет
          </button>
          <button
            className="button button--confirm"
            onClick={() => {
              onSubmit();
              onClose();
            }}
            type="button"
          >
            Да
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ConfirmModal;
