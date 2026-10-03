import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Conditions from "@/components/Conditions";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import ForRelatives from "@/components/ForRelatives";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function  Home(){
  return (
    <>
      <Header />
      <main>
        <Hero/>
        <Benefits/>
        <Services/>
        <Conditions/>
        <Process/>
        <ForRelatives/>
        <ContactCTA/>
        <Testimonials/>
        <Footer/>
      </main>
    </>
  )
}