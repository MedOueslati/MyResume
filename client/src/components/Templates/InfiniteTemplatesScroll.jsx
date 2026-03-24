import wavency from "../../assets/wavency.png";
import template from "../../assets/simpletemplate.jpg";
import template2 from "../../assets/template2.jpg";
import template3 from "../../assets/template3.jpg";
import template4 from "../../assets/template4.jpg";
import template5 from "../../assets/template5.jpg";

const InfiniteTemplatesScroll = () => {
  const modeles = [
    { id: 1, image: wavency, title: "Wavency" },
    { id: 2, image: template, title: "Simple Template" },
    { id: 3, image: template2, title: "Modern Design" },
    { id: 4, image: template3, title: "Creative Layout" },
    { id: 5, image: template4, title: "Professional" },
    { id: 6, image: template5, title: "Minimal Style" },
  ];

  const tripledModeles = [...modeles, ...modeles, ...modeles];

  return (
    <div className="relative w-full overflow-hidden rounded-x pt-40">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-left mb-12">
    My Recent Works
  </h2>
      <div className="flex items-center justify-center">
        <div className="flex animate-smooth-infinite-scroll gap-6 items-center">
          {tripledModeles.map((modele, i) => (
            <div key={i} className="shrink-0 w-100 flex flex-col">
              <img
                src={modele.image}
                alt={modele.title}
                className="w-full h-full rounded-lg hover:scale-105 transition-transform duration-300"
              />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {modele.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteTemplatesScroll;