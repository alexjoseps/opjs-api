import { Router } from 'express';
import { listCategories } from './app/useCases/categories/listCategories';

export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create categories
router.post('/categories', (req, res) => {
  res.send('ok');
});

// List products
router.get('/products', (req, res) => {
  res.send('ok');
});

// Create products
router.post('/products', (req, res) => {
  res.send('ok');
});

// List products by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('ok');
});

// List orders
router.get('/orders', (req, res) => {
  res.send('ok');
});

// Create orders
router.post('/orders', (req, res) => {
  res.send('ok');
});

// Update orders status
router.patch('/orders/:orderId', (req, res) => {
  res.send('ok');
});

// Delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('ok');
});
