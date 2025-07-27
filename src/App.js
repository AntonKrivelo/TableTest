import Table from './Components/Table/Table';
import './App.css';

function App() {
  const usersData = [
    { id: 1, name: 'Алексей Иванов', date: '2025-05-15', age: 42 },
    { id: 2, name: 'Кирилл Петров', date: '2025-05-15', age: 52 },
    { id: 3, name: 'Павел Павлович', date: '2025-05-15', age: 62 },
  ];

  return (
    <div className="App">
      <Table data={usersData} />
    </div>
  );
}

export default App;
