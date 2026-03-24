import { Link } from "react-router";
import { services } from "../components/Sidebar/Data";
import InfiniteTemplatesScroll from "../components/Templates/InfiniteTemplatesScroll";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaEnvelope, FaComments, FaPhone } from "react-icons/fa";
import { FaInternetExplorer } from "react-icons/fa6";
import profile2 from "../assets/profile2.jpg";

const Home = () => {
  const skills = [
    "Integration & Cloud Fundamentals",
    "Git & GitHub",
    "Web Fundamentals",
    "ReactJs",
    "JSX and React Components",
    "React Props",
    "React State",
    "React Hooks",
    "React Router",
    "Tailwind CSS",
    "Responsive Design",
    "UI/UX Principles",
    "ExpressJs",
    "NodeJs",
    "RestAPI",
  ];

  const icons = [
    { icon: <FaEnvelope />, title: "Email", info: "medoueslp@gmail.com" },
    { icon: <FaComments />, title: "Get Support", info: "Let's Chat with us" },
    { icon: <FaInternetExplorer />, title: "Website", info: "www.wavency.tn" },
    { icon: <FaPhone />, title: "Schedule a Meeting", info: "+216 58 870 446" },
  ];

  return (
    <>
      {/* ========== Intro Section ========== */}
      <section className="pt-40 px-6 md:px-16 space-y-6">
        
        {/* Availability Badge */}
        <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-full px-4 py-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Available for New Projects
        </span>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-gray-900">
          Hey, I'm <span className="text-primary">Mohamed Oueslati</span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700">
          Web Developer
        </h2>

        {/* Intro Paragraph */}
        <p className="text-gray-600 leading-relaxed">
          I'm Mohamed, a UI/UX and Web Developer driven by user-centered
          solutions that connect and inspire. With years of experience, I craft
          digital products that balance creativity, usability, and performance.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/about"
            className="flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition w-full sm:w-auto"
          >
            About Me
            <FaArrowUpRightFromSquare className="ml-2 text-lg" />
          </Link>

          <Link
            to="/projects"
            className="flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition w-full sm:w-auto"
          >
            Explore Works
            <FaArrowUpRightFromSquare className="ml-2 text-lg" />
          </Link>
        </div>

        <InfiniteTemplatesScroll />
      </section>

      {/* ========== Skills Section ========== */}
      <section className="pt-40 px-6 md:px-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Technical Skills
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Technologies and tools I use to build exceptional web experiences.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-primary hover:shadow-sm transition-all"
            >
              <span className="text-gray-700 font-medium text-sm">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ========== Services Section ========== */}
      <section className="pt-40 px-6 md:px-16 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Services I Provide
        </h2>

        <p className="text-gray-600 leading-relaxed max-w-2xl">
          Pushing the limits of innovation with services that redefine
          possibilities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full text-primary text-3xl">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold mt-6 text-gray-900">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-2 leading-relaxed">
                {service.description}
              </p>

              <span className="absolute inset-x-0 bottom-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </div>
          ))}
        </div>
      </section>

      {/* ========== Contact Section ========== */}
      <section className="py-40 px-6 md:px-16 space-y-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">

          {/* Left Content */}
          <div className="md:w-1/2 space-y-6">
            <p className="text-gray-600 leading-relaxed">
              Have a project idea in mind?
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Let's Discuss about the Project Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10">
              {icons.map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-primary text-2xl">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mt-2">{item.info}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 flex justify-end">
            <img
              src={profile2}
              alt="Person thinking"
              className="w-120 h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
