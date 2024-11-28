import {data} from './data.js';

document.addEventListener("DOMContentLoaded", () => {
    window.onload = displayCard;

    console.log(JSON.parse(localStorage.getItem('dataPlayer')));
    
    let dataPlayer = JSON.parse(localStorage.getItem('dataPlayer')) || data.players;

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
    });

    document.querySelector(".btn").addEventListener('click', () => {
        document.querySelector('.cards').classList.remove('blur');
    });
});
