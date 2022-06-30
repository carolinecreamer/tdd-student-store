const express = require("express");
const router  = express.Router();
const StudentStore = require("../models/store");
const { NotFoundError } = require("../utils/errors")



router.get("/", async (req, res, next) => {
    try {
        const products = await StudentStore.listProducts();
        res.status(200).json({ products })
    } catch(err) {
        next(err)
    }
})

router.get("/orders", async (req, res, next) => {
    try {
        const purchases = await StudentStore.listPurchases();
        res.status(200).json({ purchases })
    } catch(err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const { shoppingCart } = req.body;
        const { user } = req.body;
        const purchase = await StudentStore.purchaseProducts(shoppingCart, user);
        res.status(201).json({ purchase, shoppingCart });
    } catch (err) {
        next(err);
    }
});
router.get("/:productId", async (req, res, next) => {
    try {
        const { productId } = req.params;
        const product = await StudentStore.fetchProductById(productId);
        if (!product) {
            next(new NotFoundError("Product not found"));
        }
        res.status(200).json({ product });
    }
    catch (err) {
        next(err);
    }
});


module.exports = router;