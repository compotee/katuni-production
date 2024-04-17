import './filter-style.css'

function Filter() {
    return (
        <div className="filter-container">
            <button>Новые</button>
            <button>Текущие</button>
            <button>Завершенные</button>
            <button>Все</button>
        </div>
    )
}

export default Filter;