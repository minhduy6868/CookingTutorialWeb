const sign_in = document.querySelector("#sign-in-btn");
const sign_up = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
});

sign_in.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
});

document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = document.getElementById('signInUserName').value;
    const password = document.getElementById('signInPassword').value;

    if (userName === '' || password === '') {
        alert('Vui lòng điền đủ các trường');
        return;
    }

    Swal.fire({
        title: 'Đăng nhập',
        text: 'Đăng nhập thành công',
        icon: 'success',
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = '/public/home/home.html'; 
        }
    });
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = document.getElementById('signUpUserName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;

    if (userName === '' || email === '' || password === '') {
        alert('Vui lòng điền đủ các trường');
        return;
    }

    if (!validateEmail(email)) {
        alert('Điền email đúng định dạng !');
        return;
    }

    Swal.fire({
        title: 'Đăng kí',
        text: 'Đăng kí thành công',
        icon: 'success',
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = '/public/home/home.html'; 
        }
    });
    
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}/*
const template = document.getElementById('dialog-template');

document.body.appendChild(
  document.importNode(template.content, true)
);*/