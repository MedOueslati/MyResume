import { useState } from "react";

import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import image5 from "../assets/5.png";
import image6 from "../assets/6.png";

const BuyDesigns = () => {
  const images = [
    { id: 1, title: "Full View", image: image1 },
    { id: 2, title: "Side View", image: image2 },
    { id: 3, title: "Front View", image: image3 },
    { id: 4, title: "Motherboard", image: image4 },
    { id: 5, title: "Processor", image: image5 },
    { id: 6, title: "RAM", image: image6 },
  ];

  const specs = [
    { label: "Case", value: "KOLINK BASTION RGB WHITE" },
    { label: "CPU", value: "AMD RYZEN 5 3600X TRAY  6-Core Processor" },
    { label: "Motherboard", value: "GIGABYTE B450M-DS3H V2" },
    { label: "RAM", value: "Gigabyte Aorus RGB DDR4 8GB (1*8) 3600MHz" },
    { label: "Storage", value: "GIGABYTE NVMe SSD 256GB" },
    { label: "GPU", value: "Gigabyte Geforce RTX 3060Ti Gaming OC 8GB" },
    { label: "OS", value: "Windows 11 Pro" },
    { label: "Monitor", value: "MSI OPTIX MAG241C '24' 144HZ 1MS" },
    { label: "Fan Processor", value: "Aerocool Mirage 5 ARGB" },

  ];

  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="py-32 px-6 md:px-16">
      {/* TITLE */}
      <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold text-gray-900 mb-16">
        Giga<span className="text-[#D6610C]">Byte </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT: IMAGE SLIDER */}
        <div>
          {/* Main Image */}
          <div className="border border-primary rounded-2xl p-6 ">
            <img
              src={images[activeImage].image}
              alt={images[activeImage].title}
              className="w-full h-[400px] object-contain transition-all duration-300"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-6 overflow-x-auto">
            {images.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveImage(index)}
                className={`border rounded-xl p-2 min-w-20 ${
                  activeImage === index
                    ? "border-primary"
                    : "border-gray-300"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 w-full object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: PRODUCT INFO */}
        <div className="space-y-8">


          <div className="grid grid-cols-2 gap-4">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="border border-primary rounded-xl p-4 flex flex-col"
              >
                <span className="text-sm text-gray-500">{spec.label}</span>
                <span className="font-semibold text-gray-900">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyDesigns;
