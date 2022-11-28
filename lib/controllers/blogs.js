const { Router } = require('express');
const { Blog } = require('../models/Blog');

module.exports = Router()
  .get('/', async (req, res, next) => {
    try {
      const data = await Blog.getAll();
      res.json(data);
    } catch (error) {
      res.json({ message: error });
    }
  })
  .get('/:id', async (req, res, next) => {
    try {
      const data = await Blog.getById(req.params.id);
      await data.addComments();
      res.json(data);
    } catch (error) {
      res.json({ message: error });
    }
  });
