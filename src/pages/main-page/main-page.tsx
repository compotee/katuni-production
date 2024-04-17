import { useContext } from "react";
import { PageContext } from "../../contextes/PageContext";

import Header from "../../components/header/header";
import OrdersComponent from "../../components/orders/orders-component/orders-component";
import MaterialsComponent from "../../components/materials/materials-component/materials-component";

import "./main-page-style.css";


function MainPage() {
    const { isOrderPage } = useContext(PageContext);

    return(
        <div>
            <Header/>
            <div className="main-page-container">
                { isOrderPage ? <OrdersComponent/> : <MaterialsComponent/> }
            </div>
        </div>
    )
}

export default MainPage;