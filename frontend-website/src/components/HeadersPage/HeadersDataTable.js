
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const HeadersDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.domainId?.name}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.loadbalancer}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.server}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.serverport}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.healthport}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.evaluator}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="domainId" header="Domain.Header" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="loadbalancer" header="Load Balancer" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="server" header="Server" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="serverport" header="serverport" body={pTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="healthport" header="healthport" body={pTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="evaluator" header="Evaluator" body={pTemplate5} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default HeadersDataTable;