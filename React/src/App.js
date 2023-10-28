// import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from './redux/slices/counterSlide';

import { useEffect } from 'react';
import { fetchAllUsers } from './redux/slices/userSlide';

function App() {
  const dispatch = useDispatch();
  // const count = useSelector((state) => state.counter.value);
  const users = useSelector((state) => state.user.listUsers);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    dispatch(fetchAllUsers());
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
              {error === true && (
                <tr>
                  <td>Có lỗi xảy ra</td>
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
