import React from "react";
import "./eq.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Container = styled.div`
  padding: 16px;
  max-width: 800px;
  margin: 0 auto;
  color: black;
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const Card = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const Quote = styled.blockquote`
  font-style: italic;
  color: black;
  margin: 0;
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
  text-decoration: none; /* Remove underline */
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

function BeStill(props: any) {
  const talkLink =
    "https://www.churchofjesuschrist.org/study/general-conference/2024/04/21bednar?lang=eng"; // Replace with the actual content ID

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
            symbolizes heavenly peace, Bednar asked them to remain silent to fully
            appreciate the stillness. Afterward, one journalist expressed
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
          <Quote>
            “Therefore, let your hearts be comforted concerning Zion; for all
            flesh is in mine hands; be still and know that I am God.”
          </Quote>
          <p>How can we rely on God in challenging times?</p>
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
            Encourage participants to designate a quiet area in their homes for
            prayer and reflection.
          </p>
          <p>
            Discuss the importance of keeping the Sabbath as a time to focus on
            spiritual growth.
          </p>
          <p>
            Suggest a daily practice of quiet meditation or prayer to connect
            with God.
          </p>
        </Section>

        <Section>
          <h3>Conclusion</h3>
          <p>
            As we build our foundation on Jesus Christ, we will experience peace
            and stillness in our souls.
          </p>
        </Section>
      </Container>
    </div>
  );
}

export default BeStill;
