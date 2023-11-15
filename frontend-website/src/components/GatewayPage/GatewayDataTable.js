
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const GatewayDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.domainId?.name}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.encrypt}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.signature}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.key}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="domainId" header="Domain.Gateway" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="encrypt" header="Encrypt" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="signature" header="Signature" body={pTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="key" header="Key" body={pTemplate3} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default GatewayDataTable;