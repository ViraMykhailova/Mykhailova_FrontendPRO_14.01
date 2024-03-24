
function userInfo() {

    let yearOfBirth = +prompt('Введіть рік вашого народження');
    let city = prompt('В якому місті ви живете?');
    let favoriteSport = prompt('Ваш улюбленний спорт?');

    if (!yearOfBirth || !city || !favoriteSport) {
        alert('Шкода, що ви не захотіли ввести: ' +
            (!yearOfBirth ? ' рік народження ' : '') +
            (!city ? (!yearOfBirth ? ',' : '') + ' місто' : '') +
            (!favoriteSport ? ((!yearOfBirth || !city) ? ',' : '') + ' улюбленний спорт' : '') + '.');
           return;
    }

    let age = new Date().getFullYear() - yearOfBirth;
    let message = 'Ваш вік ' + age + '\n';

    if (city === 'Київ' || city === 'Вашингтон' || city === 'Лондон') {
        let country = city === 'Київ' ? 'України': (city === 'Вашингтон' ? 'США' : 'Великобританії');
        message += 'Ти живеш в столиці ' + country + '.\n';
    } else {
        message += 'Ти живеш в місті ' + city + ".\n";
    }

    const champions = {
        'футбол': 'Андрій Шевченко',
        'бокс': 'Віталій Кличко',
        'плавання': 'Яна Клочкова'
    };

    if (favoriteSport.toLowerCase() in champions) {
        const championName = champions[favoriteSport.toLowerCase()];
        message += 'Круто! Хочеш стати як ' + championName + '?';
    } else {
        message += 'Ваш улюбленний спорт ' + favoriteSport + '.';
    }

    alert(message);
}

userInfo();







