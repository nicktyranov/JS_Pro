console.log('DZ-4');

/*
Домашнее задание - Таймеры
*/
function timerNY() {
    let NYdate = new Date('12/31/2023 23:59');
    console.log(NYdate);

    let options = {
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    }

    let interval = setInterval(() => {
        let currentDate = new Date();
        let timeBeforeNY = NYdate - currentDate;
        let formatter = new Intl.DateTimeFormat('ru-Ru', options);
        let partsOfTime = formatter.formatToParts(timeBeforeNY);

        let rez = partsOfTime
            .map((part) => {
                let value = Number(part.value);
                if (part.type === 'month') {
                    if (currentDate.getMonth() === NYdate.getMonth() && currentDate.getFullYear() === NYdate.getFullYear()) {
                        return `0 месяцев, `;
                    } else if (value === 1) {
                        return `${value} месяц, `;
                    } else {
                        return `${value} месяцев, `;
                    }
                } else if (part.type === 'day') {
                    return `${value} дней, `;
                } else if (part.type === 'hour') {
                    return `${value} часов, `;
                } else if (part.type === 'minute') {
                    return `${value} минут, `;
                } else if (part.type === 'second') {
                    return `${value} секунд`;
                }
                return '';
            })
            .join('');

        console.log(`${rez}`);
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        console.log("Happy New Year!");
    }, NYdate - new Date());
}

timerNY();
