const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.includes(specie.id));
}
// Consultei o reposotório da aluna Ariane Ueti para acertar detalhes da função.
// link: https://github.com/tryber/sd-014-b-project-zoo-functions/pull/68/files

function getAnimalsOlderThan(animal, age) {
  const animalsList = data.species.find((specie) => specie.name === animal);
  return animalsList.residents.every((resident) => resident.age > age);
}
// Consultei o reposotório do aluno Leomar Linhares para acertar detalhes da função.
// link: https://github.com/tryber/sd-014-b-project-zoo-functions/pull/75/files

function getEmployeeByName(employeeName) {
  const selectedName = data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return (selectedName === undefined) ? {} : selectedName;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmployee;
}

function isManager(id) {
  //   // array com ids dos employees
  //   const employeesIds = Object.values(data.employees.id);
  //   // comparar se o .responsibleFor de cada um dos employees contem algum id dos employees

}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };

  data.employees.push(newEmployee);
  return data.employees;
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
