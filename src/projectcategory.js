document.addEventListener("DOMContentLoaded", () => {
  // youtube video url
  const projectData = [
    // motiom graphic
    {
      id: "01",
      category: "Motion Graphic",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/csArR_nBY6I?si=a5Joxfevzx5It_vF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "02",
      category: "Motion Graphic",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/h3mdNjsMt4c?si=7eOODddZDv_x4Yem" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "03",
      category: "Motion Graphic",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/RbFgeUFk4TY?si=I2G8qK4nyxC-VJn9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "04",
      category: "Motion Graphic",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/K_V4yFFi63E?si=ORb3GMiPAkAHkRwf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "05",
      category: "Motion Graphic",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/IpijuAxA2nc?si=Xbp39kLFeFFsjY-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "06",
      category: "Motion Graphic",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/NAodkZQLjTA?si=XwEHt2fOdq_bxXgd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "07",
      category: "Motion Graphic",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/fVg2nzA-X98?si=jBEyb2JPoOvtxSz9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "08",
      category: "Motion Graphic",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/FTfQT1WWB_0?si=vvQ5LvCKzgiSWYPa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "09",
      category: "Motion Graphic",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/53uBwKKBlq0?si=0hppt6DMUmeJeII2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "10",
      category: "Motion Graphic",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/oCJ8OEai7VM?si=_9kYSXxtJKYSprVO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "11",
      category: "Motion Graphic",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/YInCMRHv-Gw?si=T7TNAnR4ZjZBpet6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    // motiom graphic

    // Digital Films Shoot
    {
      id: "12",
      category: "Digital Films Shoot",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/Et1qU0z0594?si=0Saj6angmSXUWBzD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "13",
      category: "Digital Films Shoot",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/ecjlh3sQZX8?si=Vu2USIV4ZtrRArqq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "14",
      category: "Digital Films Shoot",

      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/KQnAbpCHUx4?si=LfKmOe0BsK8DoBgJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "15",
      category: "Digital Films Shoot",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/xHC5SPsnNko?si=nvKBNmsSoCVZkjC5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "16",
      category: "Digital Films Shoot",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/j1aCGfp7O1Y?si=NO9hTjESVr6Ehna4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "17",
      category: "Digital Films Shoot",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/dwLdo2VcRkE?si=44K4daNqmXp-8m6n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "18",
      category: "Digital Films Shoot",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/5DVENFslCWY?si=7uMCYeXEQbYuwagx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "19",
      category: "Digital Films Shoot",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/wjgRuWV6gN4?si=7o7k51X2DIjWh2vZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "20",
      category: "Digital Films Shoot",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/XQtJxkGMwdU?si=rEYDpjW-AsftvOIh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "21",
      category: "Digital Films Shoot",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/xci7YfpMwcI?si=2SHlhkhfWZu9p2Wr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "22",
      category: "Digital Films Shoot",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/-UuFISuUqQ4?si=wsBhnDmAmuPpjzX0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    // Digital Films Shoot

    // post production
    {
      id: "23",
      category: "Post Production-Online",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/66HRJFTnV3A?si=ETcNvUaYjJmJl25b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "24",
      category: "Post Production-Online",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/8h1CYw-ZdiA?si=JyLMZeHicmsG14TK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "25",
      category: "Post Production-Online",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/s3DBxDARLgc?si=XZSlacMyZGOopQGZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "26",
      category: "Post Production-Online",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/JAoeNz6DzQ8?si=96n8hinj1u8Rj91O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "27",
      category: "Post Production-Online",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/75JU9lAsFlA?si=vhMoili5gD9tvVve" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "28",
      category: "Post Production-Online",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/80x3tjdz-qM?si=chwvQyCur-na_z75" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    // post production

    // Corporate Video-Shoot AVS
    {
      id: "29",
      category: "Corporate Video-Shoot AVS",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/jj5IYDIliBs?si=BGCttmBS88lBqW9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "30",
      category: "Corporate Video-Shoot AVS",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/qAFfkPamLFg?si=mhICZA-v1mdrMSHx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "31",
      category: "Corporate Video-Shoot AVS",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/VUs-RiGQcF4?si=n5-qcJO57nvsTFeW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    // Corporate Video-Shoot AVS

    // stock footage AVS
    {
      id: "32",
      category: "Stock footage AV",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/nVlGmSIQVs8?si=PU1cmUIHRhFw1RKh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "33",
      category: "Stock footage AV",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/qMeGAVR8l_k?si=BO24rSjOXQFZ5RBX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "34",
      category: "Stock footage AV",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/_BrWqx_axto?si=VE8ukNvy9MeU8PGC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "35",
      category: "Stock footage AV",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/vI5zVd1hJcA?si=zHFXQTu9mnTkEBK3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "36",
      category: "Stock footage AV",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/TDFw7BSOx4g?si=rdKDOq2w-awbnqYB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    // stock footage AVS

    // live event
    {
      id: "37",
      category: "Live event",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/y5RsR-PtTd4?si=C3c3tHifT3ppmAWf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "38",
      category: "Live event",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/gnPYP2EvMw8?si=n1sbmt-y9M1eEPzu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    // live event

    // roto
    {
      id: "39",
      category: "Roto",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/rrNcT-AlSCU?si=PlFmuGkRy4n4n4XK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "40",
      category: "Roto",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/cc4Ms-tOR3w?si=oCUAQT5BoUoUUGai" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "41",
      category: "Roto",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/MGYjvtNiOeE?si=pPhLvc-FTdSIY3Sl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    // roto

    // TVC making
    {
      id: "42",
      category: "TVCs Making",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/rC9bZd7J0gc?si=xj2vdGBZInxpWYWW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "43",
      category: "TVCs Making",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/ejKp3MsHLXo?si=VJA5b2wIZA4Xpt6t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "44",
      category: "TVCs Making",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/QgN4oIsd8i4?si=8j-yGfvAeDVBkXHG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    // TVC making

    // Interviews
    {
      id: "45",
      category: "Interviews",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/TQ-EKypX8Tg?si=-qfKCwxID3kY-I3S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "46",
      category: "Interviews",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/qpMbWGSaotI?si=py9KU7NNDV2H8A_1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "47",
      category: "Interviews",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/8sCM7PQze2M?si=_wX2PRxt7Icb3zW5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "48",
      category: "Interviews",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/WIlgj9aKW7Y?si=q_hUBSNd3nZ7dFf7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "49",
      category: "Interviews",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/GbCvDzrOHv4?si=aCgij6v3dFmEHhBu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    // Interviews

    // 3D Animation
    {
      id: "50",
      category: "3D Animation",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/eMopTT8D-hc?si=QeGumFIK9RfR2bqP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "51",
      category: "3D Animation",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/ZyKg5LxFiC8?si=biYKFkfgq84PDFuG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    // 3D Animation

    // Animatics
    {
      id: "52",
      category: "Animatics",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/dF86tkx--Ac?si=X2_FzT_Ufz7QI5XC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "53",
      category: "Animatics",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/L348hdNF1w8?si=dD423lnxvH208jdx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "54",
      category: "Animatics",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/ZMt0ZvaiGvU?si=FyCw6MTj7l2J2Bu7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "55",
      category: "Animatics",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/mWjxms21EYg?si=Dm6LC96aWVUHD5Np" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "56",
      category: "Animatics",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/Gtm6lGsFJLk?si=0kOwJN5BMR5g8VIN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },

    // Animatics

    // Dubbing
    {
      id: "57",
      category: "Dubbing",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/66HRJFTnV3A?si=ETcNvUaYjJmJl25b" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "58",
      category: "Dubbing",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/s3DBxDARLgc?si=XZSlacMyZGOopQGZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "59",
      category: "Dubbing",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/JAoeNz6DzQ8?si=96n8hinj1u8Rj91O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    // Dubbing

    // color grading
    {
      id: "60",
      category: "Color Grading",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/mJgvbcAamSQ?si=hbnqMgVbKHF_jpNB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "61",
      category: "Color Grading",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/txW9wcRFsbY?si=Q5ztT_OxWPZekGTP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "62",
      category: "Color Grading",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/w5ZU91v6GUI?si=V2iBJhzaEvBfzFod" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "63",
      category: "Color Grading",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/5MXnPI67H-M?si=HzUNzdArSQ_u6-Vx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
    {
      id: "64",
      category: "Color Grading",
      url: `<iframe loading="lazy" class = "w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/Ja7QkhLNdwE?si=IELKZCM1Sm5Q61eR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },

    // color grading
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
      if (selectedIput === element.textContent.replace(/\s+/g, " ").trim())
        return;

      selectedCategory.forEach((element) =>
        element.classList.remove("gradient")
      );
      element.classList.add("gradient");
      selectedIput = element.textContent.replace(/\s+/g, " ").trim(); // get userclick category
      // console.log(element.dataset.value);
      console.log(element.textContent.replace(/\s+/g, " ").trim());
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
      <div id="youtubeVideo" class="bg-slate-500 aspect-[5/3] rounded-xl relative ">${element.url}</div>
      `;
      console.log(selectedData);
      projectContainer.appendChild(newDiv);
    });
  }
});
