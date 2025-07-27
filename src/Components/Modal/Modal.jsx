import { useId } from 'react';
import './Modal.scss';
import { useForm } from 'react-hook-form';
import ModalWrapper from '../ModalWrapper/ModalWrapper';

const Modal = ({ onClose, onSubmit, userData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const newId = useId();
  const id = userData ? userData.id : newId;

  const handleFormSubmit = (userData) => {
    const result = { ...userData, id };
    onSubmit(result);
    onClose();
  };

  return (
    <ModalWrapper onClose={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Введите данные пользователя: </h3>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="modal__content-form">
          <div>
            <input
              {...register('name', {
                required: 'Введите имя пользователя!',
                pattern: {
                  value: /^[A-Za-zА-Яа-яЁё\s]+$/,
                  message: 'Введите корректное имя',
                },
              })}
              type="text"
              placeholder="Введите имя и фамилию:"
              defaultValue={userData?.name}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div>
            <input
              {...register('date', {
                required: 'Введите дату!',
                pattern: {
                  value: /^\d{4}-\d{2}-\d{2}$/,
                  message: 'Введите корректную дату',
                },
              })}
              type="date"
              placeholder="Введите дату:"
              defaultValue={userData?.date}
            />
            {errors.date && <p>{errors.date.message}</p>}
          </div>
          <div>
            <input
              {...register('age', {
                required: 'Введите возраст!',
                pattern: {
                  value: /^\d+$/,
                  message: 'Введите корректный возраст',
                },
              })}
              type="text"
              placeholder="Введите возраст:"
              defaultValue={userData?.age}
            />
            {errors.age && <p>{errors.age.message}</p>}
          </div>
          <button onClick={onClose} type="button">
            Отменить
          </button>
          <button type="submit">Добавить</button>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
