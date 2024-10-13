import React, { useState } from "react";
import "./eq.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import image1 from "../images/fire/1.jpg";
import image2 from "../images/fire/2.jpg";
import image3 from "../images/fire/3.jpg";
import image4 from "../images/fire/4.jpg";
import image5 from "../images/fire/5.jpg";
import image6 from "../images/fire/6.jpg";
import image7 from "../images/fire/7.jpg";
import image8 from "../images/fire/8.jpg";
import image9 from "../images/fire/9.jpg";
import image10 from "../images/fire/10.jpg";

const Navbar = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
`;

const BackButton = styled(Link)`
  background-color: #007da5;
  color: white;
  padding: 10px 20px;
  margin-right: auto;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: #e0a800;
  }
`;

const Title = styled.div`
  color: black;
  margin-right: auto;
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const Container = styled.div`
  padding: 16px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f9f9f9; /* Soft background color */
  color: black;
  border-radius: 8px; /* Round corners */
`;

const Card = styled.div`
  background-color: #e8e8e8; /* Slightly darker background */
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow */
`;

const Quote = styled.blockquote`
  font-style: italic;
  color: #333; /* Darker color for better readability */
  margin: 0;
  padding-left: 16px; /* Indent the quote */
  border-left: 4px solid #007da5; /* Left border for quotes */
`;
const LessonTitle = styled.a`
  display: block;
  text-align: center;
  text-transform: uppercase;
  background-image: url("https://www.churchofjesuschrist.org/imgs/bc06a8e4f38f11eeb999eeeeac1e31d305764595/full/640%2C/0/default");
  background-size: cover;
  background-position: center;
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-decoration: none;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.8); /* Add shadow for readability */
`;

const LessonTitleText = styled.h2`
  margin: 0; /* Remove default margin */
`;

const AuthorName = styled.h3`
  margin: 0; /* Remove default margin */
  font-style: italic; /* Optional: italic style for the author's name */
  font-size: 14px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6); /* Add shadow for readability */
`;

const CarouselContainer = styled.div`
  position: relative;
  max-width: 100%;
  overflow: hidden;
  margin: 20px 0;
`;

const CarouselImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const NumberOverlay = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  &:focus {
    outline: none;
  }
`;

const LeftArrow = styled(Arrow)`
  left: 10px;
`;

const RightArrow = styled(Arrow)`
  right: 10px;
`;

function BeStill(props: any) {
  const talkLink =
    "https://www.churchofjesuschrist.org/study/general-conference/2024/04/21bednar?lang=eng"; // Replace with the actual content ID

  const images = [
    image1, // Replace with your image URLs
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <Navbar>
        <BackButton to="/eq">Home</BackButton>
        <Title>Elder's Quorum Lessons</Title>
      </Navbar>

      <Container>
        <LessonTitle href={talkLink}>
          <LessonTitleText>Be Still, and Know That I Am God</LessonTitleText>
          <AuthorName>David A. Bednar</AuthorName>
        </LessonTitle>
        <Section>
          <h3>The Importance of Stillness</h3>
          <Quote>
            During a media day for a new temple, Bednar guided journalists
            through the sacred space, explaining its purposes and answering
            their questions. Before entering the celestial room, which
            symbolizes heavenly peace, Bednar asked them to remain silent to
            fully appreciate the stillness. Afterward, one journalist expressed
            profound awe, stating they had never known such quietness.
          </Quote>
          <br></br>
          <Quote>
            “I have never experienced anything like that in my entire life. I
            did not know quiet like that existed.”
          </Quote>
          <p>
            How does modern life often distract us from experiencing stillness?
            Why did this stand out to the journalist?
          </p>
        </Section>

        <Section>
          <h3>God’s Assurance</h3>
          <Quote>“Be still, and know that I am God.”</Quote>
          <p>
            This commandment invites us to trust in God’s power and presence.
          </p>
        </Section>

        <Card>
          <h4>Trust in God</h4>
          <p>
            In 1833, the Saints in Missouri were the targets of intense
            persecution. Mobs had driven them from their homes in Jackson
            County, and some Church members had tried to establish themselves in
            other nearby counties. But the persecution continued, and the
            threats of death were many. In these challenging circumstances, the
            Lord revealed the following instruction to the Prophet Joseph Smith
            in Kirtland, Ohio:
          </p>
          <Quote>
            “Therefore, let your hearts be comforted concerning Zion; for all
            flesh is in mine hands; be still and know that I am God.”
          </Quote>
          <p>How can we rely on God in challenging times?</p>
        </Card>

        <Card>
          <h4>A Seven Year Old's Trust in God</h4>
          <p>
            21 years ago, in October of 2003, the worst wildfire in my life
            threatened to destroy my families home. My mother and siblings
            evacuated, but my father stayed behind. Firefighter's were not
            willing to try to save the house, but they said they would come up
            to check after the worst had passed. We watched from miles away as
            an explosion of flame engulfed my house, with my dad inside.
          </p>

          <CarouselContainer>
            <CarouselImage src={images[currentIndex]} alt="Carousel" />
            <NumberOverlay>
              {currentIndex + 1} / {images.length}
            </NumberOverlay>
            <LeftArrow onClick={goToPrevious}>&lt;</LeftArrow>
            <RightArrow onClick={goToNext}>&gt;</RightArrow>
          </CarouselContainer>

          <p>
            Its easy to say that everything is in God's hands and to relax when
            bad things are happening to other people, how can we use this
            perspective when something horrible is happening to you in the
            moment?
          </p>
        </Card>

        <Card>
          <h4>Building on Christ</h4>
          <Quote>
            “It is upon the rock of our Redeemer, who is Christ, the Son of God,
            that ye must build your foundation.”
          </Quote>
          <p>What does it mean to build your life on Christ?</p>
        </Card>

        <Card>
          <h4>Sacred Times and Places</h4>
          <Quote>
            “Each meetinghouse...is a holy place of reverence, worship, and
            learning.”
          </Quote>
          <p>How can our homes become sacred spaces?</p>
        </Card>

        <Section>
          <h3>Practical Applications</h3>
          <p>
            Designate a quiet area and time in your day for prayer and
            reflection.
          </p>
          <p>
            How does the commandment of keeping the Sabbath Day holy come into
            play as a time to focus on spiritual growth?
          </p>
          <p>
            We need a daily practice of quiet meditation and prayer to connect
            with God. What keeps us from five - fifteen minutes of quiet a day?
          </p>
        </Section>

        <Section>
          <h3>Conclusion</h3>
          <p>
            As we build our foundation on Jesus Christ, we will experience peace
            and stillness in our souls. The gospel is a message of peace, not of
            guilt or stress.
          </p>
        </Section>
      </Container>
    </div>
  );
}

export default BeStill;
