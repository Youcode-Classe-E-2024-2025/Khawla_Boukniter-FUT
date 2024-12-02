import {data} from './data.js';

    let dataPlayer = JSON.parse(localStorage.getItem('dataPlayer')) || data.players;
    // localStorage.setItem('dataPlayer', JSON.stringify(dataPlayer));

window.onload = () => {
    updateFormation("3-5-2");
};

const formations = {
    "3-5-2": [
        { top: "-7rem", left: "auto" },
        { top: "-5rem", left: "-2rem" },
        { top: "-6rem", left: "auto" },
        { top: "-3rem", left: "auto" },
        { top: "-6rem", left: "auto" },
        { top: "-3rem", left: "auto" },
        { top: "-6rem", left: "auto" },
        { top: "-4rem", left: "auto" },
        { top: "-5rem", left: "auto" },
        { top: "-4rem", left: "auto" },
        { top: "-4rem"},
    ],
    "3-4-3": [
        { top: "-4rem", left: "auto" },
        { top: "-4rem", left: "auto" },
        { top: "-6rem", left: "auto" },
        { top: "-3rem", left: "auto" },
        { top: "-18rem", left: "auto" },
        { top: "-3rem", left: "auto" },
        { top: "-6rem", left: "auto" },
        { top: "-4rem", left: "auto" },
        { top: "-5rem", left: "auto" },
        { top: "-4rem", left: "auto" },
        { top: "-4rem"},
    ],
    "4-2-4": [
        { top: "-6rem", left: "8rem" },
        { top: "-4rem", left: "8rem" },
        { top: "-16rem", left: "2rem" },
        { top: "-4rem", left: "-auto" },
        { top: "-18rem", left: "10rem" },
        { top: "-4rem", left: "auto" },
        { top: "6rem", left: "-1rem" },
        { top: "-7rem", left: "-4rem" },
        { top: "-3rem", left: "-11rem" },
        { top: "-3rem", left: "-12rem" },
        { top: "-5rem"},
    ],
    "5-2-3": [
        { top: "-6rem", left: "17rem" },
        { top: "-4rem", left: "4rem" },
        { top: "-16rem", left: "6rem" },
        { top: "-4rem", left: "auto" },
        { top: "5rem", left: "auto" },
        { top: "-4rem", left: "auto" },
        { top: "6rem", left: "-1rem" },
        { top: "-7rem", left: "-4rem" },
        { top: "-3rem", left: "-13rem" },
        { top: "-3rem", left: "-10rem" },
        { top: "-5rem"},
    ],
    "5-3-2": [
        { top: "6rem", left: "17rem" },
        { top: "-5rem", left: "-3rem" },
        { top: "-17rem", left: "14rem" },
        { top: "-5rem", left: "-6rem" },
        { top: "5rem", left: "auto" },
        { top: "-5rem", left: "6rem" },
        { top: "6rem", left: "-1rem" },
        { top: "-7rem", left: "-4rem" },
        { top: "-3rem", left: "-13rem" },
        { top: "-3rem", left: "-10rem" },
        { top: "-5rem"},
    ],
    "5-4-1": [
        { top: "-6rem", left: "17rem" },
        { top: "4rem", left: "4rem" },
        { top: "-8rem", left: "6rem" },
        { top: "-5rem", left: "4rem" },
        { top: "5rem", left: "auto" },
        { top: "-5rem", left: "-4rem" },
        { top: "6rem", left: "-1rem" },
        { top: "-6rem", left: "-4rem" },
        { top: "-3rem", left: "-13rem" },
        { top: "-3rem", left: "-10rem" },
        { top: "-5rem"},
    ],
};

function updateFormation(selectedFormation) {
    const positions = formations[selectedFormation];
    const cards = document.querySelectorAll('.player-cards');

    cards.forEach((card, index) => {
        if (positions[index]) {
            card.style.top = positions[index].top;
            card.style.left = positions[index].left;
            card.style.visibility = "visible";
        } else {
            card.style.visibility = "hidden";
        }
    });
}

