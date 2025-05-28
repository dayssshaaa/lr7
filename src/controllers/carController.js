const carService = require('../services/carService');

exports.getAll = (req, res) => res.json(carService.getAllCars());

exports.getById = (req, res) => {
  const car = carService.getCarById(req.params.id);
  if (!car) return res.status(404).send('Car not found');
  res.json(car);
};

exports.create = (req, res) => {
  const newCar = carService.addCar(req.body);
  res.status(201).json(newCar);
};

exports.update = (req, res) => {
  const updated = carService.updateCar(req.params.id, req.body);
  if (!updated) return res.status(404).send('Car not found');
  res.json(updated);
};

exports.patch = (req, res) => {
  const patched = carService.patchCar(req.params.id, req.body);
  if (!patched) return res.status(404).send('Car not found');
  res.json(patched);
};

exports.delete = (req, res) => {
  const deleted = carService.deleteCar(req.params.id);
  if (!deleted) return res.status(404).send('Car not found');
  res.sendStatus(204);
};