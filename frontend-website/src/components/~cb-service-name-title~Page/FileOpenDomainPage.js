
import React from "react";
import FileOpenLayout from "../Layouts/FileOpenLayout";
import { connect } from "react-redux";
import ~cb-service-name-title~Page from "./~cb-service-name-singular-title~Page";

const ~cb-service-name-singular-title~FileOpenPage = (props) => {
  return (
    <FileOpenLayout>
      <div className="pt-6 mt-8">
        <div className="card p-0 overflow-hidden ">
          <div
            className="flex justify-content-between p-4 mb-6 shadow-2"
            style={{
              backgroundImage:
                "linear-gradient(to right top, #d30078, #d1008f, #c600ab, #af00ca, #8312eb)",
            }}
          >
            <div className="flex align-items-center text-white">
              <p className="text-4xl text-white">
                {props.selectedFileOpen?.name + " > "} ~cb-service-label~
              </p>
            </div>
          </div>
          <~cb-service-name-singular-title~Page />
        </div>
      </div>
    </FileOpenLayout>
  );
};

const mapState = (state) => {
  const { selectedFileOpen } = state.fileOpen;
  return { selectedFileOpen };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(~cb-service-name-singular-title~FileOpenPage);