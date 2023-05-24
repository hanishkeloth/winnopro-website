import { useEffect } from "react";
import { useState } from "react";
import "./styles/Slide.css";

function Slide({ children, data, currentValue }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;
  console.log(data);
  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 4500);
  });
  useEffect(() => {
    currentValue(current);
  }, [current]);

  const slideRight = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1);
  };
  console.log(current);

  // const [touchStart, setTouchStart] = useState(null);
  // const [touchEnd, setTouchEnd] = useState(null);

  // // the required distance between touchStart and touchEnd to be detected as a swipe
  // const minSwipeDistance = 50;

  // const onTouchStart = (e) => {
  //   setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
  //   setTouchStart(e.targetTouches[0].clientX);
  // };

  // const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  // const onTouchEnd = () => {
  //   if (!touchStart || !touchEnd) return;
  //   const distance = touchStart - touchEnd;
  //   const isLeftSwipe = distance > minSwipeDistance;
  //   const isRightSwipe = distance < -minSwipeDistance;
  //   if (isRightSwipe) {
  //     setCurrent(current === countries.length - 1 ? 0 : current + 1);
  //   }

  //   if (isLeftSwipe) {
  //     setCurrent(current === 0 ? countries.length - 1 : current - 1);
  //   }
  // };

  return (
    <div className="carousel">
      <div className="carousel_wrapper">
        {children}
        <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel_pagination">
          {data.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index == current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Slide;
