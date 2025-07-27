import Table from './Components/Table/Table';
import './App.css';

function App() {
  const usersData = [
    { id: 2, name: 'John Smit', date: '2025-04-25', age: 52 },
    { id: 1, name: 'Adam Sedler', date: '2025-05-15', age: 42 },
    { id: 3, name: 'Petr Yan', date: '2025-03-28', age: 62 },
  ];

  return (
    <div className="App">
      <Table data={usersData} />
    </div>
  );
}

export default App;
