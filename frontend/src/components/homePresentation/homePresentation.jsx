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
                className="align-items-stretch home-presentation-container"
            >
                {/* Bloc gauche */}
                <div className="home-presentation-left-block align-items-center text-center">
                    <Image src={alsiaLogo} height={200} />
                    <div>Titre gauche</div>
                </div>

                {/* Bloc droit */}
                <Stack
                    gap={3}
                    className="home-presentation-right-block justify-content-between"
                >
                    <RightItem src={alsiaLogo} title="Bloc 1" />
                    <RightItem src={alsiaLogo} title="Bloc 2" />
                    <RightItem src={alsiaLogo} title="Bloc 3" />
                </Stack>
            </Stack>
        </Container>
    );
};

export default HomePresentation;
