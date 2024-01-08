import React, { useState } from "react";
import "./index.css";
import { useForm } from "react-hook-form";
import UploadDragAndDrop from "../../Components/UploadDragAndDrop";
import { PictureIcon } from "../../assets/svg";

const HomeScreen = () => {
  const [errorMessage, setErrorMessage] = useState("");

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
                      <UploadDragAndDrop />
                    </div>
                  </div>
                  <hr />
                  <div className="col-12">
                    <div className="container">
                      <PictureIcon width={"30"} height={"30"} />
                    </div>
                  </div>
                  <hr />
                  <div className="col-12">
                    <ul>
                      <li>
                        Conducted maintenance, bug fixes, and made optimizations
                        using technologies such as JavaScript, TypeScript,
                        React, Meteor.js, and MongoDB.
                      </li>
                      <li>
                        Designed a new login system and optimized all the stages
                        of the medical attention to accept users of different
                        nationalities expanding the business to Peru.
                      </li>
                      <li>
                        Supervised quality control through the use of end-to-end
                        testing tools like Cypress.
                      </li>
                      <li>
                        Created an appointment system that increased the number
                        of patients attended by doctors by 20% per month.
                      </li>
                      <li>
                        Integrated the Whatsapp Cloud API with the login system
                        resulting in a 10% cost reduction.
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <ul>
                      <li>
                        Conducted maintenance, bug fixes, and made optimizations
                        using technologies such as JavaScript, TypeScript,
                        React, Meteor.js, and MongoDB.
                      </li>
                      <li>
                        Designed a new login system and optimized all the stages
                        of the medical attention to accept users of different
                        nationalities expanding the business to Peru.
                      </li>
                      <li>
                        Supervised quality control through the use of end-to-end
                        testing tools like Cypress.
                      </li>
                      <li>
                        Created an appointment system that increased the number
                        of patients attended by doctors by 20% per month.
                      </li>
                      <li>
                        Integrated the Whatsapp Cloud API with the login system
                        resulting in a 10% cost reduction.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-5">
                  <div className="col-12">
                    <ul>
                      <li>
                        Conducted maintenance, bug fixes, and made optimizations
                        using technologies such as JavaScript, TypeScript,
                        React, Meteor.js, and MongoDB.
                      </li>
                      <li>
                        Designed a new login system and optimized all the stages
                        of the medical attention to accept users of different
                        nationalities expanding the business to Peru.
                      </li>
                      <li>
                        Supervised quality control through the use of end-to-end
                        testing tools like Cypress.
                      </li>
                      <li>
                        Created an appointment system that increased the number
                        of patients attended by doctors by 20% per month.
                      </li>
                      <li>
                        Integrated the Whatsapp Cloud API with the login system
                        resulting in a 10% cost reduction.
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <ul>
                      <li>
                        Conducted maintenance, bug fixes, and made optimizations
                        using technologies such as JavaScript, TypeScript,
                        React, Meteor.js, and MongoDB.
                      </li>
                      <li>
                        Designed a new login system and optimized all the stages
                        of the medical attention to accept users of different
                        nationalities expanding the business to Peru.
                      </li>
                      <li>
                        Supervised quality control through the use of end-to-end
                        testing tools like Cypress.
                      </li>
                      <li>
                        Created an appointment system that increased the number
                        of patients attended by doctors by 20% per month.
                      </li>
                      <li>
                        Integrated the Whatsapp Cloud API with the login system
                        resulting in a 10% cost reduction.
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <ul>
                      <li>
                        Conducted maintenance, bug fixes, and made optimizations
                        using technologies such as JavaScript, TypeScript,
                        React, Meteor.js, and MongoDB.
                      </li>
                      <li>
                        Designed a new login system and optimized all the stages
                        of the medical attention to accept users of different
                        nationalities expanding the business to Peru.
                      </li>
                      <li>
                        Supervised quality control through the use of end-to-end
                        testing tools like Cypress.
                      </li>
                      <li>
                        Created an appointment system that increased the number
                        of patients attended by doctors by 20% per month.
                      </li>
                      <li>
                        Integrated the Whatsapp Cloud API with the login system
                        resulting in a 10% cost reduction.
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <ul>
                      <li>
                        Conducted maintenance, bug fixes, and made optimizations
                        using technologies such as JavaScript, TypeScript,
                        React, Meteor.js, and MongoDB.
                      </li>
                      <li>
                        Designed a new login system and optimized all the stages
                        of the medical attention to accept users of different
                        nationalities expanding the business to Peru.
                      </li>
                      <li>
                        Supervised quality control through the use of end-to-end
                        testing tools like Cypress.
                      </li>
                      <li>
                        Created an appointment system that increased the number
                        of patients attended by doctors by 20% per month.
                      </li>
                      <li>
                        Integrated the Whatsapp Cloud API with the login system
                        resulting in a 10% cost reduction.
                      </li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <ul>
                      <li>
                        Conducted maintenance, bug fixes, and made optimizations
                        using technologies such as JavaScript, TypeScript,
                        React, Meteor.js, and MongoDB.
                      </li>
                      <li>
                        Designed a new login system and optimized all the stages
                        of the medical attention to accept users of different
                        nationalities expanding the business to Peru.
                      </li>
                      <li>
                        Supervised quality control through the use of end-to-end
                        testing tools like Cypress.
                      </li>
                      <li>
                        Created an appointment system that increased the number
                        of patients attended by doctors by 20% per month.
                      </li>
                      <li>
                        Integrated the Whatsapp Cloud API with the login system
                        resulting in a 10% cost reduction.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
