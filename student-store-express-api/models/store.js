const storage = require("../data/storage.js");
const { BadRequestError } = require("../utils/errors.js");

function findProductById(products, id) {
    if (typeof id == 'string') {
        return products.find((p) => p.id === parseInt(id, 10));
    }

    return products.find((product) => product.id === id);
}

const formatPrice = (amount) => `$${formatter.format(amount)}`;

class StudentStore {
    static listProducts() {
        return storage.get('products').value();
    }

    static fetchProductById(productId) {
        const product = storage
            .get('products')
            .find({ id: Number(productId) })
            .value();

        if (product) return product;

        throw new NotFoundError('No product found with that id.')
    }
    static purchaseProducts(cart, userInfo) {
        if (!cart || !Object.keys(cart).length) {
            throw new BadRequestError('No cart or items in cart found to checkout.');
        }

        if (!userInfo || !Object.keys(userInfo).length) {
            throw new BadRequestError('No user information found to checkout with.');
        }

        const products = storage.get('products').value();
        const subtotal = Store.calculateSubtotal(cart, products);
        const total    = Store.totalWithTax(subtotal);

        const receipt = Store.createReceipt({
            cart, subtotal, total, products, userInfo,
        });

        const purchase = {
            id: uuidv4(),
            name: userInfo.name,
            email: userInfo.email,
            total,
            receipt,
        };

        storage.get('purchases').push(purchase).write();
    }

   
}

module.exports = StudentStore;