import React,  { useState } from 'react';
import './style.css'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default ({user, chatList, show, setShow}) => {
    const [list, setList] = useState([
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Diogo Rosa'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Diogo Rosa'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Diogo Rosa'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Diogo Rosa'},
    ]);

    return (
        <div className="newChat" style={{ left: show ? 0 : '-415px' }}>
            <div className="newChat--head">
            <div onClick={() => setShow(false)} className="newChat--backbutton">
                    <ArrowBackIcon style={{ color: '#fff' }} />
                </div>
                <div className="newChat--headTitle">Nova Conversa</div>
            </div>
            <div className="newChat--list">
                {list.map((item, key) => (
                    <div className="newChat--item" key={key}>
                        <img className="newChat--itemavatar" src={item.avatar} alt="" />
                <div className="newChat--itemname">{item.name}</div>
                    </div>
                ))}
            </div>


        </div>
    );
}