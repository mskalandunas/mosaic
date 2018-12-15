'use strict';

const email = document.querySelector('.email');

email.addEventListener('click', () => {
    const select = window.getSelection();
    let range  = document.createRange();

    range.selectNodeContents(email);
    select.addRange(range);
    email.classList.add('active');
});

email.addEventListener('mouseout', () => {
    if (email.className.includes('active')) {
        email.classList.remove('active');
    };
});
