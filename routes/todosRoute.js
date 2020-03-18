const express = require("express");
const router = express.Router();
const controller = require("../controllers/todoController");

/* GET users listing. */
router.get("/", function(req, res) {
  controller.getAll(req, res);
});

router.post("/", (req, res) => {
  controller.addTodo(req, res);
});

router.put("/:id", (req, res) => {
  controller.updateTodo(req, res);
});

router.delete("/:id", (req, res) => {
  controller.deleteTodo(req, res);
});

module.exports = router;
