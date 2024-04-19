import { useContext } from 'react';
import { UserContext } from '../../../contextes/UserContext';
import ChangeStatusBtn from '../change-status-btn/change-status-btn';

import './order-style.css'

interface OrderProps {
    onCloseOrderBtnClick: () => void,
    onChangeStatusBtnClick: () => void
}

function Order({ onCloseOrderBtnClick, onChangeStatusBtnClick }: OrderProps) {
    const { isDirector } = useContext(UserContext);

    return (
        <div className='order-bg'>
            <div className='order-container'>
                <div className='order-inf'>
                    <div>
                        <p className='order-inf-name'>Название изделия</p>
                        <p className='order-inf-text'>Дата поступления заказа: 01.01.2024</p>
                        <p className='order-inf-text'>Размер: </p>
                        <p className='order-inf-text'>Материалы: </p>
                        <p className='order-inf-text'>Дополнительная информация: </p>
                    </div>
                    <div className='order-status'></div>
                </div>
                <div className='order-btns'>
                    <button 
                        className='close-btn' 
                        onClick={ onCloseOrderBtnClick }
                    >
                        Закрыть
                    </button>
                    { !isDirector && <ChangeStatusBtn onClick={ onChangeStatusBtnClick }/> }
                </div>
            </div>
        </div>
        
    )
}

export default Order;