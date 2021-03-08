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
    // document.querySelector('.progress-bar').style.position = 'unset';
    container.style.position = 'unset';
    displayNav.style.display = 'block';
    openNav.style.display = 'none';
    closeNav.style.display = 'block';
})
closeNav.addEventListener('click', () => {
    container.style.position = 'absolute';
    displayNav.style.display = 'none';
    openNav.style.display = 'block';
    closeNav.style.display = 'none';
})
document.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => {
        container.style.position = 'absolute';
        // displayNav.style.display = 'none';
    })
})

makePledgeBtnElement.forEach(button => {
    button.addEventListener('click', () => {
        modalBackground.style.display = 'block';
        container.style.position = 'fixed';
        scrollToTop();
    });
})
closeModal.addEventListener('click', () => {
    modalBackground.style.display = 'none';
    container.style.position = 'absolute';
    scrollToTop();
});

window.addEventListener('click', (clicking) => {
    if (clicking.target === modalBackground || clicking.target === successElement) {
        modalBackground.style.display = 'none';
        successElement.style.display = 'none';
        container.style.position = 'absolute';
        scrollToTop();
    }
})
const firstItems = document.querySelectorAll('.items-left-bammboo');
const secondItems = document.querySelectorAll('.back-edition-left');

let itemsLeftOne = 101;
let itemsLeftTwo = 64;

firstItems.forEach(element => element.textContent = itemsLeftOne);
secondItems.forEach(element => element.textContent = itemsLeftTwo);
// find out why factory function isnt working
function subtractItemsLeft(input) {
    itemsLeftOne = parseInt(itemsLeftOne);
    itemsLeftTwo = parseInt(itemsLeftTwo);

    if (input === '1') {
        console.log('One');
        return itemsLeftOne -= 1;
    } else if (input === '2') {
        console.log('Two');
        return itemsLeftTwo -= 1;
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
    // modalBackground.style.position = 'fixed';
    scrollToTop();
}
closeSuccess.forEach(button => button.addEventListener('click', () => {
    successElement.style.display = 'none';
}))
// scroll to top of page
function scrollToTop(){
    window.scroll({
        top: 0, 
        behavior: 'smooth'
    });
}