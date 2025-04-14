import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Page d'accueil</h1>
      <Link to="/">Accueil</Link> | <Link to="/test">Contact</Link>
    </div>
  );
};
export default Home;
