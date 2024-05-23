import { useContext } from 'react';
import { UserContext } from '../../../contextes/UserContext';
import ChangeStatusBtn from '../change-status-btn/change-status-btn';

import './order-card-style.css'

interface OrderCardProps {
    onOpenOrderBtnClick: (orderId: number) => void,
    onChangeStatusBtnClick: () => void,
    data: {
        orderId: number,
        status: string,
        name: string,
        createDate: string,
        dressmakerId: number,
        size: string,
        height: string,
        materials: string,
        info: string
    }
}

function OrderCard({ onOpenOrderBtnClick, onChangeStatusBtnClick, data }: OrderCardProps) {
    const { isDirector } = useContext(UserContext);

    const newOrderStyle = {
        background: "#FF0000"
    }

    const currentStyle = {
        background: "#FFFF00"
    }

    const completedStyle = {
        background: "#008000"
    }

    return (
        <div className='order-card-container'>
            <div className='order-card-inf'>
                <div>
                    <p className='order-card-inf-name'>{ data.name }</p>
                    <p className='order-card-inf-date'>Дата поступления заказа: { data.createDate }</p>
                </div>
                <div className='order-card-status' style={ data.status === 'Новый' ? newOrderStyle : (data.status === 'Текущий' ? currentStyle : completedStyle) }></div>
            </div>
            <div className='order-card-btns'>
                <button className='more-detailed-btn' onClick={() => onOpenOrderBtnClick(data.orderId) }>Подробнее</button>
                { !isDirector && <ChangeStatusBtn onClick={ onChangeStatusBtnClick }/> }
            </div>
        </div>
    )
}

export default OrderCard;