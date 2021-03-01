const makePledgeBtnElement = document.querySelectorAll('.make-pledge');
const modalBackground = document.querySelector('.bg-modal');
const closeModal = document.querySelector('.close');

const wrapper = document.getElementById('wrapper');
const peopleDonated = document.querySelector('.number-of-backers');
const pledgedAmount = document.querySelector('.backed-users');

const openNav = document.querySelector('.burger');
const closeNav = document.querySelector('.closeNav');
const displayNav = document.querySelector('.display-none');

openNav.addEventListener('click', () => { 
    displayNav.style.display = 'block';
    openNav.style.display = 'none';
    closeNav.style.display = 'block';
})
closeNav.addEventListener('click', () => {
    displayNav.style.display = 'none';
    openNav.style.display = 'block';
    closeNav.style.display = 'none';
})

makePledgeBtnElement.forEach(button => {
    button.addEventListener('click', () => { modalBackground.style.display = 'block'; });
})
closeModal.addEventListener('click', () => { modalBackground.style.display = 'none'; });

window.addEventListener('click', (clicking) => {
    if (clicking.target === modalBackground) {
        modalBackground.style.display = 'none';
    }
})

wrapper.addEventListener('click', calculateBamboo);
let donationsMade = [];
function calculateBamboo(event) {

    const el = event.target;
    if (el.nodeName !== 'BUTTON' || !el.classList.contains('submitBtn')) {
        return;
    }
    const targetInput = el.dataset.input;
    const inputElement = document.querySelector(`input[data-input="${targetInput}"]`);
    const inputValue = parseFloat(inputElement.value) || 0;

    if (inputValue < 25 || inputValue === '') return alert('Pledge must be at least $25.');

    donationsMade.push(inputValue);
    const donationsTotal = donationsMade.reduce((a, b) => a += b);
    pledgedAmount.textContent = `$${donationsTotal}`;
    peopleDonated.textContent = donationsMade.length;

    return donationsTotal;
}

// function selectedEdition() {
//     modalBackground.style.display = 'block';
    // const activeStatus = document.querySelectorAll('.active');
    // bambooActiveStatus.classList.add('active');

    // const bambooEdition = document.querySelector('.bamboo-stand');
    // const bambooActiveStatus = document.querySelector('.pledgeTwo');
    // bambooEdition.classList.add('.selected-edition-style');
    // bambooEdition.forEach(edition => {
    //     edition.classList.add('.selected-edition-style');

    //     activeStatus.forEach(status => {
    //         status.style.display = 'block';
    //     })
    // });

// }

/// success message after pledge
/// make forEach loop on the closeModalFunction
    // to cover both success and pledge modals
// const closeModal = document.querySelector('.close-btn');
// const closeModalTwo = document.querySelector('.close-btn-two');
// const successElement = document.querySelector('.pledge-successful');
// const modalBackgroundTwo = document.querySelector('.pledge-successful');

// function closeModalFunction() {
//     modalBackground.style.display = 'none';
//     modalBackgroundTwo.style.display = 'none';
// }

// closeModal.addEventListener('click', closeModalFunction);
// closeModalTwo.addEventListener('click', closeModalFunction);