import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/slices/counterSlide';

import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const fetchAllUser = async () => {
    setLoading(true);
    let res = await axios('http://localhost:8080/users/all');

    setLoading(false);
    setUsers(res.data ? res.data : []);
    console.log(res.data);
  };

  useEffect(() => {
    fetchAllUser();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={logo} className='App-logo' alt='logo' />
        <h1>Hello world with React and Hoi Dan IT!</h1>
        <div className='button'>
          <button onClick={() => dispatch(increment())}>Increse</button>
          <button onClick={() => dispatch(decrement())}>Decrese</button>
        </div>

        <br />
        <div>count: {count}</div> */}
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {loading === true && (
                <tr>
                  <td>Loading...</td>
                </tr>
              )}
              {users &&
                users.length > 0 &&
                users.map((item, index) => (
                  <tr key={`user-${index}`}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
