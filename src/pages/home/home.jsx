import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/">Accueil</Link> | <Link to="/test">Contact</Link>
      <h1>Page d'accueil</h1>
    </div>
  );
};
export default Home;
