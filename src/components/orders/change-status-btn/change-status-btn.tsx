import './change-status-btn-style.css'

interface ChangeStatusBtnProps {
    onClick: () => void
}

function ChangeStatusBtn({ onClick }: ChangeStatusBtnProps) {
    return (
        <button 
            className='change-status-btn'
            onClick={ onClick }
        > 
            Взять в работу
        </button>
    )
}

export default ChangeStatusBtn;