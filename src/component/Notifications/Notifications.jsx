import React from 'react';
import './Notifications.css';

function Notifications({ arrayOfObjects, markAsRead }) {
    return (
        <div>
            {arrayOfObjects.map((notification) => (
                <div 
                    key={notification.id} 
                    className={`nave ${!notification.stateMessage ? 'unread' : ''}`}
                    onClick={() => markAsRead(notification.id)}
                >
                    <img src={notification.userImage} alt={notification.userName} />
                    <div className="notification-content">
                        <p>
                        <span className='name-no'>{notification.userName}</span>
                            <span className='state-no'>{notification.userState}</span>
                            {notification.userLink && <span className='link'>{notification.userLink}</span>}
                            {notification.userDo && <span className='do'>{notification.userDo}</span>}
                        </p>
                        {!notification.stateMessage && <div className="unread-indicator"></div>}
                        <p className='date'>{notification.date}</p>
                        {notification.userMessage && <p className='message'>{notification.userMessage}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Notifications;