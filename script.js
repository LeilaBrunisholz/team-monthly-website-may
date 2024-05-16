// team member data 
// do jumanji like you make characters like when they have strenghts and weaknesses
//or do minions and give them all traits
const teamMembers = [
    {
        name: 'Grouchy',
        age: 100,
        activePlayer: true,
        position: 'attack',
        strengths: 'low temper - helps him fight',
        weaknesses: 'little patience',
        skills: ['fighting', 'tough'],
        biography: 'Grouchy is a very angry smurf and puts his anger toward Gargamel',
        imageURL:"grouchy smurf.webp"

    },
    {
        name: 'Nosey',
        age: 100,
        activePlayer: true,
        position: 'spy',
        strengths: 'listening',
        weaknesses: 'getting caught spying',
        skills: ['gossiping', 'spying'],
        biography: 'Nosey is a really nosey smurf',
        imageURL:"nosey smurf.webp"
    }, {
        name: 'Hefty',
        age: 100,
        activePlayer: true,
        position: 'attack',
        strengths: 'fighting',
        weaknesses: 'sensitive',
        skills: ['fighting', 'lifting'],
        biography: 'Hefty is a really strong smurf',
        imageURL:"hefty.webp"
    },
    {
        name: 'Smurfette',
        age: 100,
        activePlayer: true,
        position: 'distraction',
        strengths: 'distracting',
        weaknesses: 'Gargamel hates her specifically',
        skills: ['karate', 'stalling'],
        biography: 'Smurfette is a really smart smurf',
        imageURL:"Smurfette.webp",
    },
    {
        name: 'Brainy',
        age: 100,
        activePlayer: true,
        position: 'brains behind defeating Gargamel',
        strengths: 'smart',
        weaknesses: 'fighting ability',
        skills: ['reading', 'planning'],
        biography: 'Brainy is a really smart dude',
        imageURL:"brainy smurf.webp"
    },
    {
        name: 'Poet Smurf',
        age: 100,
        activePlayer: true,
        position: 'make Gargamel distracted with poetry',
        strengths: 'writing poems',
        weaknesses: 'strength',
        skills: ['writing', 'distracting'],
        biography: 'Messi is a really cool dude',
        imageURL:"poet.webp"
    },
    {
        name: 'Jokey Smurf',
        age: 100,
        activePlayer: true,
        position: 'forward',
        strengths: 'ball control',
        weaknesses: 'heading ability',
        skills: ['dribbling', 'shooting', 'passing'],
        biography: 'Messi is a really cool dude',
        imageURL:"jokey.webp"
    },
    {
        name: 'Papa Smurf',
        age: 542,
        activePlayer: true,
        position: 'forward',
        strengths: 'ball control',
        weaknesses: 'heading ability',
        skills: ['dribbling', 'shooting', 'passing'],
        biography: 'Messi is a really cool dude',
        imageURL:"Papa.webp"
    },
    {
        name: 'Clumsy',
        age: 100,
        activePlayer: true,
        position: 'forward',
        strengths: 'ball control',
        weaknesses: 'heading ability',
        skills: ['dribbling', 'shooting', 'passing'],
        biography: 'Messi is a really cool dude',
        imageURL:"Clumbsy.webp"
    },
    {
        name: 'Narrator',
        age: 100,
        activePlayer: true,
        position: 'forward',
        strengths: 'ball control',
        weaknesses: 'heading ability',
        skills: ['dribbling', 'shooting', 'passing'],
        biography: 'Messi is a really cool dude',
        imageURL:"Narrator.webp"

    },
]

function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards')
    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')
        //style card based on position
        let positionColor

        switch (member.position.toLowerCase()) {
            case 'forward':
                positionColor = "red"
                break
            case 'mid':
                positionColor = "green"
                break
            case 'defender':
                positionColor = "orange"
                break
        }

        // Declare ageColor variable before the switch statement
        let ageColor;

        // Switch statement to assign colors based on age
        switch (member.age) {
            case 36:
                ageColor = "red";
                break;
            case 100:
                ageColor = "green";
                break;
            case 542:
                ageColor = "pink";
                break;
            default:
                ageColor = "red"; 
        }

        // Now ageColor will have a value based on the switch case, so you can safely use it
        card.innerHTML = `
    <div class="card">
    <img src="${member.imageURL}" class="image-fluid">
        <div class="card-header">
            ${member.name}
        </div>
        <div id="cardBody" class="card-body" style="background-color: ${ageColor};">
            <p style="color: ${positionColor};"><strong>Position</strong> ${member.position}</p>
            <p style="color: ${positionColor};"><strong>Age:</strong> ${member.age}</p>
        </div>
    </div>
`;


        teamCardsContainer.appendChild(card)


    });

}

window.onload = generateTeamCards()