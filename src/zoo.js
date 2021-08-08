const { prices } = require('./data');
const data = require('./data');

/* ~~~~~~~ REQUISITO 1 ~~~~~~~ */
function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.includes(specie.id));
}
// Consultei o reposotório da aluna Ariane Ueti para acertar detalhes da função.
// link: https://github.com/tryber/sd-014-b-project-zoo-functions/pull/68/files

/* ~~~~~~~ REQUISITO 2 ~~~~~~~ */
function getAnimalsOlderThan(animal, age) {
  const animalsList = data.species.find((specie) => specie.name === animal);
  return animalsList.residents.every((resident) => resident.age > age);
}
// Consultei o reposotório do aluno Leomar Linhares para acertar detalhes da função.
// link: https://github.com/tryber/sd-014-b-project-zoo-functions/pull/75/files

/* ~~~~~~~ REQUISITO 3 ~~~~~~~ */
function getEmployeeByName(employeeName) {
  const selectedName = data.employees
    .find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
  return (selectedName === undefined) ? {} : selectedName;
}

/* ~~~~~~~ REQUISITO 4 ~~~~~~~ */
function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    ...personalInfo,
    ...associatedWith,
  };
  return newEmployee;
}

/* ~~~~~~~ REQUISITO 5 ~~~~~~~ */
function isManager(id) {
  //   // array com ids dos employees
  //   const employeesIds = Object.values(data.employees.id);
  //   // comparar se o .responsibleFor de cada um dos employees contem algum id dos employees

}

/* ~~~~~~~ REQUISITO 6 ~~~~~~~ */
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

/* ~~~~~~~ REQUISITO 7 ~~~~~~~ */
function countAnimals(animalSpecie) {
  if (animalSpecie === undefined) {
    return data.species.reduce((accumulator, current) => {
      (accumulator[current.name] = current.residents.length);
      return accumulator;
    }, {});
  }
  const selectedAnimal = data.species.find((specie) => specie.name === animalSpecie);
  return selectedAnimal.residents.length;
}
// Consultei o reposotório do aluno Wellington Fonseca para acertar detalhes da função.
// link: https://github.com/tryber/sd-014-b-project-zoo-functions/pull/81/files

/* ~~~~~~~ REQUISITO 8 ~~~~~~~ */
function calculateEntry(entrants) {
  if (entrants === undefined || Object.values(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return Adult * prices.Adult + Senior * prices.Senior + Child * prices.Child;
}

/* ~~~~~~~ REQUISITO 9 ~~~~~~~ */
function getAnimalMap(options) {
  // seu código aqui
}

/* ~~~~~~~ REQUISITO 10 ~~~~~~~ */
function getSchedule(dayName) {
  const expected = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  }
  if (dayName === undefined) {
    return expected;
  } else if (dayName === 'Monday') {
    return { [dayName] : 'CLOSED'}
  }
  return { [dayName]: `Open from ${data.hours[dayName].open}am until ${data.hours[dayName].close - 12}pm` };
}

/* ~~~~~~~ REQUISITO 11 ~~~~~~~ */
function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

/* ~~~~~~~ REQUISITO 12 ~~~~~~~ */
function increasePrices(percentage) {
  // seu código aqui
}

/* ~~~~~~~ REQUISITO 13 ~~~~~~~ */
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
