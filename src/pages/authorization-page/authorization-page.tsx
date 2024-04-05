import "./authorization-page-style.css";

import logoImg from './img/logo.svg';


function AuthorizationPage() {
    return(
        <div className="authorization-page-bg">
            <div className="authorization-page-container">
                <div className="authorization-form">
                    <h2 className="authorization-title">Вход</h2>
                    <input 
                        className="authorization-input" 
                        type="text"
                        placeholder="Логин"
                    >
                            
                    </input>
                    <input 
                        className="authorization-input" 
                        type="text"
                        placeholder="Пароль"
                    >

                    </input>
                    <button className="authorization-btn">Войти</button>
                </div>
                <img src={ logoImg } alt="" />
            </div>
        </div>
        
    )
}

export default AuthorizationPage;