import { useState } from 'react';
import './styles/app.css';
import { sortedUser } from './data';
import Alert from './components/Alert';

const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchError, setSearchError] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [resultData, setResultData] = useState([]);

  const handleUserIndex = (user) => {
    return user.name === searchInput;
  };

  const handleUserPlacement = (userIndex) => {
    let sortedUserSlice = sortedUser.slice(0, 10);
    if (userIndex > 9) {
      sortedUserSlice[9] = sortedUser[userIndex];
      return sortedUserSlice;
    } else {
      return sortedUserSlice;
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();

    // NOTE: There's a user with no name,
    // if it's a known data then this condition can be remove
    if (searchInput) {
      const userIndex = sortedUser.findIndex(handleUserIndex);
      if (userIndex > 0) {
        const newSelectedUser = sortedUser[userIndex];
        newSelectedUser.rank = userIndex + 1;
        setSelectedUser(newSelectedUser);
        setResultData(handleUserPlacement(userIndex));
      } else {
        setResultData([]);
        setSearchError(true);
      }
    }
  };

  const handleSearchInput = (e) => {
    setSearchError(false);
    setSearchInput(e.target.value);
  };

  return (
    <main className='mainContainer'>
      <form className='formContainer' onSubmit={handleSearch}>
        <input
          type='text'
          name='Username'
          placeholder='Username'
          value={searchInput}
          onChange={handleSearchInput}
        />
        <input type='submit' value='Search' className='button' />
      </form>
      {resultData.length > 0 ? (
        <table id='customers' className='tableContainer'>
          <tr>
            <th>Name</th>
            <th>Rank</th>
            <th>Number of bananas</th>
            <th>isSearchedUser?</th>
          </tr>
          {resultData.map((user, index) =>
            user.uid === selectedUser.uid ? (
              <tr key={user.uid} className='is-user'>
                <td>{user.name}</td>
                <td>{user.rank}</td>
                <td>{user.bananas}</td>
                <td>yes</td>
              </tr>
            ) : (
              <tr key={user.uid}>
                <td>{user.name}</td>
                <td>{index + 1}</td>
                <td>{user.bananas}</td>
                <td>no</td>
              </tr>
            )
          )}
        </table>
      ) : (
        <div className='emptyContainer'>
          {searchError ? <Alert /> : <h3>Enter username to search</h3>}
        </div>
      )}
    </main>
  );
};

export default App;
