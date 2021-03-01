const makePledgeBtn = document.querySelector('.make-pledge');
const modalBackground = document.querySelector('.bg-modal');
const modalBackgroundTwo = document.querySelector('.pledge-successful');
const closeModal = document.querySelector('.close-btn');
const closeModalTwo = document.querySelector('.close-btn-two');

const bambooEdition = document.querySelector('.bamboo-stand');
const bambooEdtionBtn = document.querySelector('.bamboo-edition-btn');
const bambooActiveStatus = document.querySelector('.pledgeTwo');

const blackEditionButton = document.querySelector('.black-edition-btn');

const pledgedAmount = document.querySelector('.backed-users');
const activeStatus = document.querySelectorAll('.active');

const successElement = document.querySelector('.pledge-successful');

function closeModalFunction() {
    modalBackground.style.display = 'none';
    modalBackgroundTwo.style.display = 'none';
}
closeModal.addEventListener('click', closeModalFunction)
closeModalTwo.addEventListener('click', closeModalFunction)

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
    // bambooActiveStatus.classList.add('active');

    // bambooEdition.classList.add('.selected-edition-style');
    // bambooEdition.forEach(edition => {
    //     edition.classList.add('.selected-edition-style');

    //     activeStatus.forEach(status => {
    //         status.style.display = 'block';
    //     })
    // });

}
bambooEdtionBtn.addEventListener('click', selectedEdition);
blackEditionButton.addEventListener('click', selectedEdition);

const wrapper = document.getElementById('wrapper');
// const pledgedAmount = document.querySelector('.backed-users');
const backersElement = document.querySelector('.number-of-backers');

wrapper.addEventListener('click', calculateBamboo);

let donationsMade = [];

function calculateBamboo(event) {
    /* Here you can access to the event argument,
      which contains target: the clicked element*/
    const el = event.target;

    if (el.nodeName !== 'BUTTON' || !el.classList.contains('submitBtn')) {
        return;
    }

    // Get target input from button's data-attr
    const targetInput = el.dataset.input;
    const inputElement = document.querySelector(`input[data-input="${targetInput}"]`);

    // Continue with the code you had...
    const inputValue = parseFloat(inputElement.value) || 0;

    if (inputValue < 25 || inputValue === '') return alert('Pledge must be at least $25.');

    donationsMade.push(inputValue);
    const donationsTotal = donationsMade.reduce((a, b) => a += b);
    pledgedAmount.textContent = `$${donationsTotal}`;
    backersElement.textContent = donationsMade.length;

    return donationsTotal;
}