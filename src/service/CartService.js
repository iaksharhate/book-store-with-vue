import axios from "axios";

const BOOKSTORE_CART_URL = 'http://localhost:8081/cart';

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF9rZXkiOjF9.fdYOA1MWt7W3GF8VtvscoJcSJshvld5GvMFDWQNzqvo';

class CartService {

    addToCart(data){
        return axios.post(`${BOOKSTORE_CART_URL}/addToCart`, data, {
            params: {token: TOKEN}
        });
    }

    getCart(){
        return axios.get(`${BOOKSTORE_CART_URL}/getAllCart`);
    }

    deleteCartItem(cartID){
        return axios.delete(`${BOOKSTORE_CART_URL}/delete/${cartID}`);
    }

    updateBookQty(cart_id, cartDTO){
        return axios.put(`${BOOKSTORE_CART_URL}/updateQty/${cart_id}`, cartDTO);
    }
}

export default new CartService();