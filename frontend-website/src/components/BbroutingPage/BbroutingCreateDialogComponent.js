import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';



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

const BbroutingCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [domainId, setdomainId] = useState([])
    const [domains, setdomains] = useState([])

    useEffect(() => {
        set_entity({});
    }, [props.show]);

    const onSave = async () => {
        let _data = {
            domainId: _entity.domainId,
            protocol: _entity.protocol,
        };

        setLoading(true);

        try {
            
        const result = await client.service("bbrouting").create(_data);
        const eagerResult = await client
            .service("bbrouting")
            .find({ query: { $limit: 100 ,  _id :  { $in :[result._id]}, $populate : [
                
                {
                    path : "domainId",
                    service : "domains",
                    select:["name"]
                }
            
            ] }});
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info bbrouting updated successfully" });
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
                        .service("domains")
                        .find({ query: { $limit: 100 } })
                        .then((res) => {
                            setdomains(res.data);
                            setdomainId(res.data.map((e) => { return { name: e['name'], value: e._id }}));
                        })
                        .catch((error) => {
                            console.log({ error });
                            props.alert({ title: "Domains", type: "error", message: error.message || "Failed get domains" });
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

    const domainIdOptions = domainId.map((elem) => ({ name: elem.name, value: elem.value }));

    return (
        <Dialog header="Create" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="bbrouting-create-dialog-component">
            <div>
                <p className="m-0">Domain.B2BRouting:</p>
                <MultiSelect value={_entity?.domainId} options={domainIdOptions} onChange={(e) => setValByKey("domainId", e.value)} />
            </div>
            <div>
                <p className="m-0">Protocol:</p>
                <InputText className="w-full mb-3" value={_entity?.protocol} onChange={(e) => setValByKey("protocol", e.target.value)}  />
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

export default connect(mapState, mapDispatch)(BbroutingCreateDialogComponent);
