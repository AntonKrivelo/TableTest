import { useState } from 'react';
import './Table.scss';
import Modal from '../Modal/Modal';
import ConfirmModal from '../ConfirmModal/ConfirmModal';

const Table = ({ data }) => {
  const [usersData, setUsersData] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [removeItemId, setRemoveItemId] = useState(null);

  const deleteUser = (idToItem) => {
    setUsersData((prevItems) => prevItems.filter((usersData) => usersData.id !== idToItem));
  };

  const handleAddSubmit = (formData) => {
    setUsersData([...usersData, formData]);
  };

  const handleEditSubmit = (updatedData) => {
    setUsersData(
      usersData.map((item) => {
        return item.id === updatedData.id ? updatedData : item;
      }),
    );
  };
  return (
    <div className="table-container">
      <h2 className="table-title">Таблица данных</h2>
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
        className="button-tab"
      >
        Открыть окно для добавления пользователя
      </button>

      <table className="data-table">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Дата</th>
            <th>Возраст</th>
            <th>Действия</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>{item.age}</td>
              <td className="delete-btn" onClick={() => setRemoveItemId(item.id)}>
                Удалить
              </td>
              <td className="edit-btn" onClick={() => setEditData(item)}>
                Изменить
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && <Modal onSubmit={handleAddSubmit} onClose={() => setIsModalOpen(false)} />}
      {editData && (
        <Modal userData={editData} onSubmit={handleEditSubmit} onClose={() => setEditData(null)} />
      )}
      {removeItemId && (
        <ConfirmModal
          onClose={() => setRemoveItemId(null)}
          onSubmit={() => deleteUser(removeItemId)}
        />
      )}
    </div>
  );
};

export default Table;
