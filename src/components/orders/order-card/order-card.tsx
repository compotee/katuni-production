import { useContext } from 'react';
import { UserContext } from '../../../contextes/UserContext';
import ChangeStatusBtn from '../change-status-btn/change-status-btn';

import './order-card-style.css'

interface OrderCardProps {
    onOpenOrderBtnClick: () => void
    onChangeStatusBtnClick: () => void
}

function OrderCard({ onOpenOrderBtnClick, onChangeStatusBtnClick }: OrderCardProps) {
    const { isDirector } = useContext(UserContext);

    return (
        <div className='order-card-container'>
            <div className='order-card-inf'>
                <div>
                    <p className='order-card-inf-name'>Название изделия</p>
                    <p className='order-card-inf-date'>Дата поступления заказа: 01.01.2024</p>
                </div>
                <div className='order-card-status'></div>
            </div>
            <div className='order-card-btns'>
                <button className='more-detailed-btn' onClick={ onOpenOrderBtnClick }>Подробнее</button>
                { !isDirector && <ChangeStatusBtn onClick={ onChangeStatusBtnClick }/> }
            </div>
        </div>
    )
}

export default OrderCard;