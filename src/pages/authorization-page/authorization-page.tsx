import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHotkeys } from 'react-hotkeys-hook'

import logoImg from './img/logo.svg';
import hiddenPassword from './img/hidden-password.svg'
import openPassword from './img/open-password.svg'
import { UserContext } from "../../contextes/UserContext";

import { USERS } from "../../server/users";

import "./authorization-page-style.css";

function AuthorizationPage() {
    const { setName, setIsDirector, setUserId } = useContext(UserContext);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const loginRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const emptyFieldsTextRef = useRef<HTMLParagraphElement>(null);
    const incorrectDataTextRef = useRef<HTMLParagraphElement>(null);
    const navigate = useNavigate();

    function onAuthorizationBtnClick() {
        if (loginRef.current && passwordRef.current && emptyFieldsTextRef.current && incorrectDataTextRef.current) {
            emptyFieldsTextRef.current.style.display = 'none'
            incorrectDataTextRef.current.style.display = "none"
            loginRef.current.style.border = "none"
            passwordRef.current.style.border = "none"

            let isEmpty = false;

            if (loginRef.current.value === '') {
                loginRef.current.style.border = "1px solid red"
                isEmpty = true
            }
            if (passwordRef.current.value === '') {
                passwordRef.current.style.border = "1px solid red" 
                isEmpty = true
            }
            if (isEmpty) {
                emptyFieldsTextRef.current.style.display = "inline"
                return
            }

            USERS.forEach((element) => {
                if (loginRef.current && passwordRef.current && emptyFieldsTextRef.current && incorrectDataTextRef.current)
                    if (loginRef.current.value === element.login && passwordRef.current.value === element.possword) {
                        setUserId(element.userId)
                        setName(element.name)
                        setIsDirector(element.isDirector)
                    } else {
                        incorrectDataTextRef.current.style.display = "inline"
                        return
                    }
            })
            
            navigate('/home')
        }
    }

    function showPassword() {
        if (isShowPassword) {
            setIsShowPassword(false)
        } else {
            setIsShowPassword(true)
        }
    }

    useHotkeys('Enter', () => onAuthorizationBtnClick())

    return(
        <div className="authorization-page-bg">
            <div className="authorization-page-container">
                <div className="authorization-form">
                    <h2 className="authorization-title">Вход</h2>
                    <p 
                        className="error-notification-text"
                        ref={ emptyFieldsTextRef }
                    >
                        Заполните все поля
                    </p>
                    <p
                        className="error-notification-text"
                        ref={ incorrectDataTextRef }
                    >
                        Неправельный логин или пароль
                    </p>
                    <input 
                        className="authorization-input authorization-empty-input" 
                        type="text"
                        placeholder="Логин"
                        ref={ loginRef }
                    />
                    <div className="password-input-div">
                        <input 
                            className={ isShowPassword ? "authorization-input" : "authorization-input password-input" }
                            type="text"
                            placeholder="Пароль"
                            ref={ passwordRef } 
                        />
                        <button 
                            className="password-input-img"
                            onClick={ showPassword }
                        >
                            <img src={ isShowPassword ? openPassword : hiddenPassword } alt="" />
                        </button>
                    </div>
                    <button 
                        className="authorization-btn"
                        onClick={ onAuthorizationBtnClick }
                    >
                        Войти
                    </button>
                </div>
                <img src={ logoImg } alt="" />
            </div>
        </div>
        
    )
}

export default AuthorizationPage;