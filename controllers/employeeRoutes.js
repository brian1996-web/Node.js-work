const express = require("express");
const Employee = require("../models/employeeModel");
const router = express.Router();

router.get("/employeeform", (req, res) =>
 {
  res.render("employee.pug");
});

router.post('/regemployee', async(req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.redirect("/api/employeeform"); //path is to redirect,// render is for file
    console.log(req.body); //
  } catch (error) {
    res.status (400).render("employee");
    console.log(error);
  }
});



router.get("/list", async (req, res) => {
  try {
    let items = await Employee.find();
    res.render("employeelist.pug",{employees: items});
  }
  catch (error) {
    return res.status(400).send({message: "Sorry could not get employees"});
    console.log(error);
  }
})  
router.post("/employee/delete", async(req, res) => {
  try {
    await Employee.deleteOne({_id: req.body.id});
    res.redirect("back");
  }
  catch (error) {
    res.status(400).render("unable to delete item from database");
  }
})
module.exports = router;