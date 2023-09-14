let news = [
    {
        id: 1,
        name: 'В Татарстане 2024 год объявлен Годом научно-технологического развития',
        author:'Рузалия ХАКИМУЛЛИНА',
        date: '14.10.23',
        text:'В Татарстане 2024 год объявлен Годом научно-технологического развития. Об этом в ходе ежегодного послания Госсовету республики сообщил раис региона Рустам Минниханов.'
    },
    {
        id: 1,
        name: 'Бабушка из Бугульмы получила приглашение на ежегодное послание главы Татарстана',
        author:'Адам Сагал ',
        date: '13.10.23',
        text:'73-летняя жительница Бугульмы Таисия Балаева получила приглашение на ежегодное послание главы Татарстана. Бабушка прославилась тем, что передала автомобиль УАЗ в зону СВО.'
    },
    {
        id: 1,
        name: 'Импортозависимость и дефицит есть практически во всех направлениях',
        author:'Элина Иванова',
        date: '12.10.23',
        text:'Основатель маркетплейса «ОнлайнСклад» Сергей Жарахин — бизнесмен из Набережных Челнов с 15-летним стажем в сфере строительства. Он рассказал, как промышленная отрасль справляется с дефицитом товаров, с помощью чего маркетплейсы будут соревноваться за покупателей с гигантами строительной отрасли и многое другое.'
    },
    {
        id: 1,
        name: 'У главы администрации Чебоксар появился советник по работе с молодежью',
        author:'Олег Луговой',
        date: '11.10.23',
        text:'У главы администрации города Чебоксары Дениса Спирина появился советник по работе с молодежью. На эту должность назначен 30-летний Кирилл Мухин.'
    },
    {
        id: 1,
        name: 'В Казани спрос на покупку квартиры на вторичном рынке вырос на 70%',
        author:'Олег Луговой',
        date: '10.10.23',
        text:'В августе этого года в Татарстане было подписано 8 967 договоров купли-продажи квартир на вторичном рынке. Если сравнивать с июлем и июнем, то спрос на этот вид недвижимости вырос на 7%. А вот если посмотреть данные за август 2022 года, то рост составил 51%. При этом в Казани спрос на квартиры увеличился еще больше – на целых 70%.'
    }
]

newsPlace = document.querySelector('.news')
news.forEach(element =>{
    html = `
        <div class = "news-content">
            <div class = "news-up">
                <h2>${element.name}</h2>
                <p class = "date-news">${element.date}</p>
            </div>
            <p>${element.text}</p>
            <div class = "news-bottom">
                <p class="aut">${element.author}</p>
                <p class="id-news">${element.id}</p>
            </div>
        </div>
    `
    newsPlace.innerHTML += html;
})