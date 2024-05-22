// team member data 
// do jumanji like you make characters like when they have strenghts and weaknesses
//or do minions and give them all traits
const teamMembers = [
    {
        name: 'Grouchy',
        age: 100,
        activePlayer: true,
        position: 'attack',
        strengths: 'fighting',
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
        strengths: 'smart',
        weaknesses: 'little patience',
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
        position: 'distracter',
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
        position: 'brains',
        strengths: 'smart',
        weaknesses: 'fighting',
        skills: ['reading', 'planning'],
        biography: 'Brainy is a really smart dude',
        imageURL:"brainy smurf.webp"
    },
    {
        name: 'Poet Smurf',
        age: 100,
        activePlayer: true,
        position: 'distracter',
        strengths: 'communicating',
        weaknesses: 'fighting',
        skills: ['writing', 'distracting'],
        biography: 'Messi is a really cool dude',
        imageURL:"poet.webp"
    },
    {
        name: 'Jokey Smurf',
        age: 100,
        activePlayer: true,
        position: 'distracter',
        strengths: 'smart',
        weaknesses: 'thinking',
        skills: ['pranking', 'laughing'],
        biography: 'Jokey is a really funny smurf',
        imageURL:"jokey.webp"
    },
    {
        name: 'Papa Smurf',
        age: 542,
        activePlayer: true,
        position: 'leader',
        strengths: 'leading',
        weaknesses: 'fighting',
        skills: ['being a leader', 'communication'],
        biography: 'Papa is a really cool smurf',
        imageURL:"Papa.webp"
    },
    {
        name: 'Clumsy',
        age: 100,
        activePlayer: true,
        position: 'back up',
        strengths: 'cheering',
        weaknesses: 'thinking',
        skills: ['funny', 'smart'],
        biography: 'Clumsy is a really clumbsy smurf',
        imageURL:"Clumbsy.webp"
    },
    {
        name: 'Narrator',
        age: 100,
        activePlayer: true,
        position: 'bystander',
        strengths: 'communicating',
        weaknesses: 'fighting',
        skills: ['lets everyone know whats happening', 'communication'],
        biography: 'Narrarator is a really cool smurf',
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
            case 'distracter':
                positionColor = "orange"
                break
            case 'attack':
                positionColor = "pink"
                break
            case 'spy':
                positionColor = "blue"
                break
            case 'bystander':
                positionColor = "red"
                break
            case 'back up':
                    positionColor = "red"
                    break
            case 'leader':
                     positionColor = "red"
                        break
            case 'brains':
                            positionColor = "red"
                               break
        }

        let strengthsColor

        switch (member.strengths.toLowerCase()) {
            case 'communicating':
                strengthsColor = "blue"
                break
            case 'leading':
                strengthsColor = "green"
                break
            case 'cheering':
                strengthsColor = "orange"
                break
            case 'cheering':
                strengthsColor = "orange"
                break
            case 'smart':
                    strengthsColor = "orange"
                    break
            case 'distracting':
                        strengthsColor = "orange"
                        break
            case 'fighting':
                        strengthsColor = "orange"
                        break
        }

        let weaknessesColor 

        switch (member.weaknesses.toLowerCase()) {
            case 'fighting':
                weaknessesColor = "red"
                break
            case 'sensitive':
                    weaknessesColor = "orange"
                    break
            case 'thinking':
                weaknessesColor = "blue"
                break
            case 'smart':
                    weaknessesColor = "green"
                    break
            case 'Gargamel hates her specifically':
                        weaknessesColor = "pink"
                        break
        case 'little patience':
                            weaknessesColor = "red"
                            break
        }
 
        let skillsColor
        switch (member.weaknesses.toLowerCase()) {
            skillsColor = "red"
            break
        }







        let ageColor

        switch (member.strengths.toLowerCase()) {
            case 100:
                ageColor = "green"
                break
             case 542:
                    ageColor = "blue"
                    break
            
        }


        

        // Declare ageColor variable before the switch statement
        let activePlayerColor;

        // Switch statement to assign colors based on age
        switch (member.activePlayer) {
            case 'true':
                Color = "green";
                break;
            case 'false':
                Color = "red";
                break;
            
        }

        // Now ageColor will have a value based on the switch case, so you can safely use it
        card.innerHTML = `
    <div class="card">
    <img src="${member.imageURL}" class="image-fluid">
        <div class="card-header">
            ${member.name}
        </div>
        <div id="cardBody" class="card-body" style="background-color: ${member.activePlayer};">
            <p style="color: ${positionColor};"><strong>Position</strong> ${member.position}</p>
            <p style="color: ${ageColor};"><strong>Age:</strong> ${member.age}</p>
            <p style="color: ${strengthsColor};"><strong>Strengths:</strong> ${member.strengths}</p>
            <p style="color: ${weaknessesColor};"><strong>Weaknesses:</strong> ${member.weaknesses}</p>
            <p style="color: ${skillsColor};"><strong>Weaknesses:</strong> ${member.skills}</p>



        </div>
    </div>
`;


        teamCardsContainer.appendChild(card)


    });

}

window.onload = generateTeamCards()