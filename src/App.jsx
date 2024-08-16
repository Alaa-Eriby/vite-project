import React, { useState } from 'react';
import './App.css';
import Notifications from './component/Notifications/Notifications';
import angela from './assets/images/angela.webp';
import anna from './assets/images/anna.webp';
import jacob from './assets/images/jacob.webp';
import kimberly from './assets/images/kimberly.webp';
import mark from './assets/images/mark.webp';
import nathan from './assets/images/nathan.webp';
import rizky from './assets/images/rizky.webp';

function App() {
    const [arrayOfObjects, setArrayOfObjects] = useState([
        {
            id: 1,
            userName: "Mark Webber",
            userImage: mark,
            userState: "react to your recent post",
            date: "1m ago",
            userLink: "",
            userDo: "My first tournament today!",
            userMessage: "",
            stateMessage: false,
        },
        {
            id: 2,
            userName: "Angela Gray",
            userImage: angela,
            userState: "followed you",
            date: "5m ago",
            userLink: "",
            userDo: "",
            userMessage: "",
            stateMessage: false,
        },
        {
            id: 3,
            userName: "Jacob Thompson",
            userImage: jacob,
            userState: "has joined your group",
            date: "1 day ago",
            userLink: "Chess Club",
            userDo: "",
            userMessage: "",
            stateMessage: false,
        },
        {
            id: 4,
            userName: "Rezky Hasanuddin",
            userImage: rizky,
            userState: "sent you a private message",
            date: "5 days ago",
            userLink: "",
            userDo: "",
            userMessage: "Hello, thanks for setting up the chess club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
            stateMessage: true,
        },
        {
            id: 5,
            userName: "Kimberly Smith",
            userImage: kimberly,
            userState: "commented on your picture",
            date: "1 week ago",
            userLink: "",
            userDo: "",
            userMessage: "",
            stateMessage: true,
        },
        {
            id: 6,
            userName: "Nathan Peterson",
            userImage: nathan,
            userState: "reacted to your recent post",
            date: "2 weeks ago",
            userLink: "",
            userDo: "5 end-game strategies to increase your win rate",
            userMessage: "",
            stateMessage: true,
        },
        {
            id: 7,
            userName: "Anna Kim",
            userImage: anna,
            userState: "left the group",
            date: "2 weeks ago",
            userLink: "Chess Club",
            userDo: "",
            userMessage: "",
            stateMessage: true,
        },
    ]);

    const countUnreadMessages = () => {
        return arrayOfObjects.filter(notification => !notification.stateMessage).length;
    };
    const markAllAsRead = () => {
        setArrayOfObjects(arrayOfObjects.map(notification => ({
            ...notification,
            stateMessage: true
        })));
    };
    const markAsRead = (id) => {
        setArrayOfObjects(arrayOfObjects.map(notification => 
            notification.id === id ? { ...notification, stateMessage: true } : notification
        ));
    };

    return (
        <div className='all'>
            <div className='notviv'>
                <div className='header'>
                    <h1>Notifications <button>{countUnreadMessages()}</button></h1>
                    <button className='mark' onClick={markAllAsRead}>Mark all as read</button>
                </div>
            </div>
            <Notifications arrayOfObjects={arrayOfObjects} markAsRead={markAsRead} />
        </div>
    );
}

export default App;