const formationBtn = document.querySelector('.formation-btn');
const formationOptions = document.querySelector('.formation-options');
const options = document.querySelectorAll('.option');


options.forEach(option => {
    option.addEventListener('click', () => {
        options.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        formationBtn.textContent = option.textContent;
        formationOptions.style.display = "none";
        updateFormation(option.textContent);
    });
});

formationBtn.addEventListener('click', () => {
    document.querySelector('.formation-options').classList.toggle('hidden');
    formationOptions.style.display = formationOptions.style.display === "grid" ? "none" : "grid";
});

document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', () => {
        option.classList.add('selected');
        document.querySelectorAll('.option').forEach(opt => {
            if (opt !== option) {
                opt.classList.remove('selected');
            }
        });
        document.querySelector('#option').textContent = option.textContent;
        document.querySelector('.formation-options').classList.add('hidden');
    });
});

const addBtn = document.querySelectorAll('.player-cards');
let selectedPlaceholder;
let selectedPlayers = [];

function playersList() {
             const btn = this;
            console.log("btn");
            selectedPlaceholder = btn;

            selectedPlayers = [...document.querySelectorAll('.selectedPlayer')];
            const playersEnTerrain = selectedPlayers.map(player => player.getAttribute('data-id'));
            const playersInChang = changements.map(player => player.id);
            console.log(playersEnTerrain);
            
            const filteredDataPlayer = dataPlayer.filter(player => !playersEnTerrain.includes(player.id.toString()) && !playersInChang.includes(player.id));
            console.log(filteredDataPlayer);
            console.log(dataPlayer);
            
            
            
            document.querySelector('.players').classList.remove('absolute', 'top-[16%]', 'w-[64%]', 'p-[2.2rem]', 'rounded', 'bg-[#1e1e1ecc]');
            document.querySelector('.players').classList.toggle('hidden');
            document.querySelector('.players').innerHTML = '';
            const container = document.createElement('div');
            container.classList.add('players-list', 'flex', 'flex-wrap', 'justify-center');

            filteredDataPlayer.forEach(player => {
            const playerCard = document.createElement('div');
            playerCard.setAttribute('id', player.id);
            playerCard.setAttribute("onclick", `selectPlayer(${player.id})`);

            playerCard.classList.add('player-cards', 'bench-reserver-wrapper', 'non-draggable-images', 'm-8', 'w-fit', 'flex', 'gap-6', 'flex-wrap', 'justify-evenly', 'relative');
            playerCard.innerHTML = `
                                    <div class="bench-con flex flex-wrap gap-3">
                                        <div class="slot relative text-center h-48 w-36">
                                            <button class="cardbutton button-reset" aria-label="Card Button">
                                                <img class="placeholder-img placeholder-enable-hover-shadow" src="https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png">
                                                <div class="slot absolute left-1/2 top-[65%]" style="translate: -50% -50%">
                                                    <img src="${player.photo}" alt="${player.name}">
                                                    <div class="player-info">
                                                        <span style="font-size: smaller">${player.name}</span>
                                                        <p>${player.position}</p>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                
                
            `;
            container.appendChild(playerCard);
            document.querySelector('.players').appendChild(container);
            });
    
}

addBtn.forEach(btn => {
    btn.addEventListener('click', playersList);
});

window.selectPlayer = function selectPlayer(id) {
    console.log(selectedPlaceholder);
    
    const player = data.players.find(player => player.id == id);
    selectedPlaceholder.innerHTML = `
        <div class="selectedPlayer bench-con flex flex-wrap gap-3" data-id="${id}">
            <div class="slot relative text-center h-72 w-36">
                <button class="cardbutton button-reset" aria-label="Card Button">
                    <img class="placeholder-img placeholder-enable-hover-shadow" src="https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png">
                    <div class="slot absolute left-1/2 top-[40%]" style="translate: -50% -50%">
                        <img src="${player.photo}" alt="${player.name}">
                        <div class="player-info">
                            <span style="font-size: smaller">${player.name}</span>
                            <p>${player.position}</p>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    `;
    document.querySelector('.players').classList.toggle('hidden');
    console.log(player);
}

