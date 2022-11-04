import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export let dialogsData = [
  {id: 1, name: 'Andrey'},
  {id: 2, name: 'Thor'},
  {id: 3, name: 'Tour'},
  {id: 4, name: 'Zeus'},
  {id: 5, name: 'Mars'},
  {id: 6, name: 'MLRS Himars'},
  {id: 7, name: 'Odin'},
  {id: 8, name: 'Ra'},
  {id: 9, name: 'Susanoo'},
  {id: 10, name: 'Amaterasu'}
];

export let messagesData = [
  { id: 1, message: 'В период моего пребывания в одной большой азиатской стране я часто по работе и из любопытства общался с её жителями.'},
  { id: 2, message: 'Ознакомившись с её описанием я внезапно нашел ключевую, как мне кажется, параллель развития страны строителей коммунизма и модели искусственного интеллекта от развитой демократии. Если вам тоже интересно - добро пожаловать внутрь'},
  { id: 1, message: 'Я здесь собрал кое-какие способы (не все), с помощью которых можно редактировать файлы, находящиеся на удаленных машинах, при этом используя свой локально настроенный и причесанный vim со всеми плюшками.'},
];

export let postsData = [
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
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// export default dialogsData;
// export default messagesData;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
