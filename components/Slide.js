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

// {/* <div className="relative">
// {/* <!--Carousel indicators--> */}
// <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
//   {" "}
//   <button className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"></button>
//   <button className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"></button>
// </div>
// {data.map(({ image, qoute }) => {
//   return (
//     <section
//       //className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
//       style={{
//         position: "relative",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         backgroundImage: "url(" + image + ")",
//       }}
//     >
//       <div className="absolute "></div>

//       <div className="relative  mx-auto max-w-screen-xl px-4 py-32 sm:px-6 flex justify-start align-end lg:h-screen lg:items-center lg:px-8">
//         <div className="lg:max-w-xl max-w-xs">
//           <h1 className=" text-3xl sm:text-6xl sm:leading-tight max-w-sm text-white font-extrabold whitespace-break-spaces ">
//             {qoute}
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// })}
// </div> */}
