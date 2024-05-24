import { useRef } from 'react';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import { ORDERS } from '../../server/orders';

// import exportImg from './img/export.svg'
import './excel-export-btn-style.css'


function ExcelExport() {
    const tableRef = useRef(null);

    let newOrderCount = 0;
    let currentOrdersCount = 0;
    let completedOrdersCount = 0;

    ORDERS.forEach((element) => {
        if (element.status === "Новый") {
            newOrderCount += 1;
        } else if (element.status === "Текущий") {
            currentOrdersCount += 1;
        } else {
            completedOrdersCount += 1;
        }
            
    })

    return(
        <div>
            <DownloadTableExcel
                filename="Orders"
                currentTableRef={tableRef.current}
            >
                <button className="excel-export-btn">
                    Скачать таблицу всех заказов .xls
                    {/* <img src={ exportImg } alt="" /> */}
                </button>
            </DownloadTableExcel>
            <table className='table' ref={tableRef}>
                <tbody>
                    <tr>
                        <th>Название</th>
                        <th>Статус</th>
                        <th>Дата поступления заказа</th>
                        <th>Швея</th>
                        <th>Размер</th>
                        <th>Рост</th>
                        <th>Дополнительная иформация</th>
                    </tr>
                    {
                        ORDERS.map((element) => {
                            return(
                                <tr>
                                    <td>{ element.name }</td>
                                    <td>{ element.status }</td>
                                    <td>{ element.createDate }</td>
                                    <td>{ element.dressmakerId }</td>
                                    <td>{ element.size }</td>
                                    <td>{ element.height }</td>
                                    <td>{ element.info }</td>
                                </tr>
                                
                        )})
                    }
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Всего заказов</th>
                        <th>Новый</th>
                        <th>Текущие</th>
                        <th>Завершенные</th>
                    </tr>
                    <tr>
                        <td>{ ORDERS.length }</td>
                        <td>{ newOrderCount }</td>
                        <td>{ currentOrdersCount }</td>
                        <td>{ completedOrdersCount }</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        
    )
}

export default ExcelExport;