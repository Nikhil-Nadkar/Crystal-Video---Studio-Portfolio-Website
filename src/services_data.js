import MotionGraphicIMG from "./assets/Crystal Video MotionGraphic.webp";
import threeDanimationIMG from "./assets/Crystal Video 3danimation.webp";
import VideoEditingIMG from "./assets/Crystal Video Video Editing.webp";
import J2KformatIMG from "./assets/Crystal Video Cinema J2K format.webp";
import ColorGradingIMG from "./assets/Crystal Video Color Grading.webp";
import LiveeventIMG from "./assets/Crystal Video Live event.webp";
import EquipmentRentalsIMG from "./assets/Crystal Video  Equipment Rentals.webp";
import SoundIMG from "./assets/Crystal Video Sound.webp";
import UploadingTVCsIMG from "./assets/Crystal Video Uploading TVCs & film.webp";
import CorporateShootsIMG from "./assets/Crystal Video  Corporate Shoots.webp";

const serviceData = [
  {
    id: "01",
    title: "Motion Graphics",
    description:
      "Bring stories to life with captivating motion graphics, 2D animations, and rotoscoping.",
    image: `${MotionGraphicIMG}`,
    icon: "/creator-studio-svgrepo-com.svg",
  },

  {
    id: "02",
    title: "3D Animation",
    description:
      "Bring stories to life with stunning 3D animations, visual effects, and immersive virtual experiences.",
    image: `${threeDanimationIMG}`,
    icon: "/creator-studio-svgrepo-com.svg",
  },

  {
    id: "03",
    title: "Video Editing",
    description:
      "Seamless editing workflows for any project scale with expert color correction and grading.",
    image: `${VideoEditingIMG}`,
    icon: "/creator-studio-svgrepo-com.svg",
  },

  {
    id: "04",
    title: "Cinema J2K format",
    description:
      "J2K file conversion and assistance with censor certification for seamless theater screenings.",
    image: `${J2KformatIMG}`,
    icon: "/creator-studio-svgrepo-com.svg",
  },

  {
    id: "05",
    title: "Color Grading",
    description:
      "Enhance the visual appeal of your videos with professional color correction and grading to achieve cinematic quality.",
    image: `${ColorGradingIMG}`,
    icon: "/creator-studio-svgrepo-com.svg",
  },

  {
    id: "06",
    title: "Live event",
    description:
      "Multicamera shoots with video Switcher & lives on YouTube, Team & Zoom.",
    image: `${LiveeventIMG}`,
    icon: "/creator-studio-svgrepo-com.svg",
  },

  {
    id: "07",
    title: "Equipment Rentals",
    description:
      "High-quality cameras, LED lighting, projectors, and sound equipment to elevate your production.",
    image: `${EquipmentRentalsIMG}`,
    icon: "/creator-studio-svgrepo-com.svg",
  },

  {
    id: "08",
    title: "Sound",
    description:
      "Professional audio solutions, including mixers, JBL speakers, wireless mics, DJ, and karaoke systems.",
    image: `${SoundIMG}`,
    icon: "/creator-studio-svgrepo-com.svg",
  },

  {
    id: "09",
    title: "Uploading TVCs & film",
    description:
      "Uploading TVCs and films via eBus and Dropbox for hassle-free distribution.",
    image: `${UploadingTVCsIMG}`,
    icon: "/creator-studio-svgrepo-com.svg",
  },

  {
    id: "10",
    title: "Corporate Shoots",
    description:
      "Specialized services for corporate films, interviews, and product showcase videos.",
    image: `${CorporateShootsIMG}`,
    icon: "/creator-studio-svgrepo-com.svg",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.getElementById("servicecard_container");

  let offset = 500;
  serviceData.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.id = "product";

    productDiv.innerHTML = `
        <div class="aspect-square rounded-2xl relative ourservice" loading="lazy" style="background-image: url('${product.image}'); background-size: cover; background-position: center;">
          <div class="h-full bg-gradient-to-t from-black to-transparent ease-in-out duration-500 rounded-2xl" >
            <div class="p-5 md:p-6 xl:p-7 absolute text-white flex flex-col justify-between h-full hover:text-cyan-500 ease-in-out duration-500">
             <div class="w-10 h-10 md:w-11 md:h-11 xl:w-12 xl:h-12 p-2 rounded-full gradient">
                <img src='${product.icon}'></img>
              </div> 
              <div>
                <h3 class="font-bold mb-2">${product.title}</h3>
                <p class = "text-[14px]">${product.description}</p>
              </div>
            </div>
          </div>
        </div>
      `;
    productsContainer.appendChild(productDiv);
  });
});
