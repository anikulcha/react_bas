import dialogReducer from "./dialogReducer"
import profileReducer from "./profileReducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                message: 'Имя Тиу исследователи соотносят с реконструированным именем общеиндоевропейского верховного бога, владыки небес (*Dyeus, ср. Зевс, Дьяус, Дэва, лат. Deus «бог»). Предполагается, что Тиу был вытеснен из этой ипостаси Одином.', 
                id: 1, 
                likeCount: 12
                },
                {
                message: 'Тюр лишился руки, когда асы решили сковать огромного волка Фенрира волшебной цепью Глейпнир.', 
                id: 2, 
                likeCount: 8
                },
                {
                message: 'Именем этого бога в германских языках было заменено имя римского бога Марса в названии вторника (лат. Martis dies) — норв. Tirsdag, англ. Tuesday.', 
                id: 3, 
                likeCount: 5
                }
                
            ],
            newPostText: 'where is my Mjolnir',
            
            profileImage: 'https://assets.reedpopcdn.com/-1631268637806.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/-1631268637806.jpg',
            profileBackgroundPhoto: 'https://cs8.pikabu.ru/post_img/big/2016/03/26/8/1459000754165120631.jpg'
        },
        dialogPage: {
            messages: [
                {
                    status: 'received',
                    id: 1, 
                    message: 'Асгард прославлен во множестве легенд и сказаний. Город был создан высшими богами Одином, Ве и Вили как обитель Асов. Он находится в небесах и олицетворяет будущее. Помимо асов, Асгард населяют представители дружественных народов: Локи от великанов, Фрей от Ванов, валькирии-воительницы, а также души некоторых воинов. Простым людям входить в...'
                },
                { 
                    status: 'received',
                    id: 2, 
                    message: 'Новое царство было и новой эпохой в развитии заупокойной литературы. Способы достижения загробных благ ещё более упростились и стали доступны ещё более широким кругам. Магические тексты, открывавшие потусторонние обители и сообщавшие бессмертие уже в эпоху Среднего царства, начали писаться на папирусе.'
                },
                {
                    status: 'sent', 
                    id: 3, 
                    message: 'Первое поколение богов призвало Идзанаги и его будущую супругу Идзанами, чтобы те сотворили землю. Им была дана украшенная драгоценными камнями нагината — оружие, которое принято называть алебардой.[1] Нагината носила название Аманонухоко, «Божественная алебарда с драгоценными камнями». Идзанаги и Идзанами отправились на мост, соединяющий небо и землю (Амэнокихаси), и начали перемешивать алебардой морские воды, когда же с алебарды начали падать солёные капли, они образовали остров Оногоро («самозагустевший»). Затем боги спустились с небесного моста и поселились на этом острове. Впоследствии, когда Идзанаги и Идзанами решили пожениться, они построили дворец Яхиродоно («великий дворец»).'
                },
            ],

            dialogs: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Thor'},
                {id: 3, name: 'Tour'},
                {id: 4, name: 'Zeus'},
                {id: 5, name: 'Mars'},
                {id: 6, name: 'MLRS Himars'},
                {id: 7, name: 'Odin'},
                {id: 8, name: 'Ra'},
                {id: 9, name: 'Susanoo'},
                {id: 10, name: 'Amaterasu'},
                {id: 11, name: 'Indra'}
            ],
            newMessageBody: ''
        },
        userID:[
            {
                ID: 7,
                name: 'Odin',
                profilePhoto: 'https://i0.wp.com/highoncinemaa.com/wp-content/uploads/2022/10/RDT_20221029_1530383517234704992742771.webp?resize=640%2C311&ssl=1'
            },
            {
                ID: 8,
                name: 'Ra',
                profilePhoto: 'https://i.ytimg.com/vi/IIVtY30Rbp0/maxresdefault.jpg'
            },
            {
                ID: 11,
                name: 'Indra',
                profilePhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtoLXWurtAVizdm5Tpnp9V9M755OINbBCOo0ZjoMNkdUwU5Oi8cYpAiplwOhY3pl3Sxgo&usqp=CAU'
            },
            {
                ID: 4,
                name: 'Zeus',
                profilePhoto: 'http://fc03.deviantart.net/fs21/f/2007/271/7/f/Gran_Zeus_by_el_grimlock.jpg'
            }
        ],
    },
    _callSubscriber () {
        console.log('state changed')
    },
    getState(){
        return this._state
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    
    dispatch(action){
        
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this._callSubscriber(this._state)
        
    }

}


export default store