import React from "react";
import LessonTiles from "./lessons/LessonTiles";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.div`
  background-color: white;
  color: black; /* Fixed text color */
  display: flex;
  align-items: center;
  text-transform: uppercase;
`;

const BackButton = styled(Link)`
  background-color: #007da5;
  color: white;
  padding: 10px 20px;
  margin-right: auto; /* Pushes the button to the left */
  text-decoration: none;
  font-weight: bold;
`;

const Title = styled.div`
  color: black;
  margin-right: auto; /* Pushes the button to the left */
  text-transform: uppercase;
  font-size: 18px;
`;

const Banner = styled.div<{ backgroundImage: string }>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  padding: 16px;
  cursor: pointer;
  margin-bottom: 16px;
  font-size: 20px;
  position: relative; /* Needed for the overlay */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.25); /* Semi-transparent black overlay */
    z-index: 1; /* Ensure it is below the text */
    border-radius: 8px; /* Match the banner's border radius if applicable */
  }

  & > span {
    position: relative;
    z-index: 2; /* Ensure text is above the overlay */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); /* Optional: add a text shadow */
  }
    & > a {
    position: relative;
    z-index: 2; /* Ensure text is above the overlay */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); /* Optional: add a text shadow */
  }

  text-transform: uppercase; /* Keep this for consistent styling */
`;

const Button = styled.a`
  display: block;
  background-color: #007da5;
  color: white;
  padding: 10px 20px;
  margin-top: 8px;
  text-decoration: none;
  z-index: 4;
`;

const Card = styled.div<{ backgroundImage: string }>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  color: white;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  position: relative; /* Needed for the overlay */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black overlay */
    border-radius: 8px; /* Match the card's border radius */
    z-index: 1; /* Ensure it is below the text */
  }

  & > * {
    position: relative; /* Position child elements above the overlay */
    z-index: 2; /* Ensure content is above the overlay */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); /* Optional: add a text shadow */
  }
`;

const CardTitle = styled.h2`
  margin-bottom: 16px;
  font-size: 20px;
  text-transform: uppercase;
`;

const CardContent = styled.div`
  line-height: 1.6; /* For better readability */
`;

function EqComponent(props: any) {
  const googleSheetLink =
    "https://docs.google.com/spreadsheets/d/17hnM6C1sbYS2Hnc3ewtLkLqx747O33Ii_tOx8PIDSH4/edit?usp=sharing";
  const backgroundImage = require("./images/jesus.webp"); // Replace with your image path
  const jesus = require("./images/jesus-portrait.webp");

  return (
    <div>
      <Navbar>
        <BackButton to="/eq">Home</BackButton>
        <Title>Summit Ward Elder's Quorum</Title>
      </Navbar>
      <Banner
        backgroundImage={backgroundImage}
        onClick={() => window.open(googleSheetLink, "_blank")}
      >
        <span>
          Help the missionaries by adding the times during the week when you are
          most available!
        </span>
        <Button
          href={googleSheetLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Form
        </Button>
      </Banner>

      {/* Ward Mission Plan Section */}
      <Card backgroundImage={jesus}>
        <CardTitle>Ward Mission Plan</CardTitle>
        <CardContent>
          <p>
            <strong>Vision Statement:</strong> The Summit Ward’s Missionary
            Vision is to help all develop a personal relationship with Jesus
            Christ and provide opportunities to participate in saving temple
            ordinances.
          </p>
          <p>
            <strong>
              1. Develop a personal relationship with Jesus Christ
            </strong>
          </p>
          <ul>
            <li>
              Help all build a strong foundation of prayer, scripture study and
              church attendance.
            </li>
            <li>
              Become better disciples of Jesus Christ by building personal
              friendships and showing love through serving others and
              ministering to those around us.
            </li>
            <li>
              Become better neighbors by loving, sharing and inviting others to
              participate in our lives and homes.
            </li>
          </ul>
          <p>
            <strong>
              2. Provide Opportunities to participate in saving ordinances
            </strong>
          </p>
          <ul>
            <li>
              Develop a strong culture and love for family history in our ward
              and families.
            </li>
            <li>
              Help individuals and families to progress along my covenant path.
            </li>
            <li>Temple</li>
          </ul>
        </CardContent>
      </Card>

      <LessonTiles />
    </div>
  );
}

export default EqComponent;
