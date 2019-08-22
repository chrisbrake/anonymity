import React from 'react';
import logo from './logo.svg';
import './App.css';

import {MessageList} from "./MessageList";
import {MessageInput} from "./MessageInput";

function App() {
  return (
    <div className="App">
      <MessageList />
      <MessageInput />
    </div>
  );
}

export default App;
