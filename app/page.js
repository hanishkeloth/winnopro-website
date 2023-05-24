"use client";
import AboutUs from "@/sections/About";
import ContactForm from "@/sections/ContactUs";
import Footer from "@/sections/Footer";
import Home from "@/sections/Home";
import OurServices from "@/sections/Services";
import Systematics from "@/sections/Systematics";
import Team from "@/sections/Team";
import Technologies from "@/sections/Technologies";
import Testimonials from "@/sections/Testimonials";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }) {
  const path = usePathname();
  console.log(path, "route");

  return (
    <>
      <Home />
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
