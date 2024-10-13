import React from 'react';
import './eq.css';
import Truck from '../images/truck.jpg'
import Gramps from '../images/Gramps.jpg'
import Fender from '../images/fender.jpg'
import Race from '../images/Race.jpg'
import Grands from '../images/grands.png'
import Me from '../images/meanddad.jpg'
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Navbar = styled.div`
  background-color: white;
  
  color: white;
  display: flex;
  align-items: center;
`;

const BackButton = styled(Link)`
  background-color: #007da5;
  color: white;
  padding: 10px 20px;
  margin-right: auto; /* Pushes the button to the left */
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: #e0a800;
  }
`;

const Title = styled.div`
  color: black;
    margin-right: auto; /* Pushes the button to the left */

`;

function Swede(props: any) {
  return (
    <div>
      <Navbar>
        <BackButton to="/eq">Home</BackButton>
        <Title>Elder's Quorum Lessons</Title>
      </Navbar>
    <div className="component-container" style={{ color: props.activeColor }}>
    
      <div className="image-container">
        <img src={Truck} alt="Truck Meme" />
      </div>

      <div className="content-container">
        <div className="paragraph-container">
          <div className="section-title">The "Swede"</div>
          <div className="image-container">
            <img src={Gramps} alt="Grandpa" />
          </div>
          <hr />
          <p>"They made their home in Highland Park, and attended the Garbanza Ward.
            He became a partner to the two owners of the Harbor Fish Company, and from 1941, having borrowed money to buy out one of the partners, he buried himself in the business.
            He said, “I made it pay well; I increased [business volume] by ten times, and people called me successful, but it was a night mare: Repulsive work, labor shortages, government interference, and very little sleep and no family life for the next eight years until I wound up in White Memorial Hospital, and there, it took me two weeks to recuperate.” He had a heart problem and a hemorrhaging ulcer.
            Lloyd had never been inactive. He hated every minute of it. In seven months he gained weight, from 155 to 245 lbs. He hated himself and was grouchy with everyone. At 50 years of age, many thought he was through.
            He went back to his Dr. for a checkup about a year later.  The Dr. said, “I don’t know how you did it, but you have recovered wonderfully.” For him, biking was a godsend and restored his well beaten body to a robust vigorous one of full energy and vitality."</p>
        </div>
        <div className="image-container">
          <img src={Fender} alt="Fender AD" />
        </div>
        <div className="image-container">
          <img src={Race} alt="Race" />
        </div>
        
        <hr />

        <div className="section-title">Results</div>
        <p>The following attests to Lloyd’s business acumen, his tact and charisma in business and other phases of life, and most of all, his overall integrity, fairness, dependability and compassion toward his fellowmen—and his testimony of—The Church of Jesus Christ of Latter-day Saints.

          Moreover, we need to be well aware that Lloyd became active in his church—giving up for good, his cigars and beer at age 50, after the hospitalization for a bleeding-ulcer-scare. As you have read in previous parts of his history, it is impressed upon us that he always had pride in his Mormon heritage, and never, was he critical of, or an antagonist of the Church; for he cooperated in every way through encouragement and affording transportation to family that didn’t drive, to always take them to their church meetings and activities.</p>
        
          <div className="image-container">
          <img src={Grands} alt="Shirts" />
        </div>
        <div className="image-container">
          <img src={Me} alt="Me and Dad" />
        </div>
        <div className="list-container">
          <div className="section-title">Questions</div>
          <ul>
            <li>How does keeping yourself physically healthy bless your family and your posterity?</li>
            <li>What traditions or physical activities do you want to pass down in your family?</li>
            <li>A man prioritizing his physical health had a generational impact on his family. God gives us health commandments like the Word of Wisdom. How does taking care of our bodies affect our spiritual health?</li>
          </ul>
        </div>

        <div className="section-title">Omar's Story</div>
        <div className="paragraph-container">
          <p style={{ fontStyle: "italic" }}>For the Sake of Your Posterity, October 2023 Conference</p>
          <p>Elder Carlos A. Godoy shared an experience from his time in Peru, he had a chance encounter with a taxi driver named Omar, who was a member of the Church but had become inactive. Elder Godoy discovers Omar's journey away from the Church and his desire to return for the sake of his children. This encounter leads to a series of events that culminate in Omar and his family rejoining the Church, and they end up getting sealed in the temple.</p>
        </div>
        <div className="list-container">
          <div className="section-title">Questions</div>
          <ul>
            <li>How do you think Omar's decision to return to the Church impacted not only his own life but also the lives of his family members and future generations?</li>
            <li>What are some common reasons why individuals may become less active or lukewarm in their participation in the Church? How can we address these concerns and support individuals in their spiritual journey?</li>
            <li>Reflecting on your own spiritual journey, what legacy do you hope to leave for future generations?</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Swede;
