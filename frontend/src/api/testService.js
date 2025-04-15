import { ajax } from 'rxjs/ajax';

const API_URL = 'http://localhost/alsia/backend'; //process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

/**
 * Service class for managing projects from the API.
 */
class TestService {
    /**
     * Allows to get a project from the database.
     * 
     * @param {*} projetId The project identifier.
     */
    getTest = (projetId) => {
        const url = `${API_URL}/tests`;
        // const headers = { 'l': this.login, 't': this.token, 'Accept-Language': this.langueId };
        
        return ajax.get(url); //, headers);
    };

    /**
     * Update the definition of the project
     * 
     * @param {*} projetId The project identifier
     * @param {*} body the data to save
     */
    // updateDefinitionProject = (projetId, body) => {
    //     const url = `${this.rootApiUrl}/projects/${projetId}/definition`;
    //     const headers = { 'l': this.login, 't': this.token, 'Content-Type': 'application/json', 'Accept-Language': this.langueId };

    //     return ajax.patch(url, body, headers);
    // };
}

export default TestService;
