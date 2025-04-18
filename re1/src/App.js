import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <div className="App-left">
          <LeftColumn />
        </div>
        <div className="App-right">
          <RightColumn />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;