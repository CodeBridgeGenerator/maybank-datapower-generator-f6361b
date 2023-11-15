import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SingleHeadersPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    const [domainId, setdomainId] = useState([]);

    useEffect(() => {
        //on mount
        client
            .service("headers")
            .get(urlParams.singleHeadersId, { query: { $populate: ["domainId"] }})
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
                props.alert({ title: "Headers", type: "error", message: error.message || "Failed get headers" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/headers", { replace: true });
    };

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Headers</h3>
                </div>
                <p>headers/{urlParams.singleHeadersId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">Domain.Header</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.domainId?.name}</p></div>
                    <label className="text-sm text-primary">Load Balancer</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.loadbalancer}</p></div>
                    <label className="text-sm text-primary">Server</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.server}</p></div>
                    <label className="text-sm text-primary">serverport</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.serverport}</p></div>
                    <label className="text-sm text-primary">healthport</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.healthport}</p></div>
                    <label className="text-sm text-primary">Evaluator</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.evaluator}</p></div>
            <label className="text-sm">Domain.Header</label>
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

export default connect(mapState, mapDispatch)(SingleHeadersPage);
