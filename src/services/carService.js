const { readJSON, writeJSON } = require('../db/db');
const { v4: uuidv4 } = require('uuid');

const getAllCars = () => readJSON('cars.json').cars;

const getCarById = (id) => getAllCars().find(car => car.id === id);

const addCar = (car) => {
  const data = readJSON('cars.json');
  const newCar = { id: uuidv4(), ...car };
  data.cars.push(newCar);
  writeJSON('cars.json', data);
  return newCar;
};

const updateCar = (id, updated) => {
  const data = readJSON('cars.json');
  const index = data.cars.findIndex(car => car.id === id);
  if (index === -1) return null;
  data.cars[index] = { ...updated, id };
  writeJSON('cars.json', data);
  return data.cars[index];
};

const patchCar = (id, partial) => {
  const data = readJSON('cars.json');
  const index = data.cars.findIndex(car => car.id === id);
  if (index === -1) return null;
  data.cars[index] = { ...data.cars[index], ...partial };
  writeJSON('cars.json', data);
  return data.cars[index];
};

const deleteCar = (id) => {
  const data = readJSON('cars.json');
  const index = data.cars.findIndex(car => car.id === id);
  if (index === -1) return false;
  data.cars.splice(index, 1);
  writeJSON('cars.json', data);
  return true;
};

module.exports = { getAllCars, getCarById, addCar, updateCar, patchCar, deleteCar };