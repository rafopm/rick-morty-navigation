import { useState } from "react"; // paso 1
import Styles from "./App.module.css";
import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar.jsx";
import About from "./components/About.jsx";
import Form from "./components/Form.jsx";
import Detail from "./components/Detail.jsx";
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


function App() {
  const [characters, setCharacters] = useState([]);
  
  function onSearch(id) {
    console.log(id);
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let exist = characters.find((e) => e.id === data.id);
          if (exist) {
            alert("Ese personaje ya existe.");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("No hay personajes con ese ID")
        }
      });
  }

  function onClose(id) {
    setCharacters((data) => {
      return data.filter((e) => e.id !== id)
    })
  }

  return (
    console.log("chars", characters),
    (
      <div className={Styles.app}>
        <div className={Styles.container}>
          <div className={Styles.top}></div>
          <div>
            <NavBar onSearch={onSearch} />
          </div>
          <Routes>
            <Route path="/" element={<Form />}></Route>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/detail/:detailId" element={<Detail />}></Route>
          </Routes>
        </div>
      </div>
    )
  );
}

export default App;

// - **"/home"**: esta será la ruta del Home (vista principal/general).
// - **"/detail/:detailId"**: en esta ruta encontraremos información más detallada sobre el personaje en particular.
// - **"/about"**: en esta ruta colocarás tu nombre y describirás de qué trata la aplicación Rick & Morty.