import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

interface Lesson {
  title: string;
  link: string;
  date: string; // Added date property
  image: string; // Added image property
}

const lessons: Lesson[] = [
  { title: 'The Swede', link: '/lessons/swede', date: '01-Mar-2024', image: require('../images/Race.jpg') },
  { title: 'Be Still', link: '/lessons/bestill', date: '13-Oct-2024', image: 'https://www.churchofjesuschrist.org/imgs/bc06a8e4f38f11eeb999eeeeac1e31d305764595/full/640%2C/0/default' },
  // Add more lessons here...
];

const TilesContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow wrapping to the next line */
  justify-content: space-between; /* Space between tiles */
  padding: 16px;
  gap: 16px; /* Gap between tiles */
`;

const Tile = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  background-color: #f0f0f0;
  text-decoration: none;
  color: black;
  flex: 1 1 calc(50% - 16px); /* Ensure two tiles per row */
  max-width: calc(50% - 16px); /* Ensure a max width of 50% minus the gap */
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  text-transform: uppercase;
`;


const ImageContainer = styled.div<{ image: string }>`
  height: 100px; /* Set a fixed height for the image area */
  background-image: url(${(props) => props.image}); /* Set the background image */
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LessonTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  text-align: center;
`;

const Title = styled.h3`
  margin: 0;
  color:black;
  font-size: 22px;
  text-align: center;
text-transform: uppercase;

`;

const LessonDate = styled.p`
  margin: 5px 0 0;
  font-size: 14px;
  color: gray;
`;

const LessonTiles: React.FC = () => {
  return (
    <div>
    <Title>Lessons</Title>

    <TilesContainer>
      {lessons.map((lesson, index) => (
        <Tile key={index} to={lesson.link}>
          <ImageContainer image={lesson.image} />
          <Content>
            <LessonTitle>{lesson.title}</LessonTitle>
            <LessonDate>{lesson.date}</LessonDate>
          </Content>
        </Tile>
      ))}
    </TilesContainer>
    </div>
  );
};

export default LessonTiles;
