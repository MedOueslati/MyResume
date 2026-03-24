import React from 'react';
import { Link } from 'react-router';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import wavency from "../assets/wavency.png";
import template from "../assets/simpletemplate.jpg";
import template2 from "../assets/template2.jpg";
import template3 from "../assets/template3.jpg";
import template4 from "../assets/template4.jpg";
import template5 from "../assets/template5.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Wavency",
      description: "Agency Website built with React + Tailwind.",
      image: wavency,
      link: "/wavency"
    },
    {
      id: 2,
      title: "Creative Developer - Portfolio",
      description: "Responsive Portfolio Interface — Includes Dark Mode.",
      image: template,
      link: "/portfolio"
    },
    {
      id: 3,
      title: "Front-end Developer - Portfolio",
      description: "A Simple Portfolio - Motion Included.",
      image: template2,
      link: "/portfolio"
    },
    {
      id: 4,
      title: "Ecommerce Website Design",
      description: "A modern e-commerce website design with user-friendly features.",
      image: template3,
      link: "/ecommerce"
    },
    {
      id: 5,
      title: "Modern Ecommerce Design",
      description: "A modern e-commerce website design with user-friendly features.",
      image: template4,
      link: "/ecommerce"
    },
    {
      id: 6,
      title: "Education Website",
      description: "A simple education website design focusing on user engagement.",
      image: template5,
      link: "/education"
    },
  ];

  return (
    <section className="py-40 px-6 md:px-16 space-y-8">
      
      {/* Page Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
        Showcase of My Work
      </h2>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition p-5 bg-white group"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-xl mb-4 group-hover:scale-[1.02] transition-transform duration-300"
            />

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {project.title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm mb-4">
              {project.description}
            </p>

            <Link
              to={project.link}
              className="text-primary font-medium flex items-center hover:underline"
            >
              View Project
              <FaArrowUpRightFromSquare className="ml-2 text-base" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
