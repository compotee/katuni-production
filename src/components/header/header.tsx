import logo from './img/icon-logo.svg'
import notification from './img/notification-icon.svg'
import logout from './img/logout-icon.svg'

import './header-style.css'

function Header() {
    return (
        <div className="header-container">
            <div className="header-left">
                <img src={ logo } alt="" />
                <button>Заказы</button>
                <button>Материалы</button>
            </div>
            <div className="header-right">
                <p>login</p>
                <button>
                    <img src={ notification } alt="" />
                </button>
                <button>
                    <img src={ logout } alt="" />
                </button>
            </div>
        </div>
    )
}

export default Header;