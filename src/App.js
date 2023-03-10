import React, { useState } from "react";
import Ellipse from "./components/Ellipse";
import Users from "./components/Users";
import UserInfo from "./components/UserInfo";
import MainUser from "./components/MainUser";
import DownButton1 from "./components/DownButton1";
import DownButton2 from "./components/DownButton2";

function App() {
  const [index, changeIndex] = useState(0);
  const colors = ["#C5F8C7", "#7ABD87"];
  const [ellipseColorIndex, changeEllipseColor] = useState(0);
  const [pathColor, changePathColor] = useState(0);
  const [needRotate, setRotate] = useState(0);

  const userList = [
    {
      key: "one",
      rating: "4.9",
      name: "Prankur Gupta",
      job: "SDE @Amazon",
      description:
        "I am Prankur Gupta, I am working as a Software Development Engineer at Amazon. I can guide you throughout your preparation phase. Trust me when I tell you this I know the exact recipe to crack the coding interview rounds of top companies for the SDE role.",
    },
    {
      key: "two",
      rating: "5.0",
      name: "Saurav Pal",
      job: "SDE-2 @Amazon",
      description:
        "I am a Senior Software Developer American Express. Have been passionately solving Leetcode, HackerRank, Codechef, Codeforces problems, and enthusiastically solving problems with the analysis of space.",
    },
    {
      key: "three",
      rating: "5.0",
      name: "Saumya Singh",
      job: "Software Engineer @Red Hat",
      description:
        "Engineer @RedHat | Program Manager'20 @GirlScript | GHCI Scholar | International Open Source Award finalist by Red Hat | Winner SIH, 21U21 Award | Google Connect Winner'19 | Mentor GCI",
    },
    {
      key: "four",
      rating: "5.0",
      name: "Keshav Bathla",
      job: "SDE-1 @Groww",
      description:
        "A curious learner, on a way to become a kickass developer who writes Python, Java, Javascript and Go | Software Engineer @Groww | Ex-Software Engineer @Grofers | Tech Consultant | Freelancer | Open Source Developer | Coding Instructor",
    },
    {
      key: "five",
      rating: "5.0",
      name: "Ankita",
      job: "ML Engineer @Firework",
      description:
        "Working my way to build the world's future product. Machine Learning Engineer, Data and Technology Evangelist I breathe in developing software with intelligence. I have been involved with startups like DailyHunt, Firework Hq, MagilHub to build the AI end of their products. ",
    },
  ];

  function leftMove() {
    setRotate(1);
    changeEllipseColor((prevCol) => {
      return prevCol ^ 1;
    });

    changePathColor((prevIndex) => {
      return prevIndex ^ 1;
    });

    changeIndex((prevIndex) => {
      if (prevIndex < userList.length - 1) {
        return prevIndex + 1;
      }
      return 0;
    });
  }
  function rightMove() {
    setRotate(2);
    changeEllipseColor((prevCol) => {
      return prevCol ^ 1;
    });

    changePathColor((prevIndex) => {
      return prevIndex ^ 1;
    });
    changeIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      }
      return 4;
    });
  }

  return (
    <React.Fragment>
      <Ellipse color={colors[ellipseColorIndex]} />
      <Users color={pathColor} Rotate={needRotate} />
      <UserInfo data={userList[index]} color={pathColor} />
      <MainUser data={userList[index]} />
      <DownButton1 moveLeft={leftMove} color={pathColor} />
      <DownButton2 moveRight={rightMove} color={pathColor} />
    </React.Fragment>
  );
}

export default App;
