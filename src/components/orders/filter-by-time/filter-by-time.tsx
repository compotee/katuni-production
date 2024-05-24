import './filter-by-time-style.css'

function FilterByTime() {
    return (
        <div className="filter-container">
            <button className='not-work'>Новые</button>
            <button className='not-work'>Текущие</button>
            <button className='not-work'>Завершенные</button>
            <button className='filter-btn'>Все</button>
        </div>
    )
}

export default FilterByTime;