import { Container, Image, Stack } from 'react-bootstrap';

import alsiaLogo from '../../assets/images/alsia.png';

import './homeSuggestions.css';

const HomeSuggestions = () => {
    return (
        <Container>
            <Stack
                direction="horizontal"
                gap={3}
                className="align-items-stretch home-suggestions-container"
            >
                {/* Bloc gauche */}
                <div className="home-suggestions-block text-center">
                    <div className="home-suggestions-image-wrapper">
                        <Image
                            src={alsiaLogo}
                            className="home-suggestions-image"
                        />
                    </div>
                    <div>Suggestion entrée</div>
                </div>

                {/* Bloc milieu */}
                <div className="home-suggestions-block text-center">
                    <div className="home-suggestions-image-wrapper">
                        <Image
                            src={alsiaLogo}
                            className="home-suggestions-image"
                        />
                    </div>
                    <div>Suggestion plat</div>
                </div>

                {/* Bloc droit */}
                <div className="home-suggestions-block text-center">
                    <div className="home-suggestions-image-wrapper">
                        <Image
                            src={alsiaLogo}
                            className="home-suggestions-image"
                        />
                    </div>
                    <div>Suggestion dessert</div>
                </div>
            </Stack>
        </Container>
    );
};

export default HomeSuggestions;
