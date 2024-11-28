import {data} from './data.js';

document.addEventListener("DOMContentLoaded", () => {
    window.onload = displayCard;

    let dataPlayer = JSON.parse(localStorage.getItem('dataPlayer')) || data.players;
    localStorage.setItem('dataPlayer', JSON.stringify(dataPlayer));

    console.log(JSON.parse(localStorage.getItem('dataPlayer')));
    

    console.log(dataPlayer);

    function displayCard() {

        if (dataPlayer.length > 0) {
            dataPlayer.forEach(player => {
                const card = document.createElement('div');
                card.classList.add('fut-player-card')
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
                                <img src="${player.flag}" alt="Argentina" draggable="false">
                            </div>
                            <div class="player-club">
                                <img src="${player.logo}" alt="Barcelona" draggable="false">
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
                document.querySelector('.player-cards').appendChild(card);
            });

        }
    }

    document.querySelector('.add-icon').addEventListener('click', () => {
        document.querySelector('.player-form').classList.toggle('hidden');
        document.querySelector('.cards').classList.add('blur');
        eventListeners();
    });

    document.querySelector(".btn").addEventListener('click', () => {
        document.querySelector('.cards').classList.remove('blur');
        document.querySelector('.player-form').classList.add('hidden');
    });

    function eventListeners() {
        const name = document.querySelector('#name');
        const rating = document.querySelector('#rating');
        const nationality = document.querySelector('#nationality');
        const position = document.querySelector('#position');
        // const club = document.querySelector('#club');
        const pace = document.querySelector('#pace');
        const shooting = document.querySelector('#shooting');
        const passing = document.querySelector('#passing');
        const dribbling = document.querySelector('#dribbling');
        const defending = document.querySelector('#defending');
        const physical = document.querySelector('#physical');
        const photo = document.querySelector('#image');

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
            document.querySelector('.player-form .player-nation img').src ;
        });
    }

    document.querySelector('.btn').addEventListener('click', (e) => {
        e.preventDefault();

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
        const league = document.querySelector('#league').value;

        const newPlayer = {
            name, rating, flag: nationality, position, logo: club, photo, pace, shooting, passing, dribbling, defending, physical
        };

        dataPlayer.push(newPlayer);
        console.log(dataPlayer);
        

        localStorage.setItem('dataPlayer', JSON.stringify(dataPlayer));

        const card = document.createElement('div');
        card.classList.add('fut-player-card');
        card.style = "height: 18rem; width: 11rem;";
        card.innerHTML = `
            <div class="player-card-top">
                <div class="player-master-info">
                    <div class="player-rating" style="height: 15px;">
                        <span>${rating}</span>
                    </div>
                    <div class="player-position" style="height: 15px;">
                        <span style="font-size: smaller;">${position}</span>
                    </div>
                    <div class="player-nation">
                        <img src="${nationality}" alt="Nationality" draggable="false">
                    </div>
                    <div class="player-club">
                        <img src="${club}" alt="Club" draggable="false">
                    </div>
                </div>
                <div class="player-picture" style="height: fit-content;">
                    <img src="${photo}" alt="${name}" draggable="false">
                </div>
            </div>
            <div class="player-card-bottom">
                <div class="player-info">
                    <div class="player-name">
                        <span>${name}</span>
                    </div>
                    <div class="player-features">
                        <div class="player-features-col">
                            <span>
                                <div class="player-feature-value">${pace}</div>
                                <div class="player-feature-title">PAC</div>
                            </span>
                            <span>
                                <div class="player-feature-value">${shooting}</div>
                                <div class="player-feature-title">SHO</div>
                            </span>
                            <span>
                                <div class="player-feature-value">${passing}</div>
                                <div class="player-feature-title">PAS</div>
                            </span>
                        </div>
                        <div class="player-features-col">
                            <span>
                                <div class="player-feature-value">${dribbling}</div>
                                <div class="player-feature-title">DRI</div>
                            </span>
                            <span>
                                <div class="player-feature-value">${defending}</div>
                                <div class="player-feature-title">DEF</div>
                            </span>
                            <span>
                                <div class="player-feature-value">${physical}</div>
                                <div class="player-feature-title">PHY</div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.querySelector('.player-cards').appendChild(card);

        document.querySelector('.player-form').classList.add('hidden');
    });

});
