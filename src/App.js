import 'bulma/css/bulma.min.css';
import './App.css';
import Headers from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

import { useState } from 'react';

function App() {

  // const currentPage = "Portfolio"
  const [currentPage, setCurrentPage] = useState("About")

  function render () {
    if(currentPage === "About") {
      return <About/>
    }

    if(currentPage === "Portfolio") {
      return <Portfolio/>
    }
    if(currentPage === "Contact") {
      return <Contact/>
    }

    if(currentPage === "Resume") {
      return <Resume/>
    }
  }


  return (
    <div>
      <Headers
        setCurrentPage={setCurrentPage}
      ></Headers>
      <main>
        {render()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
