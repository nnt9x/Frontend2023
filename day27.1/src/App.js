import { useEffect, useState } from 'react';
import './App.css';
import { ListUser } from './components/ListUser';


function App() {
  const [users, setUsers] = useState([]); // Add this line

  // Lần đầu tiên vào app, chỉ chạy 1 lần => lấy dữ liệu từ Server về
  useEffect(() => {
      fetch("https://dummyjson.com/users?limit=100")
      .then(res => res.json())
      .then(data => {
        setUsers(data.users);
      })

  }, []);

  return (
    <div className="App container">
        <h1 className='display-1 text-center'>Danh sách người dùng</h1>
        <p>Thêm tính năng tìm kiếm tại đây</p>
        <ListUser data={users}/>
    </div>
  );
}

export default App;
