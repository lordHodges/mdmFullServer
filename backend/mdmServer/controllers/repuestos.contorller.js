const Repuesto = require("../models/repuesto");

const repuestoCtrl = {};

repuestoCtrl.getRepuestos = async (req,res,nest) => {
const repuestos = await Repuesto.find();
res.json(repuestos);
};

repuestoCtrl.createRepuesto = async(req, res, next)=>{


};

module.exports = repuestoCtrl;