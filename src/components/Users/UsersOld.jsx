import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';
import userPhoto2 from '../../assets/images/user2.png';
import userPhoto3 from '../../assets/images/user3.png';
import userPhoto4 from '../../assets/images/user4.png';

let UsersOld = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            });
        }
    }
    //     props.setUsers([
    //     {id: 1, photoUrl: 'https://pomocdzieciom.eu/wp-content/uploads/2015/09/BArtek-1024x768.jpg', followed: false, fullName: 'Andrew T', status: 'I\'m a boss', location: {city: 'Spb', country: 'Russia'}},
    //     {id: 2, photoUrl: 'https://i07.fotocdn.net/s124/bd9a239357864009/user_l/2822279766.jpg', followed: true, fullName: 'Patric M', status: 'speaker', location: {city: 'Los-Angeles', country: 'USA'}},
    //     {id: 3, photoUrl: 'https://avatars.mds.yandex.net/get-pdb/49816/f5340bbb-ea94-43fa-ad1a-8fb1f32163d5/s1200', followed: false, fullName: 'Santa C', status: 'Santa-Claus', location: {city: '', country: ''}},
    //     {id: 4, photoUrl: 'https://europa-dating.com/assets/101326503.jpg', followed: false, fullName: 'Sergei S', status: 'master', location: {city: 'Moskow', country: 'Russia'}},
    //     {
    //         id: 5,
    //         photoUrl: 'http://lichnosti.net/photos/3812/132484058410.jpg',
    //         follow: false,
    //         fullName: 'Sergei B',
    //         status: 'I\'m free to help you to create good Video Production',
    //         location: {city: 'Chicago', country: 'United States'}
    //     }
    // ])}
    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small !=null ? u.photos.small:userPhoto} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={()=>{unfollow(u.id) } }>Unfollow</button>
                            :<button onClick={()=>{follow(u.id) } }>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div><div>{"u.location.country"}</div>
                    </span>
                </span>
            </div>)
        }
        USERS WILL BE HERE!!!!
    </div>
}


export default UsersOld;