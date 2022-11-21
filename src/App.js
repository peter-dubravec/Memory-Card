import "./App.css";
import Card from "./components/Cards.js";
import RenderCards from "./components/RenderCards";
import { useState, useEffect } from "react";
import uniqid from "uniqid";
import ScoreBoard from "./components/ScoreBoard";
import HighestScore from "./components/HighestScore";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
} from "./images/index";

const _ = require("lodash");

function App() {
  const [cardsArray, setCardsArray] = useState([
    { component: Card, clicked: false, id: uniqid(), num: 1, img: image1 },
    { component: Card, clicked: false, id: uniqid(), num: 2, img: image2 },
    { component: Card, clicked: false, id: uniqid(), num: 3, img: image3 },
    { component: Card, clicked: false, id: uniqid(), num: 4, img: image4 },
    { component: Card, clicked: false, id: uniqid(), num: 5, img: image5 },
    { component: Card, clicked: false, id: uniqid(), num: 6, img: image6 },
    { component: Card, clicked: false, id: uniqid(), num: 7, img: image7 },
    { component: Card, clicked: false, id: uniqid(), num: 8, img: image8 },
  ]);

  const [scoreBoard, setScoreBoard] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  useEffect(() => {
    scoreBoard >= highestScore && setHighestScore(scoreBoard);
    let deepCopy = _.cloneDeep(cardsArray);
    shuffleArray(deepCopy);
    setCardsArray(deepCopy);
  }, [scoreBoard]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  const cardClicked = (id) => {
    const deepCopy = _.cloneDeep(cardsArray);
    let findCard = deepCopy.find((card) => card.id === id);

    if (findCard.clicked === false) {
      findCard.clicked = !findCard.clicked;
      setScoreBoard((curr) => curr + 1);

      setCardsArray(
        cardsArray.map((comp) => (comp.id === id ? findCard : comp))
      );
    } else {
      setScoreBoard(0);
      deepCopy.map((comp) => (comp.clicked = false));
      setCardsArray(deepCopy);
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div className="score">
          <ScoreBoard scoreBoard={scoreBoard} />
          <HighestScore highestScore={highestScore} />
        </div>
        <div className="cards">
          <RenderCards cards={cardsArray} cardClicked={cardClicked} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
