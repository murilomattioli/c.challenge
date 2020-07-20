import axios from 'axios';
const qs = require('querystring')

export class Node {

    rest(link, obj = false) {
        return new Promise((resolve, reject) => {
            this.rfc(link, obj).then((data) => {
                if (data.data) {
                    resolve(data.data);
                } else {
                    resolve(data);
                }
            }, reject);
        });
    }

    rfc(link, obj) {
        let rest = null;
        rest = this._axios(link, obj);

        return new Promise((resolve, reject) => {
            rest.then(response => {
                resolve(response);
            }).catch((error) => {
                console.log("error catch", error);
                reject({ error: 99, error_msg: "Erro ao tentar acessar o servidor.", error_type: "erro_access" });
            });
        });
    }

    _axios(link, obj) {
        let headers = {};
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        //EX. FORMATO DO POST '{"email": "heroku@test.co", "name": "test"}'
        let postParam = `{"email": "${obj.email}", "name": "${obj.nome}"}`;
        console.log("param", postParam);
        if (obj) {
            return axios.post(link, postParam, config);
        }
        else {
            return axios.get(link, { headers });
        }
    }

}
