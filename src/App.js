import React from 'react';
import './App.css';
import Header from "./components/header"
import { MessagesList } from "./containers/MessagesList"
import { AddMessage } from "./containers/AddMessage"


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="App-main">
          <MessagesList />
          <AddMessage />
        </main>
      </div>
    );
  }
}


export default App;
