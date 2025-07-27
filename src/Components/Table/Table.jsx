import { useEffect, useState } from 'react';
import './Table.scss';
import Modal from '../Modal/Modal';
import ConfirmModal from '../ConfirmModal/ConfirmModal';

const Table = ({ data }) => {
  const [usersData, setUsersData] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [removeItemId, setRemoveItemId] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [sort, setSort] = useState(null);

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

  useEffect(() => {
    let searchData = data;
    searchData = searchData.filter((el) => {
      return Object.values(el).some((e) => `${e}`.includes(searchValue));
    });
    setUsersData(searchData);
  }, [searchValue]);

  useEffect(() => {
    let sortedTableData = [...usersData];
    const sortAgeLowToHigh = (a, b) => {
      return a.age - b.age;
    };
    const sortAgeHighToLow = (a, b) => {
      return b.age - a.age;
    };
    const sortNameLowToHigh = (a, b) => {
      return a.name.localeCompare(b.name);
    };
    const sortNameHighToLow = (a, b) => {
      return b.name.localeCompare(a.name);
    };
    const sortDateLowToHigh = (a, b) => {
      return new Date(a.date) - new Date(b.date);
    };
    const sortDateHighToLow = (a, b) => {
      return new Date(b.date) - new Date(a.date);
    };
    console.log(sort);
    if (sort === 'ageLowToHigh') {
      sortedTableData = sortedTableData.sort(sortAgeLowToHigh);
      setUsersData(sortedTableData);
    }
    if (sort === 'ageHighToLow') {
      sortedTableData = sortedTableData.sort(sortAgeHighToLow);
      setUsersData(sortedTableData);
    }
    if (sort === 'nameLowToHigh') {
      sortedTableData = sortedTableData.sort(sortNameLowToHigh);
      setUsersData(sortedTableData);
    }
    if (sort === 'nameHighToLow') {
      sortedTableData = sortedTableData.sort(sortNameHighToLow);
      setUsersData(sortedTableData);
    }
    if (sort === 'dateLowToHigh') {
      sortedTableData = sortedTableData.sort(sortDateLowToHigh);
      setUsersData(sortedTableData);
    }
    if (sort === 'dateHighToLow') {
      sortedTableData = sortedTableData.sort(sortDateHighToLow);
      setUsersData(sortedTableData);
    }
  }, [sort]);

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
      <input
        placeholder="Поиск... "
        className="input-search"
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
      />

      <table className="data-table">
        <thead>
          <tr>
            <th>
              Имя{' '}
              <button className="sort-btn" onClick={() => setSort('nameLowToHigh')}>
                ↑
              </button>
              <button className="sort-btn" onClick={() => setSort('nameHighToLow')}>
                ↓
              </button>
            </th>
            <th>
              Дата{' '}
              <button className="sort-btn" onClick={() => setSort('dateLowToHigh')}>
                ↑
              </button>
              <button className="sort-btn" onClick={() => setSort('dateHighToLow')}>
                ↓
              </button>
            </th>
            <th>
              Возраст{' '}
              <button className="sort-btn" onClick={() => setSort('ageLowToHigh')}>
                ↑
              </button>
              <button className="sort-btn" onClick={() => setSort('ageHighToLow')}>
                ↓
              </button>
            </th>
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