let changements = [];
function displayChangements() {
        const container = document.querySelector('.changements');
        container.innerHTML = '';
        changements.forEach(player => {
            const playerCard = document.createElement('div');
    
            playerCard.classList.add('player-cards', 'bench-reserver-wrapper', 'non-draggable-images', 'w-fit', 'flex', 'gap-6', 'flex-wrap', 'justify-evenly', 'relative');
            playerCard.innerHTML = `
                                    <div class="bench-con flex flex-wrap gap-3">
                                        <div class="slot relative text-center h-44 w-24">
                                            <button class="cardbutton button-reset" aria-label="Card Button">
                                                <img class="placeholder-img placeholder-enable-hover-shadow" src="https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png">
                                                <div class="slot absolute left-1/2 top-[40%]" style="translate: -50% -50%">
                                                    <img src="${player.photo}" alt="${player.name}" >
                                                    <div class="player-info">
                                                        <span style="font-size: smaller">${player.name}</span>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
            `;
            container.appendChild(playerCard);
            playerCard.addEventListener('click', function() {
                changements = changements.filter(p => p.id !== player.id);
                displayChangements();
            });
        });
        if (changements.length < 12) {
            document.querySelector('.add-chang').classList.remove('hidden');
            

        //     document.querySelector('.add-chang').addEventListener('click', function() {
        //         // document.querySelector(".players").classList.toggle('hidden');
        //         const container = document.createElement('div');
        //         container.classList.add('players-list', 'flex', 'gap-5', 'flex-wrap', 'justify-center');
        
        //         document.querySelector('.players').innerHTML = '<h3 class="text-center mb-10">Players</h3>';
        //         document.querySelector('.players').classList.add('absolute', 'top-[10.3%]', 'w-[64%]', 'p-[2.2rem]', 'rounded', 'bg-[#1e1e1ecc]');
        //         document.querySelector('.players').classList.remove('hidden');
        
        //         const playersInChang = changements.map(player => player.id);
        //         const filteredDataPlayer = dataPlayer.filter(player => !playersInChang.includes(player.id));
        
        //         filteredDataPlayer.forEach(player => {
        //             const playerCard = document.createElement('div');
        //             playerCard.setAttribute('id', player.id);
        
        //             playerCard.classList.add('player-cards', 'bench-reserver-wrapper', 'non-draggable-images', 'w-fit', 'flex', 'gap-6', 'flex-wrap', 'justify-evenly', 'relative');
        //             playerCard.innerHTML = `
        //                 <div class="bench-con flex flex-wrap gap-3">
        //                     <div class="slot relative text-center h-64 w-36">
        //                         <button class="cardbutton button-reset" aria-label="Card Button">
        //                             <img class="placeholder-img placeholder-enable-hover-shadow" src="https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png">
        //                             <div class="slot absolute left-1/2 top-[47%]" style="translate: -50% -50%">
        //                                 <img src="${player.photo}" alt="${player.name}">
        //                                 <div class="player-info">
        //                                     <span style="font-size: smaller">${player.name}</span>
        //                                     <p>${player.position}</p>
        //                                 </div>
        //                             </div>
        //                         </button>
        //                     </div>
        //                 </div>
        //             `;
        //             container.appendChild(playerCard);
        //             document.querySelector('.players').appendChild(container);
        
        //             playerCard.addEventListener('click', function () {
        //                 changements.push(player);
        //                 console.log(changements);
        //                 displayChangements();
        //                 this.remove();
        //             });
        //         });
        //     });
        }
    
    if (changements.length === 12) {
        document.querySelector('.add-chang').classList.add('hidden');
        document.querySelector('.players').classList.add('hidden');
    }
}

document.querySelector('.add-chang').addEventListener('click', addChangements);          

