import React, { Children, useState } from "react";

const Carousel = ({ cards, Children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 4 < cards?.length ? prevIndex + 4 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 4 >= 0 ? prevIndex - 4 : prevIndex
    );
  };

  const renderCards = () => {
    return cards?.slice(currentIndex, currentIndex + 4).map((card) => (
      <div key={card.id} className="">
        {Children}
      </div>
    ));
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className="p-2"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        Previous
      </button>
      <div className="flex space-x-4">{renderCards()}</div>
      <button
        className="p-2"
        onClick={handleNext}
        disabled={currentIndex + 4 >= cards?.length}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
