import Benefits from "@/components/Benefits";
import Conditions from "@/components/Conditions";
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
        <Testimonials/>
      </main>
    </>
  )
}