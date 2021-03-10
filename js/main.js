const wrapper = document.getElementById('wrapper');
const peopleDonated = document.querySelector('.number-of-backers');
const pledgedAmount = document.querySelector('.backed-users');
const countDownElement = document.querySelector('.count-down');
const firstItems = document.querySelectorAll('.items-left-bammboo');
const secondItems = document.querySelectorAll('.back-edition-left');

const bookmarkLink = document.querySelector('.makeBookmark');
const bookmarkText = document.querySelector('.bookmarkText');

const makePledgeBtnElement = document.querySelectorAll('.make-pledge');
const modalBackground = document.querySelector('.bg-modal');
const closeModal = document.querySelector('.close');
const container = document.querySelector('.container');

const submitBtn = document.querySelector('.submitBtn');
const freePledge = document.querySelector('.freePledge');
const freeEditionContainer = document.querySelector('.free-edition');
const bambooInput = document.querySelector('.bambooInput');
const bammbooButtonsContainer = document.querySelector('.pledge-bamboo');
const blackInput = document.querySelector('.blackInput');
const blackButtonsContainer = document.querySelector('.pledge-black');

const openNav = document.querySelector('.burger');
const closeNav = document.querySelector('.closeNav');
const displayNav = document.querySelector('.display-none');

const successElement = document.querySelector('.pledge-successful');
const closeSuccess = document.querySelectorAll('.close');

function doBookmark(e) {
    e.preventDefault();

    if (bookmarkLink.classList.contains('bookmarked')) {
        bookmarkLink.classList.remove('bookmarked');
        bookmarkText.innerText = 'Bookmark';
    } else {
        bookmarkLink.classList.add('bookmarked');
        bookmarkText.innerText = 'Bookmarked';
        bookmarkText.style.color = 'hsl(176, 50%, 47%)'
    }

}
bookmarkLink.addEventListener('click', doBookmark);

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
        if (button.classList.contains('bamboo')) {
            displayBambooEdtion();
        } else if (button.classList.contains('black')) {
            displayBlackEdtion();
        }

        modalBackground.style.display = 'block';
        container.style.position = 'fixed';
        scrollToTop();
    });
})
closeModal.addEventListener('click', () => {
    bammbooButtonsContainer.style.display = 'none';
    submitBtn.style.display = 'none';
    blackButtonsContainer.style.display = 'none';
    modalBackground.style.display = 'none';
    container.style.position = 'absolute';
    scrollToTop();
});

window.addEventListener('click', (clicking) => {
    if (clicking.target === modalBackground || clicking.target === successElement) {
        modalBackground.style.display = 'none';
        successElement.style.display = 'none';
        container.style.position = 'absolute';

        bammbooButtonsContainer.style.display = 'none';
        submitBtn.style.display = 'none';
        blackButtonsContainer.style.display = 'none';
        scrollToTop();
    }
})

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

let donationsMade = [];
let pledgedWithNoAmount = 1;

document.querySelector('.makeFreePledge').addEventListener('click', () => {
    donationsMade.push(pledgedWithNoAmount);
    peopleDonated.textContent = donationsMade.length;
    successModal();
})

wrapper.addEventListener('click', calculateDonations);
function calculateDonations(event) {

    const el = event.target;

    if (el.nodeName !== 'BUTTON' || !el.classList.contains('submitBtn')) {
        return;
    }

    let targetInput = el.dataset.input;

    const inputElement = document.querySelector(`input[data-input="${targetInput}"]`);
    // console.log(inputElement);
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
function scrollToTop() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
}

function displayFreeEdition() {
    submitBtn.style.display = 'block';
    freeEditionContainer.classList.add('blueBorder');
    bammbooButtonsContainer.style.display = 'none';
    blackButtonsContainer.style.display = 'none';
}
freePledge.addEventListener('click', displayFreeEdition)


function displayBambooEdtion() {
    bammbooButtonsContainer.style.display = 'flex';
    submitBtn.style.display = 'none';
    blackButtonsContainer.style.display = 'none';
}
bambooInput.addEventListener('click', displayBambooEdtion)

function displayBlackEdtion() {
    blackButtonsContainer.style.display = 'flex';
    bammbooButtonsContainer.style.display = 'none';
    submitBtn.style.display = 'none';
}
blackInput.addEventListener('click', displayBlackEdtion)