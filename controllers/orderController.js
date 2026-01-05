const Order = require('../models/order');
const Product = require('../models/product');

exports.createOrder = async (req, res) => {
  const { productId, quantity, paymentMethod } = req.body;

  try {
    const product = await Product.findById(productId);
    if (!product || product.stock < quantity) {
      return res.status(400).json({ message: 'Product out of stock' });
    }

    const order = new Order({
      productId,
      quantity,
      totalPrice: product.price * quantity,
      paymentMethod
    });

    product.stock -= quantity;
    await product.save();
    await order.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Order failed' });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('productId');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};
