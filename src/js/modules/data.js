

const load_products = [
    {"name":"Nike", "price": 100.50, "priceDown": 45.00, "boxSale": 25, "sex": "man", "images": "7_shoe_item_1.png"},
    {"name":"Adidas", "price": 180.50, "priceDown": 25.00, "boxSale": 15, "sex": "man", "images": "7_shoe_item_1.png"},
    {"name":"Asics", "price": 150.50, "priceDown": 35.00, "boxSale": 20, "sex": "man", "images": "7_shoe_item_1.png"},
    {"name":"Nike", "price": 100.50, "priceDown": 45.00, "boxSale": 25, "sex": "man", "images": "7_shoe_item_1.png"},
    {"name":"Adidas", "price": 180.50, "priceDown": 25.00, "boxSale": 15, "sex": "man", "images": "7_shoe_item_1.png"},
    {"name":"Reebok", "price": 150.50, "priceDown": 35.00, "boxSale": 20, "sex": "man", "images": "7_shoe_item_1.png"},
    {"name":"Nike", "price": 100.50, "priceDown": 45.00, "boxSale": 25, "sex": "man", "images": "7_shoe_item_1.png"},
    {"name":"Adidas", "price": 180.50, "priceDown": 25.00, "boxSale": 15, "sex": "man", "images": "7_shoe_item_1.png"},
    {"name":"Adidas", "price": 180.50, "priceDown": 25.00, "boxSale": 15, "sex": "woman", "images": "7_shoe_item_1.png"},

    {"name":"Adidas", "price": 180.50, "priceDown": 25.00, "boxSale": 15, "sex": "woman", "images": "7_shoe_item_1.png"},
    {"name":"Asics", "price": 150.50, "priceDown": 35.00, "boxSale": 20, "sex": "woman", "images": "7_shoe_item_1.png"},
    {"name":"Nike", "price": 100.50, "priceDown": 45.00, "boxSale": 25, "sex": "woman", "images": "7_shoe_item_1.png"},
    {"name":"Reebok", "price": 180.50, "priceDown": 25.00, "boxSale": 15, "sex": "woman", "images": "7_shoe_item_1.png"},
    {"name":"Adidas", "price": 180.50, "priceDown": 25.00, "boxSale": 15, "sex": "woman", "images": "7_shoe_item_1.png"},

];


let products = [];

export class Data {

    static loadProducts() {
        return products = load_products;
    }

    static getProducts() {
        return products;
    }
}