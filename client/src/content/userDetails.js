import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import StarIcon from "@mui/icons-material/Star";
import img from "../assests/josue.webp";
import { Typography, Box, Link } from "@mui/material";

export const userDetails = {
  name: "Josue Rodriguez",
  profession: "Software Engineer",
  avatar: img,
  location: {
    city: "Hemet",
    state: "CA",
  },
  description: (
    <Box>
      <Typography paragraph>
        Hey, I'm Josue Rodriguez, a software engineer based in Hemet, CA.
      </Typography>
      <Typography paragraph>
        My professional career started when I dropped out of college to attend
        Lambda School, a 9+ month computer science and software engineering
        program that provides an immersive hands-on curriculum with a focus on
        computer science, and full-stack web development.
      </Typography>
      <Typography paragraph>
        As for myself, I really enjoy watching anime, reading manga, struggling
        through leetcode challenges, and immersing myself in the sneaker-twitter
        community (sneaker drops).
      </Typography>
      <Typography paragraph>
        I recently left my Project Reviewing position at{" "}
        <Link
          href={"https://www.bloomtech.com/"}
          color="secondary"
          target="_blank"
        >
          Bloomtech (
          <Box component="span" fontStyle="italic">
            formerly Lambda School
          </Box>
          )
        </Link>{" "}
        to focus on finding a team whose products and projects I'm passionate
        about. My goal right now is to join an awesome engineering-team as a
        full-time Software Engineer!
      </Typography>
    </Box>
  ),
  socials: [
    { icon: <LinkedInIcon />, link: "https://www.linkedin.com/in/maybejosue/" },
    { icon: <GitHubIcon />, link: "https://github.com/maybejosue" },
    { icon: <StarIcon />, link: "https://leetcode.com/maybejosue/" },
  ],
  contact: {
    icon: <EmailIcon />,
    link: "mailto:maybejosue@gmail.com",
    headline: "Get in touch",
  },
};
