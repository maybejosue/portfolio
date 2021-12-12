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
        My professional career started when I dropped out of college to attend{" "}
        <Link
          href={"https://www.bloomtech.com/"}
          color="secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bloomtech (
          <Box component="span" fontStyle="italic">
            formerly Lambda School
          </Box>
          )
        </Link>
        ; a technical training program designed to teach full-stack web
        development and computer science fundamentals.
      </Typography>
      <Typography paragraph>
        After I graduated from Bloomtech, I worked as a Code Reviewer, where I
        provided actionable feedback to student developers on their sprint
        challenge submissions. While I enjoyed my time as a Code Reviewer, I
        left the position to focus on finding a full-time Software Engineering
        role whose products and projects I'm passionate about.
      </Typography>
      <Typography paragraph>
        On a more personal note, I enjoy watching anime, reading manga,
        struggling through Leetcode challenges, and immersing myself in the
        sneaker-twitter community.
      </Typography>
    </Box>
  ),
  socials: [
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/maybejosue/",
      label: "Linkedin",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/maybejosue",
      label: "Github",
    },
    {
      icon: <StarIcon />,
      link: "https://leetcode.com/maybejosue/",
      label: "Leetcode",
    },
  ],
  contact: {
    icon: <EmailIcon />,
    link: "mailto:maybejosue@gmail.com",
    headline: "Get in touch",
    label: "Email",
  },
};
