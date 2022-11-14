let sideBarData = [
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
    },
    {
        ID: 9,
        name: 'Susanoo',
        profilePhoto: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/05/Susanoo-Naruto.png'
    }
]

const sideBarReducer = (users = sideBarData) => {
    return users
}


export default sideBarReducer