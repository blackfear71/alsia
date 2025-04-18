import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import TestService from '../../api/testService';

import HomeCard from '../../components/homeCard/homeCard';

import { combineLatest, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

const TestFeature = () => {
    const [test, setTest] = useState([]);

    useEffect(() => {
        const testService = new TestService();

        const subscriptionTest = testService.getOneTest(2);

        combineLatest([subscriptionTest])
            .pipe(
                map(([dataTest]) => {
                    setTest(dataTest.response);
                }),
                take(1),
                catchError(() => {
                    return of();
                }),
            )
            .subscribe();
    }, []);

    return (
        <div>
            <Link to="/">Accueil</Link> | <Link to="/testPage">Test</Link>
            <h1>Page de test</h1>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {test && (
                    <HomeCard
                        key={test.test_id}
                        name={test.name}
                        description={test.description}
                    />
                )}
            </div>
        </div>
    );
};
export default TestFeature;
