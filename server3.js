const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
// let ItemId = 4

app.use(bodyParser.json());


let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' }
];

// GET method to retrieve all items
app.get('/items', (req, res) => {
  res.json(items);
});

// GET method to retrieve a single item by id
app.get('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(item => item.id === id);
  if (!item) {
    res.status(404).send('Item not found');
  } else {
    res.json(item);
  }
});

// POST method to add a new item
app.post('/items', (req, res) => {
  const newItem = req.body;
//   Item.id = ItemId++;
  items.push(newItem);
  res.status(201).json(newItem);
});

// DELETE method to remove an item by id
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter(item => item.id !== id);
  res.status(200).send('Item deleted');
});

// PATCH method to update an item by id
// app.patch('/items/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const updatedItem = req.body;
//   items = items.map(item => {
//     if (item.id === id) {
//       return { ...item, ...updatedItem };
//     }
//     return item;
//   });
//   res.status(200).json(items.find(item => item.id === id));
// });
app.patch('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedItem = req.body;
    const itemIndex = items.findIndex(item => item.id === id);
  
    if (itemIndex === -1) {
      res.status(404).send('Item not found');
    } else {
      items[itemIndex] = { ...items[itemIndex], ...updatedItem };
      res.status(200).json(items[itemIndex]);
    }
  });
  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
