
const Employee = require('../models/Employee');

const employeesCtrl= { };

employeesCtrl.getEmployees = async  (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
};

employeesCtrl.createEmployee = async (req, res) => {
    const newEmployee = new Employee(req.body);

    await newEmployee.save();

    res.json({status: 'Employee created'});
};

employeesCtrl.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.send(employee);
};

employeesCtrl.editEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({status: 'Employee updated'})
};

employeesCtrl.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id)
    res.json({status: 'Employee deleted'})
};


module.exports = employeesCtrl;