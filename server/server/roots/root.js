const express = require('express')
const router = express.Router();
const app = express()
const controller = require('../controllers/controller');


router.get('/', controller.getUsers)

router.post('/pst',controller.createUser)

router.put('/pt',controller.updateUser)

router.delete('/dl',controller.deleteUser)

router.get("/getAllTodos",controller.listAllTodos)
router.post("/todos",controller.createNewTodo);
router.patch("/todos/:id",controller.updateTodo);
router.delete("/todos/:id",controller.deleteTodo);






module.exports = router;
