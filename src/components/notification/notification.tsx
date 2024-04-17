import { Link } from 'react-router-dom';

import './notification-style.css'


function Notification() {

    return (
        <div className="notification-bg">
            <div className='notification-container'>
                <p className='notification-text'>Вы уверены, что хотите выйти из системы?</p>
                <div className='notification-btns'>
                    <Link 
                        className='notification-link'
                        to={'/'}
                    >
                        Выйти
                    </Link>
                    <button
                        className='notification-cancel-btn'
                        // onClick={  }
                    >
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Notification;