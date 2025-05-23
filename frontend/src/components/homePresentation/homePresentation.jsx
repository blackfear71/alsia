import { Container, Image, Stack } from 'react-bootstrap';

import alsiaLogo from '../../assets/images/alsia.png';

import './homePresentation.css';

const RightItem = ({ src, title }) => (
    <div className="home-presentation-item-card d-flex align-items-center">
        <Image src={src} width={60} height={60} />
        <div className="home-presentation-item-text ms-3">{title}</div>
    </div>
);

const HomePresentation = () => {
    return (
        <Container>
            <Stack
                direction="horizontal"
                gap={3}
                className="home-presentation-container"
            >
                {/* Bloc gauche */}
                <div className="home-presentation-left-block">
                    <div className="home-presentation-image-wrapper">
                        <Image
                            src={alsiaLogo}
                            className="home-presentation-image"
                        />
                    </div>
                    <div>Recette aléatoire</div>
                </div>

                {/* Bloc droit */}
                <Stack
                    gap={3}
                    className="home-presentation-right-block justify-content-between"
                >
                    <RightItem src={alsiaLogo} title="Toutes les recettes" />
                    <RightItem src={alsiaLogo} title="Me connecter" />
                    <RightItem src={alsiaLogo} title="Mes favoris (connecté)" />
                </Stack>
            </Stack>
        </Container>
    );
};

export default HomePresentation;
