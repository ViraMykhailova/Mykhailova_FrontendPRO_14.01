'use strict'
document.querySelector('#registrationForm').addEventListener('submit',(e)=> {
    e.preventDefault();

    let userGender = '';
    const gender = document.getElementsByName('gender');
    gender.forEach(gen => {
        if (gen.checked) {
            userGender = gen.value;
        }
    });

    const firstName = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const birthDate = document.querySelector('#birthDate');
    const city = document.querySelector('#city');
    const address = document.querySelector('#address');
    const languages = document.querySelectorAll('input[name="languages"]:checked')
    const userInfo = document.querySelector('#user-info');

    userInfo.style.visibility = 'visible'
    userInfo.innerHTML = `
        <div>
            <h2>Ваші дані:</h2>
            <p>Ім'я: ${firstName.value}</p>
            <p>Прізвище: ${lastName.value}</p>
            <p>Дата народження: ${birthDate.value}</p>
            <p>Стать: ${userGender}</p>
            <p>Місто: ${city.value}</p>
            <p>Адреса: ${address.value}</p>
            <p>Мови, якими володієте:</p>
            <ul>
             ${Array.from(languages).map(lang => `<li>${lang.value}</li>`).join('')}
            </ul>
        </div>`

    const registrationWrapper =document.querySelector('#registrationWrapper');
    registrationWrapper.style.display='none';
});


