import { useState, useRef, useEffect } from 'react'
// import ChangeStatusBtn from '../change-status-btn/change-status-btn';
import { skirtsMaterials } from '../../../utils/const'
import Notification from '../../notification/notification'
import { ORDERS } from '../../../server/orders'
import { USERS } from '../../../server/users'

import penIcon from './img/pen-icon.svg'
import './add-order-style.css'


interface AddOrderProps {
    onCloseAddOrderBtnClick: () => void
}

function AddOrder({ onCloseAddOrderBtnClick }: AddOrderProps) {
    const [isEditing, setIsEditing] = useState(false);
    const skirtsSelectRef = useRef<HTMLSelectElement>(null);
    const dressmakerSelectRef = useRef<HTMLSelectElement>(null);
    const sizeSelectRef = useRef<HTMLSelectElement>(null);
    const heightSelectRef = useRef<HTMLSelectElement>(null);
    const materialsInputRef = useRef<HTMLInputElement>(null);
    const infoTextAreaRef = useRef<HTMLTextAreaElement>(null);
    const [isActive, setActive] = useState(false);

    function onEditingBtnClick() {
        if (isEditing) {
            setIsEditing(false)
        } else {
            setIsEditing(true)
            materialsInputRef.current?.focus()
        }  
    }

    function onSelectChange() {
        if (materialsInputRef.current && skirtsSelectRef.current)
            materialsInputRef.current.value = skirtsMaterials.get(skirtsSelectRef.current.value)
    }

    function onCancelBtnClick() {
        setActive(false);
    }

    function onSaveBtnClick() {
        setActive(true);
    }

    function onSaveNotificationBtnClick() {
        const orderId = ORDERS.length + 1;

        if (skirtsSelectRef.current && dressmakerSelectRef.current && sizeSelectRef.current && heightSelectRef.current && materialsInputRef.current && infoTextAreaRef.current)
            ORDERS.push({
                orderId: orderId,
                status: "Новый",
                name: skirtsSelectRef.current.value,
                createDate: "01.01.2024",
                dressmakerId: Number(dressmakerSelectRef.current.value),
                size: sizeSelectRef.current.value,
                height: heightSelectRef.current.value,
                materials: materialsInputRef.current.value,
                info: infoTextAreaRef.current.value
            });

        onCloseAddOrderBtnClick();
    }

    return (
        <div className='add-order-bg'>
            <div className='add-order-container'>
                <div className='add-order-inf'>
                    <div className='input-field-container'>
                        <p className='add-order-inf-text'>Изделие:</p>
                        <select className='add-order-inf-input' name="" id="" ref={ skirtsSelectRef } onChange={ onSelectChange }>
                            {(() => {
                                const skirts = [];
                                for (const materials of  skirtsMaterials.keys() ) {
                                    skirts.push(<option value={ materials }>{ materials }</option>);
                                }
                                return skirts;
                            })()}
                        </select>
                    </div>
                    <div className='input-field-container'>
                        <p className='add-order-inf-text'>Швея:</p>
                        <select className='add-order-inf-input' ref={ dressmakerSelectRef } name="" id="">
                            {(() => {
                                const items = [];
                                for (let i = 1; i < USERS.length; i++ ) {
                                    items.push(<option value={ i }>{ USERS[i].name }</option>);
                                }
                                return items;
                            })()}
                        </select>
                    </div>
                    <div className='input-field-container'>
                        <p className='add-order-inf-text'>Размер:</p>
                        <select className='add-order-inf-input' ref={ sizeSelectRef } name="" id="">
                            <option value="XXS">XXS</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </div>
                    <div className='input-field-container'>
                        <p className='add-order-inf-text'>Рост:</p>
                        <select className='add-order-inf-input' ref={ heightSelectRef } name="" id="">
                            <option value="160-170">160-170</option>
                            <option value="170-180">170-180</option>
                            <option value="180-190">180-190</option>
                            <option value="180-190">180-190</option>
                        </select>
                    </div>
                    <div className='input-field-container'>
                        <p className='add-order-inf-text'>Материалы:</p>
                        <input 
                            className='add-order-inf-input' 
                            type="text" 
                            disabled={ isEditing ? false : true }
                            ref={ materialsInputRef }
                        />
                        <button
                            onClick={ onEditingBtnClick }
                        >
                            <img src={ penIcon } alt="" />
                        </button>
                    </div>
                    <div className='input-field-container-textarea'>
                        <p className='add-order-inf-text'>Дополнительная информация:</p>
                        <textarea className='add-order-inf-textarea' ref={ infoTextAreaRef } name="" id=""></textarea>
                    </div>
                </div>
                <div className='add-order-btns'>
                    <button 
                        className='close-btn' 
                        onClick={ onCloseAddOrderBtnClick }
                    >
                        Сбросить
                    </button>
                    <button 
                        className='seve-btn'
                        onClick={ onSaveBtnClick }
                    >
                        Сохранить
                    </button>
                </div>
                { isActive && 
                    <Notification 
                        typeNotification='Сохранить' 
                        onCancelClick={ onCancelBtnClick } 
                        onSaveClick={ onSaveNotificationBtnClick }
                    /> 
                }
            </div>
        </div>
        
    )
}

export default AddOrder;