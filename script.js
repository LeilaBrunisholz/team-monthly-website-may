// team member data 
// do jumanji like you make characters like when they have strenghts and weaknesses
//or do minions and give them all traits
const teamMembers = [
    {
        name: 'Grouchy',
        age: 100,
        activePlayer: true,
        position: 'mid',
        strengths: 'ball control',
        weaknesses: 'heading ability',
        skills: ['dribbling', 'shooting', 'passing'],
        biography: 'Messi is a really cool dude'

    },
    {
        name: 'Nosey',
        age: 100,
        activePlayer: true,
        position: 'defender',
        strengths: 'ball control',
        weaknesses: 'heading ability',
        skills: ['dribbling', 'shooting', 'passing'],
        biography: 'Messi is a really cool dude'
    }, {
        name: 'Hefty',
        age: 100,
        activePlayer: true,
        position: 'forward',
        strengths: 'ball control',
        weaknesses: 'heading ability',
        skills: ['dribbling', 'shooting', 'passing'],
        biography: 'Messi is a really cool dude'
    },
    {
        name: 'Smurfette',
        age: 100,
        activePlayer: true,
        position: 'forward',
        strengths: 'ball control',
        weaknesses: 'heading ability',
        skills: ['dribbling', 'shooting', 'passing'],
        biography: 'Messi is a really cool dude'
    },
    {
        name: 'Brainy',
        age: 100,
        activePlayer: true,
        position: 'forward',
        strengths: 'ball control',
        weaknesses: 'heading ability',
        skills: ['dribbling', 'shooting', 'passing'],
        biography: 'Messi is a really cool dude'
    },
    {
        name: 'Poet Smurf',
        age: 100,
        activePlayer: true,
        position: 'forward',
        strengths: 'ball control',
        weaknesses: 'heading ability',
        skills: ['dribbling', 'shooting', 'passing'],
        biography: 'Messi is a really cool dude'
    },
    {
        name: 'Jokey Smurf',
        age: 100,
        activePlayer: true,
        position: 'forward',
        strengths: 'ball control',
        weaknesses: 'heading ability',
        skills: ['dribbling', 'shooting', 'passing'],
        biography: 'Messi is a really cool dude'
    },
    {
        name: 'Papa Smurf',
        age: 542,
        activePlayer: true,
        position: 'forward',
        strengths: 'ball control',
        weaknesses: 'heading ability',
        skills: ['dribbling', 'shooting', 'passing'],
        biography: 'Messi is a really cool dude'
    },
    {
        name: 'Clumsy',
        age: 100,
        activePlayer: true,
        position: 'forward',
        strengths: 'ball control',
        weaknesses: 'heading ability',
        skills: ['dribbling', 'shooting', 'passing'],
        biography: 'Messi is a really cool dude'
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
    <img src="${member.imageURL}" class="image fluid">
        <div class="card-header">
            ${member.name}
        </div>
        <div id="cardBody" class="card-body" style="background-color: ${ageColor};">
            <p style="color: ${positionColor};"><strong>Position</strong> ${member.position}</p>
        </div>
    </div>
`;


        teamCardsContainer.appendChild(card)


    });

}

window.onload = generateTeamCards()