import './filter-by-time-style.css'

function FilterByTime() {
    return (
        <div className="filter-container">
            <button>Новые</button>
            <button>Текущие</button>
            <button>Завершенные</button>
            <button>Все</button>
        </div>
    )
}

export default FilterByTime;