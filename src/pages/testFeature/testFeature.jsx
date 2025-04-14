import { Link } from "react-router-dom";

const TestFeature = () => {
  return (
    <div>
      <Link to="/">Accueil</Link> | <Link to="/test">Contact</Link>
      <h1>Page de test</h1>
    </div>
  );
};
export default TestFeature;
