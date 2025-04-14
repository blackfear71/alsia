import { Link } from "react-router-dom";

const TestFeature = () => {
  return (
    <div>
      <h1>Page de test</h1>
      <Link to="/">Accueil</Link> | <Link to="/test">Contact</Link>
    </div>
  );
};
export default TestFeature;
