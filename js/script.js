/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

BONUS 3:
Permettere l'aggiunta di un nuovo membro del team

Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!


DATI PER ESERCIZIO
Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	        Chief Editor	                angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	        Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	        Developer	                 scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	         barbara-ramos-graphic-designer.jpg
*/

//Creo un array di object 

const team = [
  {
    name: 'Wayne',
    surname: 'Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angela',
    surname: 'Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg'
  },
  {
    name: 'Walter',
    surname: 'Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg'
  },
  {
    name: 'Angela',
    surname: 'Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg'
  },
  {
    name: 'Scott',
    surname: 'Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg'
  },
  {
    name: 'Barbara',
    surname: 'Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg'
  }
];
console.log(team);

const ulEl = document.querySelector('div');
console.log(ulEl);

for (let value of team) {
  const liEl = document.createElement('div');
  console.log(liEl);
  liEl.classList.add('card', 'bg-card', 'rounded-top-4');
  liEl.innerHTML = `<img class="img-fluid rounded-4" src="img/${value.image}">
  <h4 class="text-center">${value.name} ${value.surname}</h4>
  <h5 class="text-center">${value.role}</h5>`;
  ulEl.appendChild(liEl);
};

const Submitbtn = document.querySelector('.btn.btn-primary');
console.log(Submitbtn);

Submitbtn.addEventListener('click', (e)=>{
  e.preventDefault();
  addNewMember();
});

function addNewMember(){
  const nameValue = document.getElementById('name').value;
  const surnameValue = document.getElementById('surname').value;
  const roleValue = document.getElementById('role').value;
  
  const newMember = {
    name: nameValue,
    surname: surnameValue,
    role: roleValue,
    image: 'avatar_1.jpg'
  };
  team.push(newMember);
  const newliEl = document.createElement('div');
  console.log(newliEl);
  newliEl.classList.add('card', 'bg-card', 'rounded-top-4');
  
  newliEl.innerHTML = `
  <img class="img-fluid rounded-4" src="img/${newMember.image}">
  <h4 class="text-center">${newMember.name} ${newMember.surname}</h4>
  <h5 class="text-center">${newMember.role}</h5>
  `;
  ulEl.appendChild(newliEl);
};