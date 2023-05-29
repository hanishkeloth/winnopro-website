import AboutUs from "@/sections/About";
import ContactForm from "@/sections/ContactUs";
import Footer from "@/sections/Footer";
import HomeSection from "@/sections/Home";
import OurServices from "@/sections/Services";
import Systematics from "@/sections/Systematics";
import Team from "@/sections/Team";
import Technologies from "@/sections/Technologies";
import Testimonials from "@/sections/Testimonials";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function App() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to("#home", {
      opacity: 0.3,
      //  scale: 1,
      duration: 5,
      scrollTrigger: {
        trigger: "#about",
        //  markers: true,
        pin: "#home",
        start: "top 100%",
        end: "top 0%",
        scrub: 1,
      },
    });
    gsap.to("#homeText", {
      // opacity: 0.1,
      scale: -1,
      // duration: 5,
      //   y: -300,
      scrollTrigger: {
        scrub: 1,
      },
    });
    gsap.to("#homeImg", {
      scale: 2,
      scrollTrigger: {
        scrub: 1,
      },
    });
  }, []);

  useEffect(() => {
    gsap.to("#about", {
      scrollTrigger: {
        trigger: "#home",
        //   markers: true,
        pin: true,
        start: "top 20%",
        end: "top 20%",
        scrub: 1,
        pinSpacing: true,
      },
    });
  }, []);

  useEffect(() => {
    gsap.to("#aboutD", {
      y: -100,
      duration: 1,
      scrollTrigger: {
        start: "top 80%",
        end: "top 60%",
        trigger: "#aboutD",
        toggleActions: "restart none none    ",
        //    markers: true,
        scrub: 3,
      },
    });
    gsap.to("#aboutA", {
      y: -150,
      duration: 1,
      scrollTrigger: {
        start: "top 1%",
        end: "top 60%",
        trigger: "#aboutA",
        toggleActions: "restart none none    ",
        //  markers: true,
        scrub: 3,
      },
    });
    gsap.set("#aboutC", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      overwrite: "auto",
    });
    ScrollTrigger.create({
      trigger: "#aboutC",
      start: "top 80%",
      end: "bottom 60%",
      //   markers: true,
      onEnter: () =>
        gsap.to("#aboutC", {
          y: -100,
          opacity: 1,
          stagger: 0.1,
          duration: 2,
        }),
      onLeave: () =>
        gsap.to("#aboutC", {
          y: -100,
          opacity: 0,
          stagger: 0.1,
          duration: 2,
        }),
      onEnterBack: () =>
        gsap.to("#aboutC", {
          y: -100,
          opacity: 1,
          stagger: 0.1,
          duration: 2,
        }),
      onLeaveBack: () =>
        gsap.to("#aboutC", {
          y: 100,
          opacity: 0,
          stagger: 0.1,
          duration: 2,
        }),
    });
    // gsap.to("#aboutC", {
    //   y: -100,
    //   duration: 1.5,
    //   scrollTrigger: {
    //     start: "top 90%",
    //     end: "top 60%",
    //     trigger: "#aboutC",
    //     toggleActions: "restart none none    ",
    //     //  markers: true,
    //     scrub: 3,
    //   },
    // });
  }, []);
  useEffect(() => {
    gsap.to("#services", {
      y: -280,
      duration: 1,
      scrollTrigger: {
        trigger: "#services",
        start: "top 90%",
        end: "top 48%",
        scrub: 1,
      },
    });
  }, []);
  useEffect(() => {
    gsap.to("#systematics", {
      y: -300,
      duration: 1,
      scrollTrigger: {
        trigger: "#systematics",
        //markers: true,
        start: "top 95%",
        end: "top 48%",
        scrub: 1,
      },
    });
    ScrollTrigger.create({
      trigger: "#systematicsContent",
      start: "top 80%",
      end: "bottom 40%",
      //  markers: true,

      onEnter: () =>
        gsap.to("#systematicsContent", {
          opacity: 1,
          stagger: 0.1,
          duration: 2.5,
        }),
      onLeave: () =>
        gsap.to("#systematicsContent", {
          opacity: 0,
          stagger: 0.1,
          duration: 2,
        }),
      onEnterBack: () =>
        gsap.to("#systematicsContent", {
          opacity: 1,
          stagger: 0.1,
          duration: 2,
        }),
      onLeaveBack: () =>
        gsap.to("#systematicsContent", {
          opacity: 0,
          stagger: 0.1,
          duration: 2,
        }),
    });
  }, []);

  useEffect(() => {
    gsap.to("#technologies", {
      y: -300,
      duration: 1,
      scrollTrigger: {
        trigger: "#technologies",
        // markers: true,
        start: "top 95%",
        end: "top 48%",
        scrub: 1,
      },
    });
    gsap.to("#team", {
      y: -300,
      duration: 1,
      scrollTrigger: {
        trigger: "#team",
        // markers: true,
        start: "top 95%",
        end: "top 48%",
        scrub: 1,
      },
    });
    gsap.to("#testimonials", {
      y: -300,
      duration: 1,
      scrollTrigger: {
        trigger: "#testimonials",
        //  markers: true,
        start: "top 98%",
        end: "top 48%",
        scrub: 1,
      },
    });
    gsap.to("#contact", {
      y: -300,
      duration: 1,
      scrollTrigger: {
        trigger: "#contact",
        //  markers: true,
        start: "top 98%",
        end: "top 48%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <>
      <HomeSection />
      <AboutUs />
      <OurServices />
      <Systematics />
      <Technologies />
      <Team />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
