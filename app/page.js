"use client";
import AboutUs from "@/sections/About";
import ContactForm from "@/sections/ContactUs";
import Footer from "@/sections/Footer";
import Landing from "@/sections/Landing";
import OurServices from "@/sections/Services";
import Systematics from "@/sections/Systematics";
import Team from "@/sections/Team";
import Technologies from "@/sections/Technologies";
import Testimonials from "@/sections/Testimonials";
import Image from "next/image";

export default function Home({ Component, pageProps }) {
  return (
    <div>
      <Landing />
      <AboutUs />
      <OurServices />
      <Systematics />
      <Technologies />
      <Team />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
