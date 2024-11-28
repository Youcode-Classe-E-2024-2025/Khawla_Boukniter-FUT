
const formations = {
    "3-5-2": [
        { top: "-6rem", left: "auto" },
        { top: "-6rem", left: "auto" },
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
        { top: "9rem", left: "-1rem" },
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

formationBtn.addEventListener('click', () => {
    formationOptions.style.display = formationOptions.style.display === "grid" ? "none" : "grid";
});

options.forEach(option => {
    option.addEventListener('click', () => {
        options.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        formationBtn.textContent = option.textContent;
        formationOptions.style.display = "none";
        updateFormation(option.textContent);
    });
});

window.onload = () => {
    updateFormation("3-5-2");
};


formationBtn.addEventListener('click', () => {
    document.querySelector('.formation-options').classList.toggle('hidden');
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
