let statesObject = {
  'EE': 'Escolha seu estado',
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
}

function getStates() {
  for (let key in statesObject) {
    let states = document.querySelector("#input-uf");
    let option = document.createElement("option");
    option.innerHTML = statesObject[key];
    option.className = "states"
    option.value = key;
    states.appendChild(option);
  }
}
getStates();

let date = document.querySelector("#input-start-date");

let clearButton = document.querySelector("#clear-informations");

clearButton.addEventListener('click', clearInformations)

function clearInformations() {
  let names = document.querySelector("#input-name");
  let adress = document.querySelector("#input-adress");
  let cpf = document.querySelector("#input-cpf");
  let email = document.querySelector("#input-email");
  let city = document.querySelector("#input-city");
  let states = document.querySelector("#input-uf");
  let apartment = document.querySelector("#input-apartment");
  let house = document.querySelector("#input-house");
  let curriculum = document.querySelector("#input-curriculum");
  let position = document.querySelector("#input-position");
  let description = document.querySelector("#input-position-description");
  let date = document.querySelector("#input-start-date");

  let informations = [names, adress, cpf, email, city, states, apartment, house, curriculum, position, description, date];

  for (let key in informations) {
    informations[key].value = "";
    getStates();
  }
}