import React, { useCallback, useEffect, useState } from "react";
import "./index.css";
import { useForm } from "react-hook-form";
import UploadDragAndDrop from "../../Components/UploadDragAndDrop";
import { PictureIcon } from "../../assets/svg";
import bytesToMB from "../../Utils/bytesToMB";
import ToggleButton from "../../Components/ToggleButton";
import { ClockIcon } from "../../assets/svg/ClockIcon";
import { IMPORT_NAMES } from "../../constants";

const HomeScreen = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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
    console.log("=========================");
    console.log(data);
    console.log(selectedFile);
    console.log("=========================");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 main-box">
      <div className="container file-upload-box">
        <button className="leave-button">X</button>
        <div className="file-upload-box-form px-5">
          <h1 className="title-file-upload underline special-text-bold">
            Document Upload
          </h1>
          <form onSubmit={handleSubmit(onSubmitFullRegister)}>
            <div className="container">
              <div className="row">
                <div className="col-7">
                  <div className="col-12">
                    <div className="form-group">
                      <select
                        id="selectedImportName"
                        className="form-select special-text-bold"
                        {...register("selectedImportName", {
                          required: "You should select an import name",
                        })}
                      >
                        <option value="" disabled selected>
                          Select Import Name:
                        </option>
                        {IMPORT_NAMES.map((name) => (
                          <option key={name.value} value={name.value}>
                            {name.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <hr className="shorter-hr" />
                  <div className="col-12">
                    <label className="special-text-bold mb-2">
                      Select a manifest that you'd like to import
                    </label>
                    <UploadDragAndDrop setSelectedFile={setSelectedFile} />
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
                                  <div className="file-name-grey">
                                    {selectedFile.name}
                                  </div>
                                  <div className="file-size">
                                    {bytesToMB(selectedFile.size)}MB
                                  </div>
                                </>
                              )}
                              {!selectedFile && (
                                <div className="file-name-grey">
                                  No file has been selected
                                </div>
                              )}
                            </div>
                            <div className="col-12">
                              <div
                                className="progress progress-custom"
                                style={{ width: "100%" }}
                              >
                                <div
                                  className="progress-bar progress-bar-custom-color"
                                  role="progressbar"
                                  style={{ width: `34%` }}
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
                  <hr className="shorter-hr" />
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12">
                        <label className="special-text-bold">
                          Elapse Data Checking:
                        </label>
                      </div>
                      <div className="col-12">
                        <label className="sucess-text ">
                          No Elapsed Dates!
                        </label>
                      </div>
                    </div>
                  </div>
                  <hr className="shorter-hr" />
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
                    <label>Client:</label>
                    <div className="d-flex mt-2">
                      <div className="form-check me-4 radio-social-distancing">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="clientAmount"
                          id="clientAmount1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="clientAmount1"
                        >
                          Single
                        </label>
                      </div>
                      <div className="form-check radio-social-distancing">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="clientAmount"
                          id="clientAmount2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="clientAmount2"
                        >
                          Multiple
                        </label>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span>Testing Center 1</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <select
                          id="selectedImportName"
                          className="form-select"
                          style={{ outline: "none", width: "auto" }}
                          {...register("selectedImportName", {
                            required: "You should select a ",
                          })}
                        >
                          <option value="" disabled selected>
                            Select Client
                          </option>
                          <option value="uber">Uber</option>
                          <option value="american">AA</option>
                          <option value="spirit">Spirit</option>
                          <option value="alaska">Alaska</option>
                        </select>
                        <ClockIcon width={"30"} height={"30"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h5>
              Data in the import file is correct. Please press Continue to
              import.
            </h5>
            <button className="upload-manifest-button" type="submit">
              Continue Import
            </button>
            <button className="upload-manifest-button" type="submit">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
