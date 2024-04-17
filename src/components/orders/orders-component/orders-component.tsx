import FilterByTime from "../filter-by-time/filter-by-time";
import FilterUpDown from "../filter-up-down/filter-up-down";
import OrderCard from "../order-card/order-card";

import './orders-component-style.css'

function OrdersComponent() {
    return (
        <div className="orders-container">
            <FilterByTime/>
            <div className="orders-list">
                <FilterUpDown/>
                <OrderCard/>
            </div>
        </div>
    )
}

export default OrdersComponent;