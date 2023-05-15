import React, { useState } from "react";
import image from "../public/images/Image6.png";
// import Slide from "../../Components/Slide/Index";
import "./styles/Home.css";
import CustomHeader from "../components/CustomHeader";
const Technologies = () => {
  const [current, setCurrent] = useState(0);
  const data = [
    [
      {
        topic: "Programming languages:",
        items: ["Python", "Nodejs", "GO", "Spring Boot", "Java"],
      },
      {
        topic: "Frontend Technologies:",
        items: ["Reactjs", "Flutter", "Nextjs", "Angular"],
      },
      {
        topic: "Database:",
        items: ["MongoDB", "Firebase", "Firestore", "MySQL"],
      },
      {
        topic: "ML Tools:",
        items: ["TensorFlow", "scikit-learn,", "PyTorch", "Keras", "Pandas"],
      },
    ],
    // [
    //   {
    //     topic: "Cloud:",
    //     items: ["AWS", "Azure", "PyTorch", "Gcloud"],
    //   },
    //   {
    //     topic: "Generative AI:",
    //     items: ["(GPT 4)"],
    //   },
    //   {
    //     topic: "Conversational AI:",
    //     items: [""],
    //   },
    //   {
    //     topic: "AR, VR & MR:",
    //     items: [""],
    //   },
    // ],
  ];

  return (
    <section
      id="technologies"
      style={{
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${image.src})`,
      }}
      className="lg:h-[110vh] "
    >
      <div className="w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-24 lg:py-14 ">
        <CustomHeader
          classes=" text-white "
          sub="TECHNOLOGIES"
          main="Technologies We Work with"
        />
        {/* <Slide currentValue={(value) => setCurrent(value)} data={data}> */}
        {/* {Object.keys(data).map((key, index) => {
          return ( */}
        {/* <div
          className={
           // index == current
              ? " opacity-[1] scale-100 pointer-events-auto "
              : "flex flex-1 w-auto h-auto absolute overflow-hidden opacity-0 pointer-events-none "
          }
          key={key}
        > */}
        <div
          //  key={key}
          className="mt-8 h-max grid grid-cols-2 gap-4 md:mt-10 md:grid-cols-2 md:gap-4 lg:grid-cols-4"
        >
          {data[0].map(({ topic, items }) => {
            return (
              <div className="flex flex-col font-cambria h-full items-center p-6 gap-4 bg-wp-lGray rounded-xl ">
                <span className="shrink-0 hidden sm:block lg:block rounded-full bg-white p-4">
                  <svg
                    className="h-16 w-15"
                    fill="none"
                    stroke="orange"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>
                <h2 className="text-xl lg:text-card text-center text-wp-gray font-bold">
                  {topic}
                </h2>
                {items.map((i) => {
                  return (
                    <h2 className="text-lg lg:text-subHeader text-wp-gray max-w-[20ch] font-medium">
                      {i}
                    </h2>
                  );
                })}
              </div>
            );
          })}
        </div>
        {/* </div> */}
        {/* );
        })} */}
        {/* </Slide> */}
      </div>
    </section>
  );
};

export default Technologies;
