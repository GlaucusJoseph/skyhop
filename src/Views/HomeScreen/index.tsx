import React, { useEffect, useState } from "react";
import "./index.css";
import { useForm } from "react-hook-form";
import UploadDragAndDrop from "../../Components/UploadDragAndDrop";
import { PictureIcon } from "../../assets/svg";
import bytesToMB from "../../Utils/bytesToMB";
import ToggleButton from "../../Components/ToggleButton";
import { ClockIcon } from "../../assets/svg/ClockIcon";
import { IMPORT_NAMES, CLIENTS } from "../../constants";

const HomeScreen = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isToleranceWindonOn, setIsToleranceWindonOn] = useState(true);

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: {
      selectedImportName: "",
      socialDistancing: "no",
      numberClients: "single",
      selectTestingCenter1: "",
      selectTestingCenter2: "",
      selectTestingCenter3: "",
      selectTestingCenter4: "",
    },
  });

  useEffect(() => {
    if (selectedFile) {
      const duration = 1500;
      const target = 100;
      const intervalTime = duration / target;

      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress++;
        setUploadProgress(currentProgress);

        if (currentProgress >= target) {
          clearInterval(interval);
        }
      }, intervalTime);

      return () => clearInterval(interval);
    }
  }, [selectedFile]);

  const onSubmitForm = async (data: any) => {
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
          <form onSubmit={handleSubmit(onSubmitForm)}>
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
                        <option value="" disabled>
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
                    <label className="special-text-bold">
                      Tolerance Window:
                    </label>
                    <div className="row">
                      <div className="col-6 d-flex align-items-center">
                        <div className="toggle-container">
                          <ToggleButton
                            isOpen={isToleranceWindonOn}
                            setIsOpen={setIsToleranceWindonOn}
                          />
                          <span className="ms-2 special-text">
                            TOGGLE {isToleranceWindonOn ? "on" : "off"}
                          </span>
                        </div>
                      </div>
                      <div className="col-1 vertical-divider"></div>
                      <div className="col-5 d-flex align-items-center">
                        <ClockIcon width={"30"} height={"30"} />
                        <span className="ms-2 special-text">
                          Select Tolerance Level
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-5">
                  <div className="col-12">
                    <label className="special-text-bold">
                      Split schedule using social distancing?
                    </label>
                    <div className="d-flex mt-1">
                      <div className="form-check me-4 radio-social-distancing">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="social-distancing-yes"
                          value="yes"
                          {...register("socialDistancing")}
                        />
                        <label
                          className="form-check-label special-text"
                          htmlFor="social-distancing-yes"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="form-check radio-social-distancing">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="social-distancing-no"
                          value="no"
                          {...register("socialDistancing")}
                        />
                        <label
                          className="form-check-label special-text"
                          htmlFor="social-distancing-no"
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
                          <label className="special-text-bold">
                            Location Checking:
                          </label>
                        </div>
                        <div className="col-12">
                          <label className="sucess-text">All Available!</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="col-12">
                    <label className="special-text-bold">Client:</label>
                    <div className="d-flex mt-1">
                      <div className="form-check me-4 radio-social-distancing">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="client-single"
                          value="single"
                          {...register("numberClients")}
                        />
                        <label
                          className="form-check-label special-text"
                          htmlFor="client-single"
                        >
                          Single
                        </label>
                      </div>
                      <div className="form-check radio-social-distancing">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="client-multiple"
                          value="multiple"
                          {...register("numberClients")}
                        />
                        <label
                          className="form-check-label special-text"
                          htmlFor="client-multiple"
                        >
                          Multiple
                        </label>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <div>
                        <span className="special-text">Testing Center 1</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <select
                          id="selectTestingCenter1"
                          className="form-select special-text"
                          {...register("selectTestingCenter1", {
                            required: "You should select a ",
                          })}
                        >
                          <option value="" disabled selected>
                            Select Client
                          </option>
                          {CLIENTS.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <ClockIcon width={"30"} height={"30"} />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <div>
                        <span className="special-text">Testing Center 2</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <select
                          id="selectTestingCenter2"
                          className="form-select special-text"
                          {...register("selectTestingCenter2", {
                            required: "You should select a ",
                          })}
                        >
                          <option value="" disabled selected>
                            Select Client
                          </option>
                          {CLIENTS.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <ClockIcon width={"30"} height={"30"} />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <div>
                        <span className="special-text">Testing Center 3</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <select
                          id="selectTestingCenter3"
                          className="form-select special-text"
                          {...register("selectTestingCenter3", {
                            required: "You should select a ",
                          })}
                        >
                          <option value="" disabled selected>
                            Select Client
                          </option>
                          {CLIENTS.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <ClockIcon width={"30"} height={"30"} />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <div>
                        <span className="special-text">Testing Center 4</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <select
                          id="selectTestingCenter4"
                          className="form-select special-text"
                          {...register("selectTestingCenter4", {
                            required: "You should select a ",
                          })}
                        >
                          <option value="" disabled selected>
                            Select Client
                          </option>
                          {CLIENTS.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <ClockIcon width={"30"} height={"30"} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <h5 className="text-center special-text-bold">
                Data in the import file is correct. Please press Continue to
                import.
              </h5>
              <div className="d-flex justify-content-center">
                <button className="button-continue me-2" type="submit">
                  Continue Import
                </button>
                <button className="button-cancel" type="button">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
