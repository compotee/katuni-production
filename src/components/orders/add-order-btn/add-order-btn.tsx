import './add-order-btn-style.css'

interface AddOrderBtnProps {
    onClick: () => void
}

function AddOrderBtn({ onClick }: AddOrderBtnProps) {
    return (
        <button 
            className='add-order-btn'
            onClick={ onClick }
        > 
            Добавить заказ
        </button>
    )
}

export default AddOrderBtn;