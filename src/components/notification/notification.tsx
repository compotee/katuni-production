import { useNavigate } from 'react-router-dom';

import './notification-style.css'

interface NotificationProps {
    typeNotification: string,
    onClick: () => void
}

const TEXT_NOTIFICATION = {
    ["Выход"]: { question: "Вы уверены, что хотите выйти из системы?", buttonText: "Выйти" },
    ["Изменить"]: { question: "Вы уверены, что хотите изменить статус заказа?", buttonText: "Изменить" },
    ["Сохранить"]: {  }
}

function Notification({ typeNotification, onClick }: NotificationProps) {
    const navigate = useNavigate();

    let notificationText;

    if (typeNotification === "Выход") {
        notificationText = TEXT_NOTIFICATION.Выход
    } else if (typeNotification === "Изменить") {
        notificationText = TEXT_NOTIFICATION.Изменить
    }

    function onNotificationButtonClick() {
        if (typeNotification === "Выход") {
            navigate('/')
        } else {
            onClick();
        }
    }

    return (
        <div className="notification-bg">
            <div className='notification-container'>
                <p className='notification-text'>{ notificationText?.question }</p>
                <div className='notification-btns'>
                    <button
                        className='notification-link'
                        onClick={ onNotificationButtonClick }
                    >
                        { notificationText?.buttonText }
                    </button>
                    <button
                        className='notification-cancel-btn'
                        onClick={ onClick }
                    >
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Notification;