const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [{model: Product}],
  }).then((categoryData) => {
    res.json(categoryData);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id, {
    include: [{model: Product}]},
    ).then((categoryData) => {
    res.json(categoryData);
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((category) => {
    res.status(200).json(category);
  })
  .then((categoryData) => res.status(200).json(categoryData))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((category) => {
    res.json(category)
  })
  .catch((err) => {
    res.status(400).json(err);
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  const categoryData = Category.destroy({
    where: {
      id: req.params.id
    }
  });

  if (!categoryData) {
    res.status(404).json({ message: 'No product found with this id' });
    return;
  }

  res.status(200).json('Deletion successful');
});

module.exports = router;
