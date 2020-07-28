const Operador = require("../models/operador");

const operadorCtrl = {};

operadorCtrl.getOperadores = async (req, res, next) => {
  const operadores = await Operador.find();
  res.json(operadores);
};

operadorCtrl.createOperador = async (req, res, next) => {
  const operador = new Operador({
    name: req.body.name,
    run: req.body.run
  });
  await operador.save();
  res.json({ status: "Operador created" });
};

operadorCtrl.getOperador = async (req, res, next) => {
  const { id } = req.params;
  const operador = await operador.findById(id);
  res.json(operador);
};


operadorCtrl.editOperador = async (req, res, next) => {
  const { id } = req.params;
  const operador = {
    name: req.body.name,
    run: req.body.run
  };
  await Operador.findByIdAndUpdate(id, { $set: operador }, { new: true });
  res.json({ status: "Operador Updated" });
};

operadorCtrl.deleteOperador = async (req, res, next) => {
  await Operador.findByIdAndRemove(req.params.id);
  res.json({ status: "Operador Deleted" });
};

module.exports = operadorCtrl;
