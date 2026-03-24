import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router";
import Hosting from "../assets/hosting.jpg";
import Dev from "../assets/developpement.jpg";

const Services = () => {
  return (
    <>
      {/* INTRO SECTION */}
      <section className="pt-40 px-6 md:px-16 space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900">
          Creating Digital Experiences
        </h1>

        <p className="text-gray-600 leading-relaxed text-lg">
          With expertise in UI/UX and full-stack development, I create tailored
          solutions that match your business needs. Let's build digital products
          that are fast, beautiful, and effective.
        </p>

        <p className="text-gray-600 leading-relaxed text-lg">
          I offer complete services to help bring your digital projects to life:
        </p>

        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
          <li>
            <span className="font-semibold text-gray-900">Web Hosting: </span>
            Secure, reliable, and optimized hosting for performance and uptime.
          </li>
          <li>
            <span className="font-semibold text-gray-900">React Development: </span>
            High-quality reusable components built with best industry practices.
          </li>
          <li>
            <span className="font-semibold text-gray-900">Custom Design: </span>
            Clean UI/UX crafted to boost user engagement and brand identity.
          </li>
        </ul>

        <p className="text-gray-600 leading-relaxed text-lg">
          Whether you're launching a new platform or improving an existing one,
          I combine creativity and engineering for exceptional results.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition"
        >
          Contact Me
          <FaArrowUpRightFromSquare className="ml-2 text-lg" />
        </Link>
      </section>

      {/* WEB HOSTING */}
      <section className="flex flex-col md:flex-row items-start gap-12 pt-40 px-6 md:px-16">
        <div className="md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Web Hosting
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Build your online presence on a secure, scalable, and optimized
            hosting environment crafted for growth.
          </p>

          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Hosting Setup & Configuration</li>
            <li>Custom Domain Integration</li>
            <li>Deployment & Optimization</li>
            <li>Security & Automated Backups</li>
            <li>Maintenance & Monitoring</li>
          </ul>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={Hosting}
            alt="Web Hosting"
            className="w-full max-w-xl h-auto rounded-xl border border-gray-300 shadow-md hover:shadow-primary/30 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => window.open(Hosting, "_blank")}
          />
        </div>
      </section>

      {/* REACT DEVELOPMENT */}
      <section className="flex flex-col md:flex-row-reverse items-start gap-12 pt-40 px-6 md:px-16">
        <div className="md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            React Development
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            I develop fast, scalable, and modern applications using React, one of
            the world’s leading front-end libraries.
          </p>

          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Project Discovery & Architecture</li>
            <li>UI/UX Integration</li>
            <li>REST API Integration</li>
            <li>Reusable Component Development</li>
            <li>Backend Integration</li>
            <li>Testing & Quality Assurance</li>
            <li>Deployment & Long-Term Maintenance</li>
          </ul>
        </div>

        <div className="md:w-1/2 flex justify-start">
          <img
            src={Dev}
            alt="React Development"
            className="w-full max-w-xl h-auto rounded-xl border border-gray-300 shadow-md hover:shadow-primary/30 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => window.open(Dev, "_blank")}
          />
        </div>
      </section>

      {/* CUSTOM DESIGN */}
      <section className="flex flex-col md:flex-row items-start gap-12 py-40 px-6 md:px-16">
        <div className="md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Custom Design
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Tailored UI/UX design crafted to reflect your brand identity and
            create meaningful user experiences.
          </p>

          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Unique Brand Identity</li>
            <li>Intuitive User Experience</li>
            <li>Fully Responsive & Mobile-First</li>
          </ul>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="profile4"
            alt="Custom Design"
            className="w-full max-w-md h-auto rounded-xl border border-gray-300 shadow-md"
          />
        </div>
      </section>
    </>
  );
};

export default Services;
