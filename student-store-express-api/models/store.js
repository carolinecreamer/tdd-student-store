const {storage} = require("../data/storage.js");
const { BadRequestError, NotFoundError } = require("../utils/errors.js");

function findProductById(products, id) {
    if (typeof id == 'string') {
        return products.find((p) => p.id === parseInt(id, 10));
    }

    return products.find((product) => product.id === id);
}

class StudentStore {
    static listProducts() {
        return storage.get('products').value();
    }

    static listPurchases() {
        return storage.get('purchases').value();
    }
    
    static calculateSubtotal(shoppingCart) {
        let subtotal = 0;
        shoppingCart.forEach((item, idx) => {
            let product = this.fetchProductById(item.itemId);
            subtotal += (product.price * item.quantity);
        });
        return subtotal;
    }

    static totalWithTax(subtotal) {
        return (subtotal + (subtotal * 0.0825));
    }

    static createReceipt(shoppingCart, subtotal, total, products, user) {
        let receipt = ["Showing receipt for " + user.name + " available at " + user.email + ":",];
      

        shoppingCart.forEach((item, idx) => {
            receipt.push(item.quantity + " total " + item.name + " purchased at a cost of $" + 
        (this.fetchProductById(item.itemId).price) + " for a total cost of $" 
        + (item.quantity * this.fetchProductById(item.itemId).price),);
        });
        receipt.push("Before taxes, the subtotal was $" + subtotal,);
        receipt.push("After taxes and fees were applied, the total comes out to $" + total);
        
        return receipt;
    }

    static fetchProductById(productId) {
        const product = storage
            .get('products')
            .find({ id: Number(productId) })
            .value();

        if (product) return product;

        throw new NotFoundError('No product found with that id.')
    }

    static purchaseProducts(shoppingCart, user) {
        
        if (!shoppingCart || !Object.keys(shoppingCart).length) {
            throw new BadRequestError('No cart or items in cart found to checkout.');
        }

        if (!user || !Object.keys(user).length) {
            throw new BadRequestError('No user information found to checkout with.');
        }

        const products = storage.get('products').value();
        const subtotal = StudentStore.calculateSubtotal(shoppingCart);
        const total    = StudentStore.totalWithTax(subtotal).toFixed(2);
        const receipt = StudentStore.createReceipt(
            shoppingCart, subtotal, total, products, user
        );


        const purchase = {
            id: StudentStore.listPurchases().length,
            name: user.name,
            email: user.email,
            total: total,
            receipt: receipt,
        };

        

        storage.get('purchases').push(purchase).write();
        return purchase
    }

   
}

module.exports = StudentStore;