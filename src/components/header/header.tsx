import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../contextes/UserContext";
import { PageContext } from '../../contextes/PageContext';
import Notification from '../notification/notification'

import logo from './img/icon-logo.svg'
import notification from './img/notification-icon.svg'
import logout from './img/logout-icon.svg'

import './header-style.css'


function Header() {
    const { name, isDirector } = useContext(UserContext);
    const { isOrderPage, setIsOrderPage } = useContext(PageContext);
    const [isActive, setActive] = useState(false);
    const navigate = useNavigate();

    function onOrderBtnClick() {
        setIsOrderPage(true);
    }

    function onMaterialsBtnClick() {
        setIsOrderPage(false);
    }

    function onLogoutBtnClick() {
        setActive(true);
    }

    function onCancelBtnClick() {
        setActive(false);
    }

    function onExitBtnClick() {
        navigate('/')
    }

    return (
        <div className='header-container-bg'>
            <div className="header-container">
                <div className="header-left">
                    <img src={ logo } alt="" />
                    <button 
                        className={ isOrderPage ? "header-btn-active" :"" }
                        onClick={ onOrderBtnClick }
                    >
                        Заказы
                    </button>
                    <button
                        className={ isOrderPage ? "" : "header-btn-active" }
                        onClick={ onMaterialsBtnClick }
                    >
                        { isDirector ? 'Все материалы' : 'Материалы' }
                    </button>
                </div>
                <div className="header-right">
                    <p>{ name }</p>
                    <button>
                        <img src={ notification } alt="" />
                    </button>
                    <button onClick={ onLogoutBtnClick } title="Выход">
                        <img src={ logout } alt="" />
                    </button>
                </div>
                { isActive && 
                    <Notification 
                        typeNotification='Выход' 
                        onCancelClick={ onCancelBtnClick } 
                        onSaveClick={ onExitBtnClick }
                    /> 
                }
            </div>
        </div>
        
    )
}

export default Header;