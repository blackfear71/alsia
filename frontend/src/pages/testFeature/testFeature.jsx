import { Link } from "react-router-dom";

const TestFeature = () => {
  return (
    <div>
      <Link to="/">Accueil</Link> | <Link to="/testPage">Test</Link>
      <h1>Page de test</h1>
    </div>
  );
};
export default TestFeature;
