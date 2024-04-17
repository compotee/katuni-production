import Header from "../../components/header/header";
import Orders from "../../components/orders/orders-component/orders-component";

import "./main-page-style.css";


function MainPage() {
    return(
        <div>
            <Header/>
            <div className="main-page-container">
                <Orders/>
            </div>
        </div>
    )
}

export default MainPage;