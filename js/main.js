// first button
const makePledgeBtn = document.querySelector('.make-pledge');
const modalBackground = document.querySelector('.bg-modal');
const closeModal = document.querySelector('.close-btn');

const bambooEdition = document.querySelector('.bamboo-stand');
const bambooEdtionBtn = document.querySelector('.bamboo-edition-btn');
const bambooActiveStatus = document.querySelector('.pledgeTwo')
let bambooInputElement = document.querySelector('.bambooInputElement');
const bambooBtnElement = document.querySelector('.bambooBtnElement');

const backedUsers = document.querySelector('.backed-users');
const activeStatus = document.querySelectorAll('.active');

const successElement = document.querySelector('.success-message');

closeModal.addEventListener('click', () => {
    modalBackground.style.display = 'none';
})
window.addEventListener('click', (clicking) => {
    if (clicking.target === modalBackground) {
        modalBackground.style.display = 'none';
    }
})

makePledgeBtn.addEventListener('click', makePledge);

function makePledge() {
    modalBackground.style.display = 'block';
}

function selectedEdition() {
    modalBackground.style.display = 'block';
    bambooActiveStatus.classList.add('active');

    // bambooEdition.classList.add('.selected-edition-style');
    // bambooEdition.forEach(edition => {
    //     edition.classList.add('.selected-edition-style');

    //     activeStatus.forEach(status => {
    //         status.style.display = 'block';
    //     })
    // });

}
bambooEdtionBtn.addEventListener('click', selectedEdition);

let bambooDonations = [];
function calculateBamboo() {
    const bambooInputValue = parseFloat(bambooInputElement.value);

    if(bambooInputValue < 25) return alert('Pledge must be at least $25.');

    bambooDonations.push(bambooInputValue);

    // get total of donations
    const totalDonations = bambooDonations.reduce((a, b) =>  a += b, 0);
    bambooInputValue.value = "";
     
    console.log(totalDonations + 'total donated');

    // need a way to add totalDonations from all editions
    backedUsers.textContent = totalDonations;
    
    return totalDonations;
    
}
bambooBtnElement.addEventListener('click', calculateBamboo);