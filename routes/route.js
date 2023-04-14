const express = require("express");
const router = express.Router();

const itemListController = require("../controllers/list");

router.post('/create', itemListController.createTodoItem);
router.get('/:userId/read', itemListController.getAllItems);
router.put('/update/:id', itemListController.updateTodoItem);
router.delete('/remove/:id', itemListController.deleteTodoItem);

module.exports = router;