import { useState, useContext } from "react";
import { UserContext } from "../../../contextes/UserContext";
import FilterByTime from "../filter-by-time/filter-by-time";
import AddOrderBtn from "../add-order-btn/add-order-btn";
import FilterUpDown from "../filter-up-down/filter-up-down";
import OrderCard from "../order-card/order-card";
import Order from "../order/order";
import Notification from "../../notification/notification";

import './orders-component-style.css'

function OrdersComponent() {
    const { isDirector } = useContext(UserContext);
    const [isOpenOrder, setIsOpenOrder] = useState(false);
    const [isChangeStatusNotification, setIsChangeStatusNotification] = useState(false);

    function onOpenOrderBtnClick() {
        setIsOpenOrder(true);
    }

    function onCloseOrderBtnClick() {
        setIsOpenOrder(false);
    }

    function onOpenChangeStatusBtnClick() {
        setIsChangeStatusNotification(true);
    }

    function onCloseStatusBtnClick() {
        setIsChangeStatusNotification(false);
    }

    return (
        <div className="orders-container">
            <div className="filter-add-btn-container">
                <FilterByTime/>
                { isDirector && <AddOrderBtn/>}
            </div>
            <div className="orders-list">
                <FilterUpDown/>
                <OrderCard 
                    onOpenOrderBtnClick={ onOpenOrderBtnClick }
                    onChangeStatusBtnClick={ onOpenChangeStatusBtnClick }
                />
            </div>
            { isOpenOrder &&
                <Order 
                    onCloseOrderBtnClick={ onCloseOrderBtnClick }
                    onChangeStatusBtnClick={ onOpenChangeStatusBtnClick }
                /> 
            }
            { isChangeStatusNotification && 
                <Notification 
                    typeNotification="Изменить" 
                    onClick={ onCloseStatusBtnClick }
                /> 
            }
        </div>
    )
}

export default OrdersComponent;