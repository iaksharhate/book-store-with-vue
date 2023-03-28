import axios from "axios";

const BOOKSTORE_URL = 'http://localhost:8081/book';

class BookService {

    getAllBooks(){
        return axios.get(`${BOOKSTORE_URL}/getAllBooks`);
    }
}

export default new BookService();