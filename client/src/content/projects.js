import cc from "../assests/cc.webp";
import wlj from "../assests/wlj.webp";
import aa from "../assests/aa.webp";
import sa from "../assests/sa.webp";

export const projects = [
  {
    title: "Community Calendar",
    img: cc,
    description:
      "Web app designed for users to find events at a more localized neighborhood level.",
    github: "https://github.com/BloomTech-Labs/community-calendar-fe",
    deployed: "https://www.northendcalendar.com/",
    tech: ["React", "Apollo Client", "GraphQL", "AWS"],
  },
  {
    title: "Anime Archive",
    img: aa,
    description:
      "A mobile, web-based, online database of information related to anime. Users can discover new anime or level up their love and fandom for their already favorite anime.",
    github: "https://github.com/Anime-Archive/anime-archive-fe",
    deployed: "https://animearchive.netlify.app/",
    tech: ["React", "AniList API", "GraphQL", "Netlify"],
  },
  {
    title: "Weightlifting Journal",
    img: wlj,
    description:
      "Convenient app that tracks your progress in order to help individuals achieve and preserve a way of life and a mindset unique to the roots of muscle build and weight loss.",
    github:
      "https://github.com/BW-FT-Weight-Lifting-Journal-12/ui-marketing-page",
    deployed: "https://weight-lifting-journal-12.netlify.app/index.html",
    tech: ["HTML", "LESS/CSS", "Netlify"],
  },
  {
    title: "Silent Auction",
    img: sa,
    description:
      "Web app allows users to own items at a desired price while supporting charity organizations",
    github: "https://github.com/Web26-Silent-Auction-1/FE",
    deployed: "",
    tech: ["React", "Redux", "Netlify"],
  },
];
