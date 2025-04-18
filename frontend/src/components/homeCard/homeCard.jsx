import { Button, Card } from 'react-bootstrap';

import alsiaLogo from '../../assets/images/alsia.png';

import './homeCard.css';

const HomeCard = ({ test_id, name, description, onDelete }) => {
    const handleDelete = () => {
        console.log('Données supprimées :', test_id);
        onDelete(test_id);
    };

    return (
        <Card style={{ width: '18rem' }} bg="danger" text="white">
            <Card.Img
                variant="top"
                src={alsiaLogo}
                style={{ background: 'white' }}
            />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Button variant="primary" onClick={handleDelete}>
                Supprimer
            </Button>
        </Card>
    );
};

export default HomeCard;
