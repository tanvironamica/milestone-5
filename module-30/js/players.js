function setPlayerStyle(player) {
    player.style.border = '1px solid red';
    player.style.borderRadius = '15px';
    player.style.margin = '10px';
    player.style.padding = '10px';
}

const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyle(player);
    // player.addEventListener('click', function() {
    //     player.style.backgroundColor = 'yellow';
    // })

}


function addPlayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ipsum modi totam obcaecati nihil eos velit vitae, officiis alias, consequatur, illo cupiditate sit. Obcaecati dolores molestiae voluptates maxime accusamus accusantium.</p>
`;
    setPlayerStyle(player);
    playersContainer.appendChild(player);
    // player.addEventListener('click', function() {
    //     player.style.backgroundColor = 'yellow';
    // })


}

document.getElementById('players').addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'yellow';
    } else {
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
})