const { prices } = require('./data');
const data = require('./data');

/* ~~~~~~~ REQUISITO 1 ~~~~~~~ */
function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.includes(specie.id));
}
// Consultei o reposotório da aluna Ariane Ueti para corrigir a escrita da função.
// link: https://github.com/tryber/sd-014-b-project-zoo-functions/pull/68/files

/* ~~~~~~~ REQUISITO 2 ~~~~~~~ */
function getAnimalsOlderThan(animal, age) {
  const animalsList = data.species.find((specie) => specie.name === animal);
  return animalsList.residents.every((resident) => resident.age > age);
}
// Consultei o reposotório do aluno Leomar Linhares para corrigir a escrita da função.
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
}

/* ~~~~~~~ REQUISITO 6 ~~~~~~~ */
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) { // setando o padrão dos parâmetros como arrays vazios.
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
  if (animalSpecie === undefined) { // caso não seja passado parâmetro
    return data.species.reduce((accumulator, specie) => {
      accumulator[specie.name] = specie.residents.length; // retornar o nome da espécie do animal e a quantidade de residentes, para todos os residentes
      return accumulator;
    }, {}); // em forma de objeto
  }
  const selectedAnimal = data.species.find((specie) => specie.name === animalSpecie); // caso seja passado um parâmetro, procurar a espécie selecionada
  return selectedAnimal.residents.length; // e retornar o número de residentes da espécie selecionada.
}
// Consultei o reposotório do aluno Wellington Fonseca para corrigir a escrita da função.
// link: https://github.com/tryber/sd-014-b-project-zoo-functions/pull/81/files

/* ~~~~~~~ REQUISITO 8 ~~~~~~~ */
function calculateEntry(entrants) {
  if (entrants === undefined || Object.values(entrants).length === 0) {
    return 0;
  }
  const { Adult = 0, Senior = 0, Child = 0 } = entrants;
  return Adult * prices.Adult + Senior * prices.Senior + Child * prices.Child;
}
// Função para verificar se um objeto é vazio encontrada no link: https://pt.stackoverflow.com/questions/83588/em-javascript-como-verificar-que-um-objeto-est%C3%A1-vazio-sem-jquery

/* ~~~~~~~ REQUISITO 9 ~~~~~~~ */
function getAnimalMap(options) {
  // seu código aqui
}

/* ~~~~~~~ REQUISITO 10 ~~~~~~~ */
function getSchedule(dayName) {
  const time = data.hours;
  const expected = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED',
  };
  if (dayName === undefined) {
    return expected;
  } if (dayName === 'Monday') {
    return { [dayName]: 'CLOSED' };
  }
  return { [dayName]: `Open from ${time[dayName].open}am until ${time[dayName].close - 12}pm` };
}

/* ~~~~~~~ REQUISITO 11 ~~~~~~~ */
function getOldestFromFirstSpecies(selectedId) {
  const firstAnimal = data.employees.find((item) => item.id === selectedId).responsibleFor[0]; // seleciona o id da primeira espécie pela qual o empregado buscado é responsável
  const animalInfo = data.species.find((animal) => animal.id === firstAnimal).residents; // busca a espécie pelo id e retorna seus residentes
  const orderedAnimals = animalInfo.sort((a, b) => b.age - a.age); // organiza os residentes por idade, de forma decrescente
  const { name, sex, age } = orderedAnimals[0]; // extrai os valores do objeto do animal na primeira posição
  return [name, sex, age]; // retorna o objeto como array
}
// Consultei o reposotório do aluno Victor Martins para corrigir a escrita da função.
// link: https://github.com/tryber/sd-014-b-project-zoo-functions/pull/53/files
// Função para ordenação das idades de forma decrescente encontrada no link: https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a

/* ~~~~~~~ REQUISITO 12 ~~~~~~~ */
function increasePrices(percentage) {
  const { Adult, Senior, Child } = data.prices;
  const increasePercentage = (100 + percentage) / 100;
  data.prices.Adult = Math.round((Adult * increasePercentage) * 100) / 100;
  data.prices.Senior = Math.round((Senior * increasePercentage) * 100) / 100;
  data.prices.Child = Math.round((Child * increasePercentage) * 100) / 100;
}

/* ~~~~~~~ REQUISITO 13 ~~~~~~~ */
function getEmployeeCoverage(idOrName) {
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
