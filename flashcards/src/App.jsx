import './App.css';
import { useState } from 'react';
import Flashcard from './components/flashcard';

const App = () => {

  const [questionNum, setQuestionNum] = useState(0);

  const [isFlipped, setFlipFlashcard] = useState(false);
  const flipCard = () => {
    setFlipFlashcard(!isFlipped);
  }
  const getNextQuestion = () => {
    setQuestionNum(Math.floor(Math.random() * cardData.length));
    setFlipFlashcard(false);
  }
  

  return (
    <div className="App">
      <div className='header'>
        <h2>Test your Tagalog</h2>
        <h3>Test your knowledge by guessing some common Tagalog words and phrases</h3>
        <h5>Number of cards: {cardData.length}</h5>
        <Flashcard isFlipped = {isFlipped} flipCard={flipCard} cardData={cardData[questionNum]}/>
        <button className='button' onClick={getNextQuestion}>→</button>
      </div>
    </div>
  )

}

const cardData = [
  {
    id: 1,
    question: "Tuloy kayo",
    answer: "You may come in (polite)",
    category: "commonPhrases",
    image: ""
  },
  {
    id: 2,
    question: "Sino sila",
    answer: "who is it?",
    category: "commonPhrases",
    image: ""
  },
  {
    id: 3,
    question: "saing",
    answer: "steamed rice",
    category: "food",
    image: "./src/assets/steamed_rice.jpeg"
  },
  {
    id: 4,
    question: "bawang",
    answer: "garlic",
    category: "food",
    image: "./src/assets/garlic.jpeg"
  },
  {
    id: 5,
    question: "Tutuloy na ako",
    answer: "I have to go",
    category: "commonPhrases",
    image: ""
  },
  {
    id: 6,
    question: "gumamit",
    answer: "use",
    category: "verb",
    image: ""
  },
  {
    id: 7,
    question: "tumawa",
    answer: "laugh",
    category: "verb",
    image: ""
  },
  {
    id: 8,
    question: "pumanta",
    answer: "go",
    category: "verb",
    image: ""
  },
  {
    id: 9,
    question: "kamusta",
    answer: "Hello (formal)",
    category: "commonPhrases",
    image: ""
  },
  {
    id: 10,
    question: "salamat po",
    answer: "thank you (formal)",
    category: "commonPhrases",
    image: ""
  },
  {
    id: 11,
    question: "magandang umaga",
    answer: "good morning",
    category: "commonPhrases",
    image: ""
  },
  {
    id: 12,
    question: "saging",
    answer: "banana",
    category: "food",
    image: "./src/assets/banana.jpg"
  },
  {
    id: 13,
    question: "sampalok",
    answer: "tamarind",
    category: "food",
    image: "./src/assets/tamarind.jpg"
  },
]

export default App