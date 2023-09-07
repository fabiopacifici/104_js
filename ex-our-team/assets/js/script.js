const team = [

  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },

  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg"
  },

  {
    name: "Walter Gordo",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg"
  },

  {
    name: "Angela Lope",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },

  {
    name: "Scott Estrad",
    role: "Developer",
    image: "scott-estrada-developer.jpg"
  },

  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg"
  },

];



const teamDomElement = document.querySelector('.team .row')
generateTeamCards(team, teamDomElement)


/**
 * Generate cards in a given dom element given a set of data
 * @param {Array} team Array of objects
 * @param {object} teamDomElement the dom element where insert the cards
 */
function generateTeamCards(team, teamDomElement) {
  teamDomElement.innerHTML = ''
  for (let i = 0; i < team.length; i++) {
    const memberObject = team[i];
    //console.log(memberObject);


    const markupElement = generateMemberMarkup(memberObject)
    console.log(markupElement);


    console.log(teamDomElement);
    teamDomElement.insertAdjacentHTML('beforeend', markupElement)

  }
}



/**
 * Ogni membro è caratterizzato dalle seguenti informazioni: name, role, image.
 * @param {object} member 
 * 
 */
function generateMemberMarkup(member) {
  

  return `
  <div class="col">
    <div class="card">
      <img src="${getImageFullPath(member.image)}" alt="">
      <div class="card-body">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
      </div>
    </div>
  </div>
  `


}


function getImageFullPath(img_name) {
  return `./assets/img/${img_name}`
}


document.querySelector('form').addEventListener('submit', addMember)

function addMember(e){
  e.preventDefault()

  console.log('add a team member');


  // read the inputs
  const memberName = document.getElementById('name').value
  const memberRole = document.getElementById('role').value
  const memberImage = document.getElementById('image').value


  console.log(memberRole, memberImage, memberImage);

  const newMember = {
    name: memberName,
    role: memberRole,
    image: memberImage
  }

  team.push(newMember)

  //console.log(team);

  generateTeamCards(team, teamDomElement)



}