import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import TestService from "../../api/testService";
import { combineLatest, of } from "rxjs";
import { catchError, map, take } from "rxjs/operators";

const Home = () => {
  const [test, setTest] = useState([]);

  useEffect(() => {
    const testService = new TestService();

    const subscriptionTest = testService.getTest();

    combineLatest([subscriptionTest])
      .pipe(
        map(([dataTest]) => {
          console.log(dataTest);

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
