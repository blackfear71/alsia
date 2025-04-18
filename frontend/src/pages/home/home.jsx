import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import TestService from '../../api/testService';

import HomeCard from '../../components/homeCard/homeCard';
import TestForm from '../../components/testForm/testForm';

import { combineLatest, of, switchMap } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

const Home = () => {
    const [test, setTest] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });

    useEffect(() => {
        const testService = new TestService();

        const subscriptionTest = testService.getAllTest();

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

    const handleSubmit = () => {
        const testService = new TestService();

        testService
            .insertTest(formData)
            .pipe(
                switchMap(() => testService.getAllTest()),
                map((dataTest) => {
                    setTest(dataTest.response);
                    resetFormData();
                }),
                take(1),
                catchError((err) => {
                    // TODO : voir pour l'affichage d'un bandeau avec erreur générique
                    console.error(err);
                    return of();
                }),
            )
            .subscribe();
    };

    const resetFormData = () => {
        formData.name = '';
        formData.description = '';

        setFormData(formData);
    };

    const handleDelete = (test_id) => {
        const testService = new TestService();

        testService
            .deleteTest(test_id)
            .pipe(
                switchMap(() => testService.getAllTest()),
                map((dataTest) => {
                    setTest(dataTest.response);
                }),
                take(1),
                catchError((err) => {
                    console.error(err);
                    return of();
                }),
            )
            .subscribe();
    };

    return (
        <div>
            <Link to="/">Accueil</Link> | <Link to="/testPage/2">Test</Link>
            <h1>Page d'accueil</h1>
            <TestForm
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleSubmit}
            />
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {test &&
                    test.map((p) => (
                        <HomeCard
                            key={p.test_id}
                            test_id={p.test_id}
                            name={p.name}
                            description={p.description}
                            onDelete={handleDelete}
                        />
                    ))}
            </div>
        </div>
    );
};
export default Home;
