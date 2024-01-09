import React, { useCallback, useEffect, useState } from "react";
import "./index.css";
import { useForm } from "react-hook-form";
import UploadDragAndDrop from "../../Components/UploadDragAndDrop";
import { PictureIcon } from "../../assets/svg";
import bytesToMB from "../../Utils/bytesToMB";
import ToggleButton from "../../Components/ToggleButton";
import { ClockIcon } from "../../assets/svg/ClockIcon";

const HomeScreen = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isToleranceWindonOn, setIsToleranceWindonOn] = useState(true);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
  } = useForm({
    defaultValues: {
      selectedImportName: "",
    },
  });

  useEffect(() => {
    console.log(selectedFile);
  }, [selectedFile]);

  const onSubmitFullRegister = async (data: any) => {
    console.log(data);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 main-box">
      <div className="container file-upload-box">
        <button className="leave-button">X</button>
        <div className="file-upload-box-form px-5">
          <h1 className="title-file-upload underline">Document Upload</h1>

          <form onSubmit={handleSubmit(onSubmitFullRegister)}>
            <div className="container">
              <div className="row">
                <div className="col-7">
                  <div className="col-12">
                    <div className="form-group">
                      <select
                        id="selectedImportName"
                        className="form-select"
                        style={{ outline: "none" }}
                        {...register("selectedImportName", {
                          required: "You should select a ",
                        })}
                      >
                        <option value="" disabled selected>
                          Select Import Name:
                        </option>
                        <option value="users">Users</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="airlines">Airlines</option>
                      </select>
                    </div>
                  </div>
                  <hr />
                  <div className="col-12">
                    <label>Select a manifest that you'd like to import</label>
                    <div className="container">
                      <UploadDragAndDrop setSelectedFile={setSelectedFile} />
                    </div>
                  </div>
                  <hr />
                  <div className="col-12">
                    <div className="container">
                      <div className="row">
                        <div className="col-1">
                          <PictureIcon width={"30"} height={"30"} />
                        </div>
                        <div className="col-11">
                          <div className="row">
                            <div className="col-12 file-uploaded-text">
                              {selectedFile && (
                                <>
                                  <div className="file-name">
                                    {selectedFile.name}
                                  </div>
                                  <div className="file-size">
                                    {bytesToMB(selectedFile.size)}MB
                                  </div>
                                </>
                              )}
                              {!selectedFile && (
                                <div>No file has been selected</div>
                              )}
                            </div>
                            <div className="col-12">
                              <div
                                className="progress"
                                style={{ width: "100%" }}
                              >
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{ width: `${uploadProgress}%` }}
                                  aria-valuenow={uploadProgress}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <hr />
                  <div className="col-12">
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <label>Elapse Data Checking:</label>
                        </div>
                        <div className="col-12">
                          <label>No Elapsed Dates!</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="col-12">
                    <label>Tolerance Window:</label>
                    <div className="row">
                      <div className="col-6 d-flex align-items-center">
                        <div className="toggle-container">
                          <ToggleButton
                            isOpen={isToleranceWindonOn}
                            setIsOpen={setIsToleranceWindonOn}
                          />
                          <span className="ms-2">
                            TOGGLE {isToleranceWindonOn ? "on" : "off"}
                          </span>
                        </div>
                      </div>
                      <div className="col-1 vertical-divider"></div>
                      <div className="col-5 d-flex align-items-center">
                        <ClockIcon width={"30"} height={"30"} />
                        <span className="ms-2">Select Tolerance Level</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-5">
                  <div className="col-12">
                    <label>Split schedule using social distancing?</label>
                    <div className="d-flex mt-2">
                      <div className="form-check me-4 radio-social-distancing">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="form-check radio-social-distancing">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="col-12">
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <label>Location Checking:</label>
                        </div>
                        <div className="col-12">
                          <label>All Available!</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="col-12">
                    <div className="container">
                      <label>Client:</label>
                    </div>
                    <div className="d-flex mt-2">
                      <div className="form-check me-4 radio-social-distancing">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Single
                        </label>
                      </div>
                      <div className="form-check radio-social-distancing">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          Multiple
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <ul>
                      <li>
                        Conducted maintenance, bug fixes, and made optimizations
                        using technologies such as JavaScript, TypeScript,
                        React, Meteor.js, and MongoDB.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <button className="uploadManifestButton" type="submit">
              Continue Import
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
