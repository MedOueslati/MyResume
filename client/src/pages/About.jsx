import Photo1 from "../assets/Photo1.jpg";
import Photo2 from "../assets/Photo2.jpg";

const About = () => {
  const stats = [
    {
      value: "+10",
      title: "Projects Completed",
      desc: "Helping various clients transform their ideas into real digital products.",
    },
    {
      value: "+2",
      title: "Years of Experience",
      desc: "Practical experience in full-stack development and IT support.",
    },
    {
      value: "99%",
      title: "Client Satisfaction",
      desc: "Delivering projects that meet expectations with high quality and precision.",
    },
  ];

  return (
    <>
      {/* ================= HERO / ABOUT ME ================= */}
      <section className="pt-40 px-6 md:px-16 space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold text-gray-900">
          Hi, I'm <span className="text-primary">Mohamed Oueslati</span>
        </h1>

        <p className="text-gray-600 leading-relaxed">
          I am passionate about IT development and support, with a strong
          academic background and practical experience. I have a solid
          understanding of programming languages and technical support
          tools, and I enjoy solving technological challenges in a creative
          and efficient way. My goal is to keep improving my skills through
          innovative projects while providing high-quality IT support.
        </p>

        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="relative group rounded-2xl p-6 md:p-8 shadow-sm bg-white/70"
        >
          <div className="text-4xl md:text-5xl font-bold text-primary">
            {stat.value}
          </div>
          <h3 className="mt-4 md:mt-6 text-lg md:text-xl font-semibold text-gray-900">
            {stat.title}
          </h3>
          <p className="mt-3 text-gray-600">{stat.desc}</p>
          <span className="absolute inset-x-0 bottom-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      <img
        src={Photo2}
        className=" rounded-2xl border border-gray-300 hover:border-primary shadow-md hover:shadow-primary/30 transition object-cover aspect-4/3 md:aspect-5/3"
        loading="lazy"
      />
      <img
        src={Photo1}
        className=" rounded-2xl border border-gray-300 hover:border-primary shadow-md hover:shadow-primary/30 transition object-cover aspect-4/3 md:aspect-5/3"
        loading="lazy"
      />
    </div>
      </section>

      {/* ================= MOVIE APP PROJECT ================= */}
      <section className="pt-40 px-6 md:px-16 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Personal Development
        </h1>

        <p className="text-gray-600 underline">
          Simple Application — "Web TV Movies"
        </p>

        <p className="text-gray-600">
          A movie management web application built with React, allowing users
          to search, filter, and add movies to a custom list using a clean and
          dynamic interface.
        </p>

        <h3 className="text-xl font-semibold text-gray-900">Main Features:</h3>

        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>Movie Search:</strong> Search movies by title through a dedicated bar.
          </li>
          <li>
            <strong>Rating Filter:</strong> Filter movies based on their star rating.
          </li>
          <li>
            <strong>Add New Movies:</strong> Add movies with title, year, genre, rating, and poster.
          </li>
          <li>
            <strong>Movie Display:</strong> Responsive cards showing poster, title, year, and rating.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900">Technologies Used:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>React — Component-based interface</li>
          <li>Bootstrap — UI styling</li>
          <li>React Star Rating Component — Rating system</li>
        </ul>
      </section>

      {/* ================= E-COMMERCE PROJECT ================= */}
      <section className="pt-40 px-6 md:px-16 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
       Final Year Project
        </h1>

        <p className="text-gray-600 underline">
         E-commerce Website
        </p>
        <p className="text-gray-600">
          A full e-commerce platform featuring product management,
          user authentication, and a complete CRUD system for both users
          and products, backed by a secure and scalable architecture.
        </p>

        <h3 className="text-xl font-semibold text-gray-900">Main Features:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Product Management:</strong> Admin dashboard to create, update, delete, and view products.</li>
          <li><strong>User Management:</strong> Register, login, profile management, admin control.</li>
          <li><strong>Authentication:</strong> JWT-based login & secure sessions using Bcrypt.</li>
          <li><strong>Modern UI:</strong> Product browsing, filtering, searching, and cart features.</li>
          <li><strong>Backend:</strong> CRUD operations, database management, security, REST APIs.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900">Technologies Used:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>React — Front-end</li>
          <li>Node.js & Express.js — Backend</li>
          <li>MongoDB — Database</li>
          <li>JWT / Bcrypt — Authentication & Security</li>
          <li>Axios & Fetch API — Data fetching</li>
        </ul>
      </section>

   



      {/* ================= SKILLS ================= */}
      <section className="pt-40  px-6 md:px-16 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Technical Skills</h1>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Front-End:</strong> HTML, CSS, JavaScript, React, Tailwind</li>
          <li><strong>Back-End:</strong> Node.js, Express.js</li>
          <li><strong>Database:</strong> MongoDB</li>
          <li><strong>APIs:</strong> RESTful APIs, Axios, Fetch API</li>
          <li><strong>Security:</strong> JWT, Bcrypt</li>
          <li><strong>Tools:</strong> Git, GitHub, Postman, VS Code</li>
        </ul>
      </section>
      <section className="py-40 px-6 md:px-16 space-y-8">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
    Formation et Certifications
  </h2>

  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
    {/* Education 1 */}
    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Ecole des Cadres de Sousse
      </h3>
      <p className="text-gray-600 mb-1">
        BTP Information Technology Technician
      </p>
      <p className="text-gray-500 text-sm">2019 - 2022</p>
    </div>

    {/* Education 2 */}
    <div className="p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Gomycode
      </h3>
      <p className="text-gray-600 mb-1">
        Full-Stack JavaScript Bootcamp
      </p>
      <p className="text-gray-500 text-sm">2023 - 2024</p>
    </div>
  </div>
</section>
    </>
  );
};

export default About;
