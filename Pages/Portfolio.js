import React from "react";
import Navigation from "../Components/Navigation";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Experience from "../Components/Experience.js";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

export default function Portfolio() {
    return (
        <div className="overflow-x-hidden">
            <Navigation />
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}