const serviceData = [
  {
    id: "01",
    title: "Motion Graphics",
    description:
      "Bring stories to life with captivating motion graphics, 2D animations, and rotoscoping.",
    image: "./src/assets/MotionGraphic.jpg",
    icon: "/creator-studio-svgrepo-com.svg",
  },

  {
    id: "02",
    title: "3D Animation",
    description:
      "Bring stories to life with stunning 3D animations, visual effects, and immersive virtual experiences.",
    image: "./src/assets/3danimation.png",
    icon: "/creator-studio-svgrepo-com.svg",
  },

  {
    id: "03",
    title: "Video Editing",
    description:
      "Seamless editing workflows for any project scale with expert color correction and grading.",
    image: "/Camera.jpg",
    icon: "/creator-studio-svgrepo-com.svg",
  },

  {
    id: "04",
    title: "Cinema format",
    description:
      "J2K file conversion and assistance with censor certification for seamless theater screenings.",
    image: "/j2k_img.jpg",
    icon: "/creator-studio-svgrepo-com.svg",
  },

  {
    id: "05",
    title: "Color Grading",
    description:
      "Enhance the visual appeal of your videos with professional color correction and grading to achieve cinematic quality.",
    image: "/j2k_img.jpg",
    icon: "/creator-studio-svgrepo-com.svg",
  },

  {
    id: "06",
    title: "Live event",
    description:
      "Multicamera shoots with video Switcher & lives on YouTube, Team & Zoom.",
    image: "/event_img.jpg",
    icon: "/creator-studio-svgrepo-com.svg",
  },

  {
    id: "07",
    title: "Equipment Rentals",
    description:
      "High-quality cameras, LED lighting, projectors, and sound equipment to elevate your production.",
    image: "/Camera.jpg",
    icon: "/creator-studio-svgrepo-com.svg",
  },

  {
    id: "08",
    title: "Sound",
    description:
      "Professional audio solutions, including mixers, JBL speakers, wireless mics, DJ, and karaoke systems.",
    image: "/sound_img.jpg",
    icon: "/creator-studio-svgrepo-com.svg",
  },

  {
    id: "09",
    title: "Uploading TVCs & film",
    description:
      "Uploading TVCs and films via eBus and Dropbox for hassle-free distribution.",
    image: "/services_video_editng.jpg",
    icon: "/creator-studio-svgrepo-com.svg",
  },

  {
    id: "10",
    title: "Corporate Shoots",
    description:
      "Specialized services for corporate films, interviews, and product showcase videos.",
    image: "/services_video_editng.jpg",
    icon: "/creator-studio-svgrepo-com.svg",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.getElementById("servicecard_container");

  // Iterate through each product and create HTML elements
  serviceData.forEach((product) => {
    // Create a container for each product
    const productDiv = document.createElement("div");
    // productDiv.classList.add("servicecard");
    productDiv.className = "product";

    // Add product content
    productDiv.innerHTML = `
        <div id='card' class="aspect-square rounded-2xl relative ourservice" style="background-image: url('${product.image}'); background-size: cover; background-position: center;">
          <div class="h-full bg-gradient-to-t from-black to-transparent ease-in-out duration-500 rounded-2xl">
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

    // Append to the container
    productsContainer.appendChild(productDiv);
  });
});
