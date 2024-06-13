const express = require("express");
const { addTransection, getAllTransection,editTransection,deleteTransection } = require("../controllers/transectionctrl");

//router object
const router = express.Router();

//routes
//add Transections POST method
router.post('/add-transection',addTransection)
//Edit Transections POST method
router.post('/edit-transection',editTransection)
//Edit Transections POST method
router.post('/edit-transection',editTransection) 
//Delete Transections POST method
router.post('/delete-transection',deleteTransection) 

//getTransection GET method
router.post("/get-transection",getAllTransection)

module.exports = router;