import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import TestService from "../../api/testService";
import { combineLatest, of } from "rxjs";
import { catchError, map, take } from "rxjs/operators";

const Home = () => {
  const [test, setTest] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:3000/backend/tests.php")
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log("Réponse du backend :", data);
    //   setTest(data.response);
    // })
    // .catch((err) => {
    //   console.error("Erreur API :", err);
    // });

    // fetch("http://localhost/alsia/backend/tests")
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    //   .catch(err => console.error("Erreur fetch:", err));


    const testService = new TestService();

    const subscriptionTest = testService.getTest();

    combineLatest([subscriptionTest])
      .pipe(
        map(([dataTest]) => {
          setTest(dataTest.response);
        }),
        take(1),
        catchError(() => {
          return of();
        })
      )
      .subscribe();
  }, []);
  
  return (
    <div>
      <Link to="/">Accueil</Link> | <Link to="/test">Contact</Link>
      <h1>Page d'accueil</h1>
      <ul>{test && test.map((p) => <li key={p.test_id}>{p.test}</li>)}</ul>
    </div>
  );
};
export default Home;