function addChangements() {
    document.querySelector(".players").classList.toggle('hidden');
    const container = document.createElement('div');
    container.classList.add('players-list', 'flex', 'gap-5', 'flex-wrap', 'justify-center');
    console.log(document.querySelector('.add-chang'));
    
        document.querySelector('.players').innerHTML = '<h3 class="text-center mb-10">Players</h3>';
        document.querySelector('.players').classList.add('absolute', 'top-[16%]', 'w-[64%]', 'p-[2.2rem]', 'rounded', 'bg-[#1e1e1ecc]');
            
            selectedPlayers = [...document.querySelectorAll('.selectedPlayer')];
            const playersEnTerrain = selectedPlayers.map(player => player.getAttribute('data-id'));

            const filteredDataPlayer = dataPlayer.filter(player => !playersEnTerrain.includes(player.id.toString()));
            filteredDataPlayer.forEach(player => {
                const playerCard = document.createElement('div');
                playerCard.setAttribute('id', player.id);

                playerCard.classList.add('player-cards', 'bench-reserver-wrapper', 'non-draggable-images', 'w-fit', 'flex', 'gap-6', 'flex-wrap', 'justify-evenly', 'relative');
                playerCard.innerHTML = `
                                        <div class="bench-con flex flex-wrap gap-3">
                                            <div class="slot relative text-center h-64 w-36">
                                                <button class="cardbutton button-reset" aria-label="Card Button">
                                                    <img class="placeholder-img placeholder-enable-hover-shadow" src="https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png">
                                                    <div class="slot absolute left-1/2 top-[47%]" style="translate: -50% -50%">
                                                        <img src="${player.photo}" alt="${player.name}">
                                                        <div class="player-info">
                                                            <span style="font-size: smaller">${player.name}</span>
                                                            <p>${player.position}</p>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                `;
                container.appendChild(playerCard);
                document.querySelector('.players').appendChild(container);
                playerCard.addEventListener('click', function() {
                    changements.push(player);
                    console.log(changements);
                    displayChangements();
                    this.remove()
                });
            });

}

const resetTeamButton = document.getElementById('reset-team');

resetTeamButton.addEventListener('click', () => {
    const playerCards = document.querySelectorAll('.selectedPlayer');

    playerCards.forEach(card => {
        const parentSlot = card.parentElement;

        const img = parentSlot.querySelector('img');
        if (img) {
            img.style.opacity = "0";

            setTimeout(() => {
                img.src = 'https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png'; // Réinitialiser l'image
                img.style.opacity = "1"; // Réaugmenter l'opacité
            }, 500);
        }

        parentSlot.innerHTML = `
                                <div class="bench-con flex flex-wrap gap-3">
                                    <div class="slot relative text-center h-72 w-36">
                                        <button class="cardbutton button-reset" aria-label="Card Button">
                                            <img class="placeholder-img placeholder-enable-hover-shadow" src="https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png">
                                            <div class="add-icon absolute left-1/2 top-[40%] flex justify-center items-center" style="translate: -50% -50%">
                                                <span class="display-contents">
                                                    <svg class="" viewBox="0 0 36 42" fill="none" width="36">
                                                        <path d="M18.6275 41.711L18.3137 41.0298C18.1146 41.1215 17.8854 41.1215 17.6863 41.0298L17.3726 41.711L17.6863 41.0298L1.18627 33.4311C0.920355 33.3087 0.75 33.0427 0.75 32.7499V8.7248C0.75 8.42506 0.928458 8.15411 1.20383 8.03575L17.7038 0.943648C17.8929 0.862375 18.1071 0.862375 18.2962 0.943648L34.7962 8.03575C35.0715 8.15411 35.25 8.42506 35.25 8.7248V32.7499C35.25 33.0427 35.0796 33.3087 34.8137 33.4311L18.3137 41.0298L18.6275 41.711Z" stroke="currentColor" stroke-width="1.5"></path>
                                                    </svg>
                                                </span>
                                                <div class="absolute text-3xl">+</div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
        `;
    });
    
    document.querySelector('.changements').innerHTML = '';

    changements = [];
    selectedPlayers = [];
    
    alert("L'équipe a été réinitialisée avec succès !");
});
