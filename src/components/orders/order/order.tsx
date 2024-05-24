import { useContext } from 'react';
import { UserContext } from '../../../contextes/UserContext';
import ChangeStatusBtn from '../change-status-btn/change-status-btn';
import { ORDERS } from '../../../server/orders';
import { USERS } from '../../../server/users';

import './order-style.css'

interface OrderProps {
    onCloseOrderBtnClick: () => void,
    onChangeStatusBtnClick: () => void,
    orderId: number,
}

function Order({ onCloseOrderBtnClick, onChangeStatusBtnClick, orderId }: OrderProps) {
    const { isDirector } = useContext(UserContext);
    const order = ORDERS[orderId - 1]

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
        <div className='order-bg'>
            <div className='order-container'>
                <div className='order-inf'>
                    <div>
                        <p className='order-inf-name'>{ order.name }</p>
                        <div className='order-inf-text'>Дата поступления заказа: <span className='order-inf-text-bg'>{ order.createDate }</span></div>
                        { isDirector &&  <div className='order-inf-text'>Швея: <span className='order-inf-text-bg'>{ USERS[order.dressmakerId].name }</span></div>}
                        <div className='order-inf-text'>Размер: <span className='order-inf-text-bg'>{ order.size }</span></div>
                        <div className='order-inf-text'>Рост: <span className='order-inf-text-bg'>{ order.height }</span></div>
                        <div className='order-inf-text'>Материалы: <span className='order-inf-text-bg'>{ order.materials }</span></div>
                        { order.info.length !== 0 && <div className='order-inf-text'>Дополнительная информация: <span className='order-inf-text-bg'>{ order.info }</span></div> }   
                    </div>
                    <div className='order-status' style={ order.status === 'Новый' ? newOrderStyle : (order.status === 'Текущий' ? currentStyle : completedStyle) }></div>
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