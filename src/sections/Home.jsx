import React from "react";
import RevelOnScroll from "./RevelOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevelOnScroll>
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
          Hi, i am Dinesh
        </h1>

        <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
          Hardworking and detail-oriented Full Stack Developer with hands-on
          experience in developing web applications. Expertise in front-end
          development using HTML, CSS, JavaScript, and React.js, coupled with
          back-end proficiency in Java, including JDBC, Servlets, Hibernate,
          Spring, and Spring Boot. Proven ability to design and implement
          solutions with strong skills in database management (SQL),
          object-oriented programming, and utilizing frameworks to create
          seamless user experiences.
        </p>

        <div className="flex justify-center space-x-4">
            <a href="#projects" className="bg-blue-500 text-white py-3 px-6 font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">View projects</a>
            <a href="#projects" className="border border-blue-500/50 text-blue-500 py-3 px-6 font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]
            hover:bg-blue-500/50">Contact me</a>
        </div>

      </div>
      </RevelOnScroll>
    </section>
  );
};

export default Home;
