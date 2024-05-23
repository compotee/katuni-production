import { useRef } from 'react';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import { ORDERS } from '../../server/orders';

import './excel-export-btn-style.css'


function ExcelExport() {
    const tableRef = useRef(null);

    return(
        <div>
            <DownloadTableExcel
                filename="Orders"
                currentTableRef={tableRef.current}
            >
                <button className="excel-export-btn">Скачать таблицу всех заказов .xls</button>
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
                </tbody>
            </table>
        </div>
        
        
    )
}

export default ExcelExport;