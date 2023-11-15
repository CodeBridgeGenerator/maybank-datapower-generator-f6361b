import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import { Dropdown } from 'primereact/dropdown';


const typeArray = ["binary","xml","x12","edifact"];
const typeOptions = typeArray.map((x,i) => ({ name: x, value: i }));

const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const ConnectionsCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [bbRoutingId, setbbRoutingId] = useState([])
    const [bbrouting, setbbrouting] = useState([])

    useEffect(() => {
        set_entity({});
    }, [props.show]);

    const onSave = async () => {
        let _data = {
            bbRoutingId: _entity.bbRoutingId,
            from: _entity.from,
            toext: _entity.toext,
            type: _entity.type,
            order: _entity.order,
        };

        setLoading(true);

        try {
            
        const result = await client.service("connections").create(_data);
        const eagerResult = await client
            .service("connections")
            .find({ query: { $limit: 100 ,  _id :  { $in :[result._id]}, $populate : [
                
                {
                    path : "bbRoutingId",
                    service : "bbrouting",
                    select:["domainId"]
                }
            
            ] }});
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info connections updated successfully" });
        props.onCreateResult(eagerResult.data[0]);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
        }
        setLoading(false);
    };

     useEffect(() => {
                    //on mount
                    client
                        .service("bbrouting")
                        .find({ query: { $limit: 100 } })
                        .then((res) => {
                            setbbrouting(res.data);
                            setbbRoutingId(res.data.map((e) => { return { name: e['domainId'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "Bbrouting", type: "error", message: error.message || "Failed get bbrouting" });
                        });
                }, []);

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };

    const bbRoutingIdOptions = bbRoutingId.map((elem) => ({ name: elem.name, value: elem.value }));

    return (
        <Dialog header="Create" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="connections-create-dialog-component">
            <div>
                <p className="m-0">B2B Routing Connection:</p>
                <MultiSelect value={_entity?.bbRoutingId} options={bbRoutingIdOptions} onChange={(e) => setValByKey("bbRoutingId", e.value)} />
            </div>
            <div>
                <p className="m-0">From:</p>
                <InputText className="w-full mb-3" value={_entity?.from} onChange={(e) => setValByKey("from", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">to:</p>
                <InputText className="w-full mb-3" value={_entity?.toext} onChange={(e) => setValByKey("toext", e.target.value)}  />
            </div>
            <div>
                <p className="m-0">Type:</p>
                <Dropdown value={_entity?.type} optionLabel="name" optionValue="value" options={typeOptions} onChange={(e) => setValByKey("type", e.value)} />
            </div>
            <div>
                <p className="m-0">order:</p>
                <InputText type="number" className="w-full mb-3" value={_entity?.order} onChange={(e) => setValByKey("order", e.target.value)}  />
            </div>
                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    return {}
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(ConnectionsCreateDialogComponent);
