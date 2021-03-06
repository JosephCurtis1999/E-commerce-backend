const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include:[
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      },
    ]
  })
  .then(dbTagdata => res.json(dbTagdata))
  .catch(err=>{
    console.log(err);
    res.status(500).json(err);
  })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id:req.params.id
    },
    include: [
      {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    ]
  })
  .then(dbTagdata => {
    if (!dbTagdata) {
      res.status(404).json({ message: 'No tage found with this id'});
      return;
    }
    res.json(dbTagdata)
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json(err);
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(dbTagdata => res.json(dbTagdata))
  .catch(err=>{
    console.log(err);
    res.status(500).json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id:req.params.id
    },
  })
  .then(dbTagdata => {
    if (!dbTagdata[0]) {
      res.status(404).json({ message: 'No tag gound with this id'});
      return;
    }
    res.json(dbTagdata);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id:req.params.id
    },
  })
  .then(deleteSuccessful => {
    if (!deleteSuccessful) {
      res.status(404).json({ message: 'No category found with this id'});
      return;
    }

    res.status(204).send();
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
