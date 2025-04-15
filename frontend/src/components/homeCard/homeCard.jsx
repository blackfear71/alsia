import React from "react";
import './homeCard.css';
import { Card } from 'react-bootstrap';
import alsiaLogo from '../../assets/images/alsia.png';

const HomeCard = ({name, description}) => {
  return (
    <Card style={{ width: '18rem' }} bg='danger' text='white'>
      <Card.Img variant="top" src={alsiaLogo} style={{background: 'white'}} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HomeCard;
