import { Container, Image, Stack } from 'react-bootstrap';

import alsiaLogo from '../../assets/images/alsia.png';

import './homeAccess.css';

const HomeAccess = () => {
    return (
        <Container>
            <Stack
                direction="horizontal"
                gap={3}
                className="align-items-stretch home-access-container"
            >
                {/* Bloc gauche */}
                <div className="home-access-block d-flex align-items-center">
                    <Image src={alsiaLogo} className="home-access-image" />
                    <div className="home-access-text">Toutes les recettes</div>
                </div>

                {/* Bloc droit */}
                <div className="home-access-block d-flex align-items-center">
                    <Image src={alsiaLogo} className="home-access-image" />
                    <div className="home-access-text">Tous les ingrédients</div>
                </div>
            </Stack>
        </Container>
    );
};

export default HomeAccess;
