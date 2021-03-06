import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SkillItem from "./SkillItem";
import { v4 as uuidv4 } from "uuid";
import useScreenSize from "../../../hooks/useScreenSize";
import AnimateOnScroll from "../../shared/AnimateOnScroll";

// icons obtained from https://devicon.dev/
export const allSkills = {
  languages: {
    JavaScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    Python:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  frontend: {
    "React.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    Redux:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    "Material UI":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    Sass: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    jQuery:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
    Formik: "https://img.stackshare.io/service/8846/preview.png",
  },
  backend: {
    "Node.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    Django:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    Firebase:
      "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png",
    MongoDB:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    MySQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  },
  other: {
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    GitHub:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    Bitbucket:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
    Jira: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    Heroku:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
    Figma:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
};

export const getImgSrcOfTechnology = (technology) => {
  let imgSrc;
  Object.values(allSkills).forEach((techGroup) => {
    imgSrc ??= techGroup[technology];
  });
  return imgSrc;
};

const Skills = () => {
  const { desktop, tablet, phone } = useScreenSize();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={3}
      py={7}
      id="skills"
    >
      <Typography variant="h1">skills</Typography>
      <Box
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
        justifyContent="center"
        mt={desktop ? 4 : 3}
      >
        {Object.entries(allSkills).map((technologyGroup) => {
          const [technologyGroupName, technologyGroupList] = technologyGroup;
          return (
            <Box
              display="flex"
              flexDirection={desktop ? "row" : "column"}
              alignItems="center"
              my={3}
              gap={desktop && "50px"}
              key={uuidv4()}
            >
              <Box
                display="flex"
                justifyContent={desktop ? "right" : "center"}
                alignItems="right"
                width={desktop && "200px"}
              >
                <Typography
                  color="secondary.main"
                  variant="h4"
                  mb={(tablet || phone) && "30px"}
                >
                  {technologyGroupName}
                </Typography>
              </Box>

              <AnimateOnScroll animation="fade-left">
                <Box
                  display="flex"
                  flexDirection="row"
                  flexWrap="wrap"
                  justifyContent={desktop ? "left" : "center"}
                >
                  {Object.entries(technologyGroupList).map((technology) => {
                    const [technologyName, technologyImgSrc] = technology;
                    return (
                      <SkillItem
                        key={uuidv4()}
                        name={technologyName}
                        src={technologyImgSrc}
                      />
                    );
                  })}
                </Box>
              </AnimateOnScroll>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Skills;
