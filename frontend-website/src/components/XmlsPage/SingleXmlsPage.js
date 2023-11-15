import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SingleXmlsPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    const [domainId, setdomainId] = useState([]);

    useEffect(() => {
        //on mount
        client
            .service("xmls")
            .get(urlParams.singleXmlsId, { query: { $populate: ["domainId"] }})
            .then((res) => {
                set_entity(res || {});
                const domainId = Array.isArray(res.domainId)
            ? res.domainId.map((elem) => ({ _id: elem._id, name: elem.name }))
            : res.domainId
                ? [{ _id: res.domainId._id, name: res.domainId.name }]
                : [];
        setdomainId(domainId);
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Xmls", type: "error", message: error.message || "Failed get xmls" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/xmls", { replace: true });
    };

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Xmls</h3>
                </div>
                <p>xmls/{urlParams.singleXmlsId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">domainId</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.domainId?.name}</p></div>
            <label className="text-sm">domainId</label>
            {domainId.map((elem) => (
                    <Link key={elem._id} to={`/domains/${elem._id}`}>
                        <div className="card">
                            <p>{elem.name}</p>
                        </div>
                    </Link>
                ))}
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    return {};
};

const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
    //
});

export default connect(mapState, mapDispatch)(SingleXmlsPage);
