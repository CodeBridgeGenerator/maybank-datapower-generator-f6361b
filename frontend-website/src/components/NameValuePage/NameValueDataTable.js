
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';


const NameValueDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.collectionId}</p>
    const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.name}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.value}</p>

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10} rowClassName="cursor-pointer">
            <Column field="moprh" header="Moprh Table Name"  style={{ minWidth: "8rem" }} />
            <Column field="collectionId" header="CollectionId" body={pTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="name" header="Name" body={pTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="value" header="Value" body={pTemplate3} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default NameValueDataTable;