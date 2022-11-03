import style from './MyPosts.module.css'
import Post from './Posts/Post'

const MyPosts = (props) => {

    return(
        <div className='MyPosts'>
          My posts
          <div>
            new posts
          </div>
          <div>
            <textarea></textarea>
            <button>add post</button>
          </div>
          <div className={style.posts}>
            <Post name='andre' message="hi my name Andrey" userAva='https://n1s2.hsmedia.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0xac120003_4430520541578509619.jpg' likes='12' />
            <Post name='android' message="it's my first post" userAva="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRb0lOhuAbflByagOfYUg5R8F1zGO1aN4woA&usqp=CAU" likes='2' />
            <Post name="Optimus" message='ddd' userAva="https://www.1zoom.ru/big2/946/289597-frederika.jpg" likes='32' />
          </div>

        </div>
    )
}

export default MyPosts