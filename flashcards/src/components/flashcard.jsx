import React from 'react'

const Flashcard = ({isFlipped, flipCard, cardData}) => {
  return (
    /* when isFlipped is turned on, the flip class is added */
    <div className={`flashcard_container ${cardData.category} ${isFlipped ? 'flip' : ''}`}
    onClick={flipCard}>
        <div className="flashcard_front">
            {cardData.question}
            <img className="card_image" src={cardData.image} />
        </div> 
        <div className="flashcard_back">
            {cardData.answer}
        </div>
    </div>
  )
}

export default Flashcard;

