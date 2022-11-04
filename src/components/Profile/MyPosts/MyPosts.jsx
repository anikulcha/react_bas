import style from './MyPosts.module.css'
import Post from './Posts/Post'
import {postsData} from './../../../index'
const MyPosts = (props) => {
    let profileImage = 'https://assets.reedpopcdn.com/-1631268637806.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/-1631268637806.jpg';
    // let postsData = [
    //   {
    //     message: 'Имя Тиу исследователи соотносят с реконструированным именем общеиндоевропейского верховного бога, владыки небес (*Dyeus, ср. Зевс, Дьяус, Дэва, лат. Deus «бог»). Предполагается, что Тиу был вытеснен из этой ипостаси Одином.', 
    //     id: 1, 
    //     likeCount: 12
    //   },
    //   {
    //     message: 'Тюр лишился руки, когда асы решили сковать огромного волка Фенрира волшебной цепью Глейпнир.', 
    //     id: 2, 
    //     likeCount: 8
    //   },
    //   {
    //     message: 'Именем этого бога в германских языках было заменено имя римского бога Марса в названии вторника (лат. Martis dies) — норв. Tirsdag, англ. Tuesday.', 
    //     id: 3, 
    //     likeCount: 5
    //   }
    // ]

    let postsItem = postsData.map(p => <Post message={p.message} userAva= {profileImage} likes={p.likeCount} id={p.id} />)

    return(
        <div className='MyPosts'>
          <div className={style.posts}>
            <div>
              <h3>Addition new post</h3>
              <div>
                <textarea></textarea>
              </div>
              
              <button>add post</button>
            </div>
            <h3>My posts</h3>
              { postsItem }
          </div>
        </div>
    )
}

export default MyPosts