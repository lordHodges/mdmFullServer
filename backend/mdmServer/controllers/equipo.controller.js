const Equipo = require("../models/equipo");

const equipoCtrl = {};

equipoCtrl.getEquipos = async (req, res, next) => {
  const equipos = await Equipo.find();
  res.json(equipos);
};


equipoCtrl.createEquipo = async (req, res, next) => {
  const equipo = new Equipo({
    name: req.body.name,
    marca: req.body.marca,
    modelo: req.body.modelo,
    serie: req.body.rerie,
    fechaIgreso: req.body.fechaIngreso,
    localizacion: req.body.localizacion,
    tipo: req.body.tipo


  });
  await equipo.save();
  res.json({ status: "Equipo created" });
};

equipoCtrl.getEquipo = async (req, res, next) => {
  const { id } = req.params;
  const equipo = await equipo.findById(id);
  res.json(equipo);
};
equipoCtrl.getEquipoMarca = async (req, res, next) => {
  const { marca } = req.params;
  const equipo = await equipo.find(marca);
  res.json(equipo);
};


equipoCtrl.editEquipo = async (req, res, next) => {
  const { id } = req.params;
  const equipo = {
    name: req.body.name,
    marca: req.body.marca,
    modelo: req.body.modelo,
    serie: req.body.rerie,
    fechaIgreso: req.body.fechaIngreso,
    localizacion: req.body.localizacion,
    tipo: req.body.tipo
  };
  await Equipo.findByIdAndUpdate(id, { $set: equipo }, { new: true });
  res.json({ status: "Equipo Updated" });
};

equipoCtrl.deleteEquipo = async (req, res, next) => {
  await Equipo.findByIdAndRemove(req.params.id);
  res.json({ status: "Equipo Deleted" });
};


module.exports = equipoCtrl;
