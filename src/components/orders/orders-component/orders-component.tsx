import { useState, useContext } from "react";
import { UserContext } from "../../../contextes/UserContext";
import FilterByTime from "../filter-by-time/filter-by-time";
import AddOrderBtn from "../add-order-btn/add-order-btn";
import FilterUpDown from "../filter-up-down/filter-up-down";
import OrderCard from "../order-card/order-card";
import ExcelExport from "../../../export/excel-export/excel-export-btn";
import Order from "../order/order";
import Notification from "../../notification/notification";
import AddOrder from "../add-order/add-order";
import { ORDERS } from "../../../server/orders";

import './orders-component-style.css'

function OrdersComponent() {
    const { isDirector } = useContext(UserContext);
    const [isOpenOrder, setIsOpenOrder] = useState(false);
    const [isChangeStatusNotification, setIsChangeStatusNotification] = useState(false);
    const [isAddOrder, setIsAddOrder] = useState(false);
    const [openOrderNumder, setOpenOrderNumder] = useState(0);

    function onOpenOrderBtnClick(orderId: number) {
        setOpenOrderNumder(orderId);
        setIsOpenOrder(true);
    }

    function onCloseOrderBtnClick() {
        setOpenOrderNumder(0);
        setIsOpenOrder(false);
    }

    function onOpenChangeStatusBtnClick() {
        setIsChangeStatusNotification(true);
    }

    function onCloseStatusBtnClick() {
        setIsChangeStatusNotification(false);
    }

    function onOpenAddOrderBtnClick() {
        setIsAddOrder(true);
    }

    function onCloseAddOrderBtnClick() {
        setIsAddOrder(false);
    }

    return (
        <div className="orders-container">
            <div className="filter-add-btn-container">
                <FilterByTime/>
                { isDirector && <AddOrderBtn onClick={ onOpenAddOrderBtnClick }/>}
            </div>
            <div className="orders-list">
                <FilterUpDown/>
                <div className="orders-list__items">
                    {
                        ORDERS.map((element) => {
                            return(
                                <OrderCard 
                                    onOpenOrderBtnClick={ onOpenOrderBtnClick }
                                    onChangeStatusBtnClick={ onOpenChangeStatusBtnClick }
                                    data={ element }
                                />
                            )
                        })
                    }
                </div>
            </div>
            <ExcelExport></ExcelExport>
            { isOpenOrder &&
                <Order 
                    onCloseOrderBtnClick={ onCloseOrderBtnClick }
                    onChangeStatusBtnClick={ onOpenChangeStatusBtnClick }
                    orderId={ openOrderNumder }
                />
            }
            { isChangeStatusNotification && 
                <Notification 
                    typeNotification="Изменить" 
                    onClick={ onCloseStatusBtnClick }
                /> 
            }
            { isAddOrder && 
                <AddOrder onCloseAddOrderBtnClick={ onCloseAddOrderBtnClick }/> 
            }
        </div>
    )
}

export default OrdersComponent;