// script.js

const form = document.getElementById('myForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const ageInput = document.getElementById('age');
const genderInput = document.getElementById('gender');
const addressInput = document.getElementById('address');
const phoneNumberInput = document.getElementById('phoneNumber');
const termsCheckbox = document.getElementById('terms');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    validateForm();
});

function validateForm() {
    const firstNameValue = firstNameInput.value.trim();
    const lastNameValue = lastNameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value;
    const ageValue = ageInput.value.trim();
    const genderValue = genderInput.value;
    const addressValue = addressInput.value.trim();
    const phoneNumberValue = phoneNumberInput.value.trim();
    const termsChecked = termsCheckbox.checked;

    if (firstNameValue === '') {
        showError(firstNameInput, 'First name is required');
    } else {
        showSuccess(firstNameInput);
    }

    if (lastNameValue === '') {
        showError(lastNameInput, 'Last name is required');
    } else {
        showSuccess(lastNameInput);
    }

    if (emailValue === '') {
        showError(emailInput, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        showError(emailInput, 'Please enter a valid email address');
    } else {
        showSuccess(emailInput);
    }

    if (passwordValue === '') {
        showError(passwordInput, 'Password is required');
    } else if (passwordValue.length < 6) {
        showError(passwordInput, 'Password must be at least 6 characters');
    } else {
        showSuccess(passwordInput);
    }

    if (ageValue === '') {
        showError(ageInput, 'Age is required');
    } else if (isNaN(ageValue) || ageValue < 18 || ageValue > 100) {
        showError(ageInput, 'Please enter a valid age (between 18 and 100)');
    } else {
        showSuccess(ageInput);
    }

    if (genderValue === '') {
        showError(genderInput, 'Please select your gender');
    } else {
        showSuccess(genderInput);
    }

    if (addressValue === '') {
        showError(addressInput, 'Address is required');
    } else {
        showSuccess(addressInput);
    }

    if (phoneNumberValue === '') {
        showError(phoneNumberInput, 'Phone number is required');
    } else if (!isValidPhoneNumber(phoneNumberValue)) {
        showError(phoneNumberInput, 'Please enter a valid phone number');
    } else {
        showSuccess(phoneNumberInput);
    }

    if (!termsChecked) {
        showError(termsCheckbox, 'Please agree to the terms and conditions');
    } else {
        showSuccess(termsCheckbox);
    }
}

function showError(input, message) {
    const formGroup = input.parentElement;
    const errorSpan = formGroup.querySelector('.error');
    errorSpan.textContent = message;
    formGroup.classList.add('error');
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.classList.remove('error');
}

function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phoneNumber) {
    // Basic phone number validation regex
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
}
