import {data} from './data.js';

document.addEventListener("DOMContentLoaded", () => {

    let dataPlayer = JSON.parse(localStorage.getItem('dataPlayer')) || data.players;
    localStorage.setItem('dataPlayer', JSON.stringify(dataPlayer));

    console.log(JSON.parse(localStorage.getItem('dataPlayer')));

    displayCard();
    

    console.log(dataPlayer);

    function displayCard() {
        const container = document.querySelector('.player-cards');
        

        dataPlayer.forEach((player, index) => {
            const card = createCard(player, index);
            container.appendChild(card);

            card.addEventListener('click', () => updateForm(index));
        });

        
    }

    function createCard(player, index) {
        const card = document.createElement('div');
                card.classList.add('fut-player-card', 'cursor-pointer');
                card.dataset.index = index;
                card.dataset.id = player.id;    
                card.style = "height: 18rem; width: 11rem;"

                card.innerHTML = `
                    <div class="player-card-top">
                        <div class="player-master-info">
                            <div class="player-rating" style="height: 15px;">
                                <span>${player.rating}</span>
                            </div>
                            <div class="player-position" style="height: 15px;">
                                <span style="font-size: smaller;">${player.position}</span>
                            </div>
                            <div class="player-nation">
                                <img src="${player.flag}" alt="${player.nationality}" draggable="false">
                            </div>
                            <div class="player-club">
                                <img src="${player.logo}" alt="${player.club}" draggable="false">
                            </div>
                        </div>
                        <div class="player-picture" style="height: fit-content;">
                            <img src="${player.photo}" alt="Messi" draggable="false">
                        </div>
                    </div>
                    <div class="player-card-bottom">
                        <div class="player-info">
                            <div class="player-name">
                                <span>${player.name}</span>
                            </div>
                            <div class="player-features">
                                <div class="player-features-col">
                                    <span>
                                        <div class="player-feature-value">${player.pace}</div>
                                        <div class="player-feature-title">PAC</div>
                                    </span>
                                    <span>
                                        <div class="player-feature-value">${player.shooting}</div>
                                        <div class="player-feature-title">SHO</div>
                                    </span>
                                    <span>
                                        <div class="player-feature-value">${player.passing}</div>
                                        <div class="player-feature-title">PAS</div>
                                    </span>
                                </div>
                                <div class="player-features-col">
                                    <span>
                                        <div class="player-feature-value">${player.dribbling}</div>
                                        <div class="player-feature-title">DRI</div>
                                    </span>
                                    <span>
                                        <div class="player-feature-value">${player.defending}</div>
                                        <div class="player-feature-title">DEF</div>
                                    </span>
                                    <span>
                                        <div class="player-feature-value">${player.physical}</div>
                                        <div class="player-feature-title">PHY</div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                card.addEventListener('click', () => {
                    document.querySelector('.player-form .fut-player-card').classList.add('hidden');
                    updatePlayer();
                });
                return card;        
    }

    function updateForm(index) {
        const updateBtn = document.querySelector('.btn-update');
        const deleteBtn = document.querySelector('.btn-delete');
        updateBtn.classList.remove('hidden');
        deleteBtn.classList.remove('hidden');
        document.querySelector('.btn').classList.add('hidden');
        
        const form = document.querySelector('.player-form');
        form.classList.toggle('hidden');
        document.querySelector('.cards').classList.toggle('blur');

        const player = dataPlayer[index];
        document.querySelector('#name').value = player.name;
        document.querySelector('#rating').value = player.rating;
        document.querySelector('#nationality').value = player.flag;
        document.querySelector('#position').value = player.position;
        document.querySelector('#club').value = player.club;
        document.querySelector('#pace').value = player.pace;
        document.querySelector('#logo').value = player.logo;
        document.querySelector('#shooting').value = player.shooting;
        document.querySelector('#passing').value = player.passing;
        document.querySelector('#dribbling').value = player.dribbling;
        document.querySelector('#defending').value = player.defending;
        document.querySelector('#physical').value = player.physical;
        document.querySelector('#image').value = player.photo;

        updateBtn.onclick = () => updatePlayer(index);
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deletePlayer(index);
        });
    }

    function updatePlayer(index) {
        const updatedPlayer = {
            name: document.querySelector('#name').value,
            rating: document.querySelector('#rating').value,
            flag: document.querySelector('#nationality').value,
            position: document.querySelector('#position').value,
            club: document.querySelector('#club').value,
            logo: document.querySelector('#logo').value,
            pace: document.querySelector('#pace').value,
            shooting: document.querySelector('#shooting').value,
            passing: document.querySelector('#passing').value,
            dribbling: document.querySelector('#dribbling').value,
            defending: document.querySelector('#defending').value,
            physical: document.querySelector('#physical').value,
            photo: document.querySelector('#image').value,
        };
        // eventListeners();

        dataPlayer[index] = updatedPlayer;
        localStorage.setItem('dataPlayer', JSON.stringify(dataPlayer));

        const card = document.querySelector(`.fut-player-card[data-index="${index}"]`);
        // card.innerHTML = `
        //     <div class="player-card-top">
        //         <div class="player-master-info">
        //             <div class="player-rating" style="height: 15px;">
        //                 <span>${updatedPlayer.rating}</span>
        //             </div>
        //             <div class="player-position" style="height: 15px;">
        //                 <span style="font-size: smaller;">${updatedPlayer.position}</span>
        //             </div>
        //             <div class="player-nation">
        //                 <img src="${updatedPlayer.flag}" alt="Nationality" draggable="false">
        //             </div>
        //             <div class="player-club">
        //                 <img src="${updatedPlayer.logo}" alt="${updatedPlayer.club}" draggable="false">
        //             </div>
        //         </div>
        //         <div class="player-picture" style="height: fit-content;">
        //             <img src="${updatedPlayer.photo}" alt="${updatedPlayer.name}" draggable="false">
        //         </div>
        //     </div>
        //     <div class="player-card-bottom">
        //         <div class="player-info">
        //             <div class="player-name">
        //                 <span>${updatedPlayer.name}</span>
        //             </div>
        //             <div class="player-features">
        //                 <div class="player-features-col">
        //                     <span>
        //                         <div class="player-feature-value">${updatedPlayer.pace}</div>
        //                         <div class="player-feature-title">PAC</div>
        //                     </span>
        //                     <span>
        //                         <div class="player-feature-value">${updatedPlayer.shooting}</div>
        //                         <div class="player-feature-title">SHO</div>
        //                     </span>
        //                     <span>
        //                         <div class="player-feature-value">${updatedPlayer.passing}</div>
        //                         <div class="player-feature-title">PAS</div>
        //                     </span>
        //                 </div>
        //                 <div class="player-features-col">
        //                     <span>
        //                         <div class="player-feature-value">${updatedPlayer.dribbling}</div>
        //                         <div class="player-feature-title">DRI</div>
        //                     </span>
        //                     <span>
        //                         <div class="player-feature-value">${updatedPlayer.defending}</div>
        //                         <div class="player-feature-title">DEF</div>
        //                     </span>
        //                     <span>
        //                         <div class="player-feature-value">${updatedPlayer.physical}</div>
        //                         <div class="player-feature-title">PHY</div>
        //                     </span>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // `;
        card.innerHTML = createCardContent(updatedPlayer)
        document.querySelector('.player-form').classList.add('hidden');
        document.querySelector('.cards').classList.remove('blur');


    }

    
        function createCardContent(player) {
            return `
                <div class="player-card-top">
                    <div class="player-master-info">
                        <div class="player-rating" style="height: 15px;">
                            <span>${player.rating}</span>
                        </div>
                        <div class="player-position" style="height: 15px;">
                            <span style="font-size: smaller;">${player.position}</span>
                        </div>
                        <div class="player-nation">
                            <img src="${player.flag}" alt="Nationality" draggable="false">
                        </div>
                        <div class="player-club">
                            <img src="${player.logo}" alt="${player.club}" draggable="false">
                        </div>
                    </div>
                    <div class="player-picture" style="height: fit-content;">
                        <img src="${player.photo}" alt="${player.name}" draggable="false">
                    </div>
                </div>
                <div class="player-card-bottom">
                    <div class="player-info">
                        <div class="player-name">
                            <span>${player.name}</span>
                        </div>
                        <div class="player-features">
                            <div class="player-features-col">
                                <span>
                                    <div class="player-feature-value">${player.pace}</div>
                                    <div class="player-feature-title">PAC</div>
                                </span>
                                <span>
                                    <div class="player-feature-value">${player.shooting}</div>
                                    <div class="player-feature-title">SHO</div>
                                </span>
                                <span>
                                    <div class="player-feature-value">${player.passing}</div>
                                    <div class="player-feature-title">PAS</div>
                                </span>
                            </div>
                            <div class="player-features-col">
                                <span>
                                    <div class="player-feature-value">${player.dribbling}</div>
                                    <div class="player-feature-title">DRI</div>
                                </span>
                                <span>
                                    <div class="player-feature-value">${player.defending}</div>
                                    <div class="player-feature-title">DEF</div>
                                </span>
                                <span>
                                    <div class="player-feature-value">${player.physical}</div>
                                    <div class="player-feature-title">PHY</div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    

    function deletePlayer(index) {
        const playerId = dataPlayer[index].id;
        const card = document.querySelector(`.fut-player-card[data-id="${playerId}"]`);
        if (confirm('Are you sure you want to delete this player?')) {
            if (card) {
                card.removeEventListener('click', () => updateForm(index))
                card.classList.add('fade-out');
                card.addEventListener('animationend', () => {
                    card.remove();
                });
           
                dataPlayer.splice(index, 1);
    
                localStorage.setItem('dataPlayer', JSON.stringify(dataPlayer));
    
                // displayCard();
    
                // updateCardsIndex();
            }
            document.querySelector('.player-form').classList.add('hidden');
            document.querySelector('.cards').classList.remove('blur');
            document.querySelector('.btn-delete').classList.add('hidden');
        }

        
    }

    // function updateCardsIndex() {
    //     const cards = document.querySelectorAll('.fut-player-card');
    //     cards.forEach((card, index) => {
    //         card.dataset.index = index;
    //         console.log(card.dataset.index);
    //     });
    // }

    document.querySelector('.add-icon').addEventListener('click', () => {
        document.querySelector('#name').value = '';
        document.querySelector('#rating').value = '';
        document.querySelector('#nationality').value = '';
        document.querySelector('#position').value = '';
        document.querySelector('#club').value = '';
        document.querySelector('#logo').value = '';
        document.querySelector('#pace').value = '';
        document.querySelector('#shooting').value = '';
        document.querySelector('#passing').value = '';
        document.querySelector('#dribbling').value = '';
        document.querySelector('#defending').value = '';
        document.querySelector('#physical').value = '';
        document.querySelector('#image').value = '';

        updateCardPreview();

        document.querySelector('.form-card').classList.remove('hidden');
        document.querySelector('.btn').classList.remove('hidden');
        document.querySelector('.btn-update').classList.add('hidden');
        document.querySelector('.btn-delete').classList.add('hidden');

        document.querySelector('.player-form').classList.toggle('hidden');
        document.querySelector('.cards').classList.toggle('blur');
        eventListeners();
    });

    document.querySelector(".btn").addEventListener('click', () => {
        document.querySelector('.cards').classList.remove('blur');
        document.querySelector('.player-form').classList.add('hidden');
    });

    const name = document.querySelector('#name');
        const rating = document.querySelector('#rating');
        const nationality = document.querySelector('#nationality');
        const position = document.querySelector('#position');
        const club = document.querySelector('#club');
        const logo = document.querySelector('#logo');
        const pace = document.querySelector('#pace');
        const shooting = document.querySelector('#shooting');
        const passing = document.querySelector('#passing');
        const dribbling = document.querySelector('#dribbling');
        const defending = document.querySelector('#defending');
        const physical = document.querySelector('#physical');
        const photo = document.querySelector('#image');

    function eventListeners() {
        

        name.addEventListener('input', () => {
            document.querySelector('.player-form .player-name span').textContent = name.value;
        });

        photo.addEventListener('input', () => {
            document.querySelector('.player-form .player-picture img').src = photo.value;
        });

        rating.addEventListener('input', () => {
            document.querySelector('.player-form .player-rating span').textContent = rating.value;
        });

        position.addEventListener('input', () => {
            document.querySelector('.player-form .player-position span').textContent = position.value;
        });

        club.addEventListener('input', () => {
            document.querySelector('.player-form .player-club img').alt = club.value;
        });

        logo.addEventListener('input', () => {
            document.querySelector('.player-form .player-club img').src = logo.value;
        });

        pace.addEventListener('input', () => {
            document.querySelector('.player-form .player-features-col span:nth-child(1) .player-feature-value').textContent = pace.value;            
        });

        shooting.addEventListener('input', () => {
            document.querySelector('.player-form .player-features-col span:nth-child(2) .player-feature-value').textContent = shooting.value;
        });

        passing.addEventListener('input', () => {
            document.querySelector('.player-form .player-features-col span:nth-child(3) .player-feature-value').textContent = passing.value;
        });

        dribbling.addEventListener('input', () => {
            document.querySelector('.player-form .scnd span:nth-child(1) .player-feature-value').textContent = dribbling.value;
        });

        defending.addEventListener('input', () => {
            document.querySelector('.player-form .scnd span:nth-child(2) .player-feature-value').textContent = defending.value;
        });

        physical.addEventListener('input', () => {
            document.querySelector('.player-form .scnd span:nth-child(3) .player-feature-value').textContent = physical.value;
        });

        nationality.addEventListener('input', () => {
            document.querySelector('.player-form .player-nation img').src = nationality.value;
        });
        // createCard();
    }

    document.querySelector('.btn').addEventListener('click', (e) => {
        e.preventDefault();

        const playerId = Date.now();
        const name = document.querySelector('#name').value;
        const rating = document.querySelector('#rating').value;
        const nationality = document.querySelector('#nationality').value;
        const position = document.querySelector('#position').value;
        const club = document.querySelector('#club').value;
        const pace = document.querySelector('#pace').value;
        const shooting = document.querySelector('#shooting').value;
        const passing = document.querySelector('#passing').value;
        const dribbling = document.querySelector('#dribbling').value;
        const defending = document.querySelector('#defending').value;
        const physical = document.querySelector('#physical').value;
        const photo = document.querySelector('#image').value;
        const logo = document.querySelector('#logo').value;

        const newPlayer = {
            id: playerId, name: name, rating: rating, flag: nationality, position: position, club: club, logo: logo, photo: photo, pace: pace, shooting: shooting, passing: passing, dribbling: dribbling, defending: defending, physical: physical
        };
        console.log(newPlayer);
        
        console.log(dataPlayer);
        if (inputValidation()) {
            dataPlayer.push(newPlayer);
            localStorage.setItem('dataPlayer', JSON.stringify(dataPlayer));
            const card = createCard(newPlayer, dataPlayer.length);
            document.querySelector('.player-cards').appendChild(card);
        }
    });

    function inputValidation() {
        const fields = [
            '#name', '#rating', '#nationality', '#position', '#club',
            '#pace', '#logo', '#shooting', '#passing', '#dribbling', 
            '#defending', '#physical', '#image'
        ];
        const numberFields = [
            '#rating', '#pace', '#shooting', '#passing', '#dribbling', 
            '#defending', '#physical'
        ];

        for (let field of numberFields) {
            const value = document.querySelector(field).value;
            if (value > 100 || value < 0) {
                alert(`La valeur de ${field} doit être comprise entre 0 et 100.`);
                return false;
            }
        }
        
        for (let field of fields) {
            const value = document.querySelector(field).value.trim();
            if (!value) {
                alert(`Le champ ${field} ne peut pas être vide.`);
                return false;
            }
            
        }
        if (document.querySelector('#name').value.length > 10) {
            alert('Le nom du joueur ne peut pas dépasser 10 caractères.');
            console.log('Le nom du joueur ne peut pas dépasser 10 caractères.');
            
            return false;
        }
        // emptyField();
        return true;

        
    }
    
    function updateCardPreview() {
        const name = document.querySelector('#name').value;
        const rating = document.querySelector('#rating').value;
        const nationality = document.querySelector('#nationality').value;
        const position = document.querySelector('#position').value;
        const club = document.querySelector('#club').value;
        const photo = document.querySelector('#image').value;
        const logo = document.querySelector('#logo').value;
        const pace = document.querySelector('#pace').value;
        const shooting = document.querySelector('#shooting').value;
        const passing = document.querySelector('#passing').value;
        const dribbling = document.querySelector('#dribbling').value;
        const defending = document.querySelector('#defending').value;
        const physical = document.querySelector('#physical').value;
    
        document.querySelector('.player-form .player-name span').textContent = name || 'Nom';
        document.querySelector('.player-form .player-rating span').textContent = rating || '80';
        document.querySelector('.player-form .player-position span').textContent = position || 'pos';
        document.querySelector('.player-form .player-club img').src = logo || 'https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg';
        document.querySelector('.player-form .player-club img').alt = club || 'Barcelona';
        document.querySelector('.player-form .player-picture img').src = photo || 'https://selimdoyranli.com/cdn/fut-player-card/img/messi.png';
        document.querySelector('.player-form .player-features-col span:nth-child(1) .player-feature-value').textContent = pace || '0';
        document.querySelector('.player-form .player-features-col span:nth-child(2) .player-feature-value').textContent = shooting || '0';
        document.querySelector('.player-form .player-features-col span:nth-child(3) .player-feature-value').textContent = passing || '0';
        document.querySelector('.player-form .scnd span:nth-child(1) .player-feature-value').textContent = dribbling || '0';
        document.querySelector('.player-form .scnd span:nth-child(2) .player-feature-value').textContent = defending || '0';
        document.querySelector('.player-form .scnd span:nth-child(3) .player-feature-value').textContent = physical || '0';
        document.querySelector('.player-form .player-nation img').src = nationality || 'https://selimdoyranli.com/cdn/fut-player-card/img/argentina.svg';
    }
    
});

