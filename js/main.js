const wrapper = document.getElementById('wrapper');
const peopleDonated = document.querySelector('.number-of-backers');
const pledgedAmount = document.querySelector('.backed-users');
const countDownElement = document.querySelector('.count-down');

const makePledgeBtnElement = document.querySelectorAll('.make-pledge');
const modalBackground = document.querySelector('.bg-modal');
const closeModal = document.querySelector('.close');
const container = document.querySelector('.container');

const openNav = document.querySelector('.burger');
const closeNav = document.querySelector('.closeNav');
const displayNav = document.querySelector('.display-none');

const successElement = document.querySelector('.pledge-successful');
const closeSuccess = document.querySelectorAll('.close');

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
    button.addEventListener('click', () => { 
        modalBackground.style.display = 'block';
        container.style.position = 'fixed';
     });
})
closeModal.addEventListener('click', () => { 
    modalBackground.style.display = 'none';
    container.style.position = 'absolute';
});

window.addEventListener('click', (clicking) => {
    if (clicking.target === modalBackground || clicking.target === successElement) {
        modalBackground.style.display = 'none';
        successElement.style.display = 'none';
        container.style.position = 'absolute';
    }
})

let bambooItemsLeft = { value: 101 };
let blackEditionItemsLeft = { value: 64 };
document.querySelectorAll('.items-left-bammboo').forEach(element => element.textContent = bambooItemsLeft.value);
document.querySelectorAll('.back-edition-left').forEach(element => element.textContent = blackEditionItemsLeft.value);
// find out why factory function isnt working
function subtractItemsLeft(input) {
    if (input === '1') {
        console.log('One');
        let subtractBamboo = bambooItemsLeft.value;
        console.log(subtractBamboo--);
        return subtractBamboo;
    } else if (input === '2') {
        console.log('Two');
        return blackEditionItemsLeft.value--;
    }
}

wrapper.addEventListener('click', calculateDonations);
let donationsMade = [];
function calculateDonations(event) {

    const el = event.target;
    
    if (el.nodeName !== 'BUTTON' || !el.classList.contains('submitBtn')) {
        return;
    }

    let targetInput = el.dataset.input;

    const inputElement = document.querySelector(`input[data-input="${targetInput}"]`);
    const inputValue = parseFloat(inputElement.value) || 0;

    if (inputValue < 25 || inputValue === '') return alert('Pledge must be at least $25.');

    donationsMade.push(inputValue);
    const donationsTotal = donationsMade.reduce((a, b) => a += b);
    pledgedAmount.textContent = `$${donationsTotal}`;
    peopleDonated.textContent = donationsMade.length;
    successModal();

    // find out why factory function isnt working
    subtractItemsLeft(targetInput);

    return donationsTotal;
}

countDownFunction()
function countDownFunction() {
    const countDownDate = new Date("May 31, 2021 00:00:00");

    const updateTime = setInterval(() => {
        const start = new Date().getTime();
        const distance = countDownDate - start;
        const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
        
        countDownElement.textContent = daysLeft;

        if (distance < 0) {
            clearInterval(updateTime);
            countDownElement.textContent = "CLOSED";
        }
    }, 1000);
}

function successModal() {
    successElement.style.display = 'block';
    container.style.position = 'fixed';
    modalBackground.style.position = 'fixed';
}
closeSuccess.forEach(button => button.addEventListener('click', () => {
    successElement.style.display = 'none';
}))
