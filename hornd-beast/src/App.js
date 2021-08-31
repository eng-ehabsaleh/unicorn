import './App.css';
import React from 'react';
import Main from './component/Main'
import Header from './component/Header'
import Footer from './component/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
     <Header />
     <Main />
     <Footer />
    </div>  
  );
}

export default App;
