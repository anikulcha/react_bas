const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST'

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                message: state.newPostText, 
                id: 5,
                likeCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
    
}

export const addPostActionCreation = () => ({ type: ADD_POST})
export const onPostChangeActionCreation = (text) => ({type: UPDATE_NEW_POST, newText: text})

export default profileReducer