import './notification-style.css'

interface NotificationProps {
    typeNotification: string,
    onCancelClick: () => void,
    // order: string[] | null,
    onSaveClick: () => void 
}

const TEXT_NOTIFICATION = {
    ["Выход"]: { question: "Вы уверены, что хотите выйти из системы?", buttonText: "Выйти" },
    ["Изменить"]: { question: "Вы уверены, что хотите изменить статус заказа?", buttonText: "Изменить" },
    ["Сохранить"]: { question: "Вы уверены, что хотите сохранить заказ?", buttonText: "Сохранить" }
}

function Notification({ typeNotification, onCancelClick, onSaveClick }: NotificationProps) {
    let notificationText;

    if (typeNotification === "Выход") {
        notificationText = TEXT_NOTIFICATION.Выход
    } else if (typeNotification === "Изменить") {
        notificationText = TEXT_NOTIFICATION.Изменить
    } else if (typeNotification === "Сохранить") {
        notificationText = TEXT_NOTIFICATION.Сохранить
    }

    // function onNotificationButtonClick() {
    //     if (typeNotification === "Выход") {
    //         navigate('/')
    //     } else if (typeNotification === "Сохранить") {
    //         // onSaveClick();
    //         onClick();
    //     }
        
    //     onClick;
    // }

    return (
        <div className="notification-bg">
            <div className='notification-container'>
                <p className='notification-text'>{ notificationText?.question }</p>
                {/* <div>
                    { order &&
                        order.map((element) => {
                            return <p>{ element }</p>
                        })
                    }
                </div> */}
                <div className='notification-btns'>
                    <button
                        className='notification-link'
                        onClick={ onSaveClick }
                    >
                        { notificationText?.buttonText }
                    </button>
                    <button
                        className='notification-cancel-btn'
                        onClick={ onCancelClick }
                    >
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Notification;