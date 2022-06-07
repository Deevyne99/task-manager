const express = require("express")
const router = express.Router()
const {getAllTask,createTask,updateTask,deleteTask,getSingleTask,} = require('../../controller/controller')


router.route('/').get(getAllTask).post(createTask)
router.route('/:id').patch(updateTask).delete(deleteTask).get(getSingleTask)

module.exports = router
