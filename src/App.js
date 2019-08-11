import React from 'react';
import './App.css';
import Header from './components/header'
import UsersList from './containers/UsersList';
import Messages from './containers/MessagesList';
import SendMessage from './containers/SendMessage';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <UsersList />
        <Messages />
        <SendMessage />
      </main>
    </div>
  );
}

export default App;
