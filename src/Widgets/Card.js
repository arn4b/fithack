import React from 'react';
import style from './Card.module.css';

const Card = (props) => {
    const user = props.user;
    return (
        <div className={style.card}>
            <img src={user.profileURL} alt={user.username} style={{'width':'100%'}}></img>
            <h1>{user.firstName} {user.lastName}</h1>
            <p className={style.title}>{user.id} {user.username}</p>
            <p>Gender: {user.gender}</p>
            <p><button>Get Activities</button></p>
        </div>
    )
}

export default Card
