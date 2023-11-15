import { Button } from "primereact/button";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import client from "../../services/restClient";
import { InputText } from 'primereact/inputtext';

const SingleConnectionsPage = (props) => {
    const navigate = useNavigate();
    const urlParams = useParams();
    const [_entity, set_entity] = useState();

    const [bbRoutingId, setbbRoutingId] = useState([]);

    useEffect(() => {
        //on mount
        client
            .service("connections")
            .get(urlParams.singleConnectionsId, { query: { $populate: ["bbRoutingId"] }})
            .then((res) => {
                set_entity(res || {});
                const bbRoutingId = Array.isArray(res.bbRoutingId)
            ? res.bbRoutingId.map((elem) => ({ _id: elem._id, domainId: elem.domainId }))
            : res.bbRoutingId
                ? [{ _id: res.bbRoutingId._id, domainId: res.bbRoutingId.domainId }]
                : [];
        setbbRoutingId(bbRoutingId);
            })
            .catch((error) => {
                console.log({ error });
                props.alert({ title: "Connections", type: "error", message: error.message || "Failed get connections" });
            });
    }, []);

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
    };

    const goBack = () => {
        navigate("/connections", { replace: true });
    };

    return (
        <div className="col-12 flex flex-column align-items-center">
            <div className="col-10">
                <div className="flex align-items-center justify-content-start">
                    <Button className="p-button-text" icon="pi pi-chevron-left" onClick={() => goBack()} />
                    <h3 className="m-0">Connections</h3>
                </div>
                <p>connections/{urlParams.singleConnectionsId}</p>
            </div>
            <div className="grid col-10">
                <div className="card w-full">
            <label className="text-sm text-primary">B2B Routing Connection</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.bbRoutingId?.domainId}</p></div>
                    <label className="text-sm text-primary">From</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.from}</p></div>
                    <label className="text-sm text-primary">to</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.toext}</p></div>
                    <label className="text-sm text-primary">order</label>
                    <div className="ml-3"><p className="m-0 ml-3" >{_entity?.order}</p></div>
            <label className="text-sm">B2B Routing Connection</label>
            {bbRoutingId.map((elem) => (
                    <Link key={elem._id} to={`/bbrouting/${elem._id}`}>
                        <div className="card">
                            <p>{elem.domainId}</p>
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

export default connect(mapState, mapDispatch)(SingleConnectionsPage);
