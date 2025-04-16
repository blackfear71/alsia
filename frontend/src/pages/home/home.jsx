import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import TestService from "../../api/testService";
import { combineLatest, of } from "rxjs";
import { catchError, map, take } from "rxjs/operators";
import HomeCard from "../../components/homeCard/homeCard";

const Home = () => {
  const [test, setTest] = useState([]);

  useEffect(() => {
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
      <Link to="/">Accueil</Link> | <Link to="/test">Test</Link>
      <h1>Page d'accueil</h1>
      <div style={{display: "flex", justifyContent: "space-evenly"}}>
        {test &&
          test.map((p) => 
            <HomeCard
              key={p.test_id}
              name={p.name}
              description={p.description}
            />
          )
        }
      </div>
    </div>
  );
};
export default Home;
