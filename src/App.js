import React from 'react';
import NavigationBar from './components/navbar/navbar';
import TresTarjetas from "./components/tarjetas/TresTarjetas";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <TresTarjetas />
      <h1>texto aqui</h1>
    </div>
  );
}

export default App;
