import filter from './img/fiter-icon.svg'

import './filter-up-down-style.css'

function FilterUpDown() {
    return (
        <button className='filter-btn'>
            <img src={ filter } alt="" />
        </button>
    )
}

export default FilterUpDown;