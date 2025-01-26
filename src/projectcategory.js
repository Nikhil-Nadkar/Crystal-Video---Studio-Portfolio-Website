document.addEventListener("DOMContentLoaded", () => {
  // youtube video url
  const projectData = [
    {
      id: "01",
      category: "Motion Graphic",
      url: `<iframe class = "w-full h-full rounded-xl"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/IpijuAxA2nc?si=FKXbYzV-vmYXxRxU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>`,
    },
    {
      id: "02",
      category: "Motion Graphic",
      url: `<iframe class = "w-full h-full rounded-xl"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/53uBwKKBlq0?si=dZaVHcpa7wIe1gxl"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>`,
    },
    {
      id: "03",
      category: "3D",
      url: `<iframe class = "w-full h-full rounded-xl"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/FTfQT1WWB_0?si=fTy5uzpxCDOgzfWr"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>`,
    },
    {
      id: "04",
      category: "Video Editing",
      url: `<iframe class = "w-full h-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/h3mdNjsMt4c?si=IOFKOGnSh4oARqCb"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>`,
    },
    {
      id: "05",
      category: "3D",
      url: `<iframe class = "w-full h-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/66HRJFTnV3A?si=LVb8cHbZ8oOM_yzf"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>`,
    },
  ];
  // youtube video url

  //  declaring dom elements
  const selectedCategory = document.querySelectorAll(".userClick");
  const projectContainer = document.getElementById("projectcard_container");
  //  declaring dom elements

  // default rendervalue
  let selectedIput = "Motion Graphic";
  filtercategory(selectedIput);

  // default rendervalue

  selectedCategory.forEach((element) => {
    element.addEventListener("click", () => {
      if (selectedIput === element.textContent) return;

      selectedCategory.forEach((element) =>
        element.classList.remove("gradient")
      );
      element.classList.add("gradient");
      selectedIput = element.textContent; // get userclick category

      filtercategory(selectedIput);
    });
  });

  // filtercategory
  function filtercategory(value) {
    const selectedData = projectData.filter(
      (element) => element.category == value
    );
    projectContainer.innerHTML = "";
    selectedData.map((element) => {
      const newDiv = document.createElement("div");
      newDiv.innerHTML = `
      <div class="bg-slate-500 aspect-[5/3] rounded-xl relative">${element.url}</div>
      `;
      projectContainer.appendChild(newDiv);
    });
  }
});
