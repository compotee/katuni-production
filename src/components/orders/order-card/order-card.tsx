import './order-card-style.css'

function OrderCard() {
    return (
        <div className='order-card-container'>
            <div className='order-card-inf'>
                <div>
                    <p>Название изделия</p>
                    <p>Дата поступления заказа: 01.01.2024</p>
                </div>
                <div className='order-card-status'></div>
            </div>
            <div className='order-card-btns'>
                <button className='more-detailed-btn'>Подробнее</button>
                <button className='change-status-btn'> Взять в работу</button>
            </div>
        </div>
    )
}

export default OrderCard;