// Знаходимо елементи модального вікна
const modal = document.getElementById('authModal');
const modalTitle = document.getElementById('modalTitle');
const modalBtn = document.getElementById('modalSubmitBtn');
const closeModalBtn = document.querySelector('.modal-close');

// Знаходимо всі кнопки входу та реєстрації в шапці
const loginBtns = document.querySelectorAll('.btn-login');
const registerBtns = document.querySelectorAll('.btn-register');

// Функція відкриття вікна
function openModal(type) {
    if (type === 'login') {
        modalTitle.textContent = 'Login to CRAPPO';
        modalBtn.textContent = 'Log In';
    } else {
        modalTitle.textContent = 'Create CRAPPO Account';
        modalBtn.textContent = 'Register';
    }
    modal.classList.add('active');
}

// Функція закриття вікна
function closeModal() {
    modal.classList.remove('active');
}

// Клік на кнопку Login
loginBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('login');
    });
});

// Клік на кнопку Register
registerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal('register');
    });
});

// Клік на хрестик
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}

// Клік на темну область навколо вікна
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.querySelector('.nav');

if (burgerBtn) {
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        if (navMenu) {
            navMenu.classList.toggle('active');
        }
    });
}