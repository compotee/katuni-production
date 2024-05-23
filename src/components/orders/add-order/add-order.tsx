import { useState, useRef } from 'react'
// import ChangeStatusBtn from '../change-status-btn/change-status-btn';
import { skirtsMaterials, dressmakers } from '../../../utils/const'
import Notification from '../../notification/notification'

import penIcon from './img/pen-icon.svg'
import './add-order-style.css'
import { ORDERS } from '../../../server/orders'

interface AddOrderProps {
    onCloseAddOrderBtnClick: () => void
}

function AddOrder({ onCloseAddOrderBtnClick }: AddOrderProps) {
    const [isEditing, setIsEditing] = useState(false);
    const materialsInputRef = useRef<HTMLInputElement>(null);
    const skirtsSelectRef = useRef<HTMLSelectElement>(null);
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
        materialsInputRef.current.value = skirtsMaterials.get(skirtsSelectRef.current?.value)
    }

    function onCancelBtnClick() {
        setActive(false);
    }

    function onSaveBtnClick() {
        setActive(true);
    }

    function onSaveNotificationBtnClick() {
        ORDERS.push({
            orderId: 5,
            status: "Завершенный",
            name: "Юбка «Шаринган»",
            createDate: "01.01.2024",
            dressmakerId: 2,
            size: "",
            height: "",
            materials: "",
            info: ""
        });

        onCloseAddOrderBtnClick
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
                        <select className='add-order-inf-input' name="" id="">
                            {(() => {
                                const items = [];
                                for (const dressmaker of  dressmakers ) {
                                    items.push(<option value="">{ dressmaker }</option>);
                                }
                                return items;
                            })()}
                        </select>
                    </div>
                    <div className='input-field-container'>
                        <p className='add-order-inf-text'>Размер:</p>
                        <select className='add-order-inf-input' name="" id="">
                            <option value="">XXS</option>
                            <option value="">XS</option>
                            <option value="">S</option>
                            <option value="">M</option>
                            <option value="">L</option>
                            <option value="">XL</option>
                            <option value="">XXL</option>
                        </select>
                    </div>
                    <div className='input-field-container'>
                        <p className='add-order-inf-text'>Рост:</p>
                        <select className='add-order-inf-input' name="" id="">
                            <option value="">160-170</option>
                            <option value="">170-180</option>
                            <option value="">180-190</option>
                            <option value="">190-200</option>
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
                        <textarea className='add-order-inf-textarea' name="" id=""></textarea>
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
                { isActive && <Notification typeNotification='Сохранить' onClick={ onCancelBtnClick } onSaveClick={ onSaveNotificationBtnClick } order={ null }/> }
            </div>
        </div>
        
    )
}

export default AddOrder;