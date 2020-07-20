import { Node } from '../node';

class PostmanRest {
    node = null;

    constructor() {
        this.node = new Node();
        this.apiGet = "https://corebiz-test.herokuapp.com/api/v1/products";
        this.apiPostNewsLetter = "https://corebiz-test.herokuapp.com/api/v1/newsletter";
    }

    getAll() {
        return this.node.rest(this.apiGet);
    }

    postNewsLetter(obj){
        return this.node.rest(this.apiPostNewsLetter, obj);
    }

}

var postman = new PostmanRest();
global.postman = postman;
export var postman;
