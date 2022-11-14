const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({status: 'send', id: 4, message: body})
            return state
        default:
            return state
    }
    // return state
}

export const sendMessageCreation = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreation = (body) => ({type: UPDATE_NEW_MESSAGE, body: body})

export default dialogReducer