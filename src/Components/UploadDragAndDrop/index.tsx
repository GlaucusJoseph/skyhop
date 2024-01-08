import { useCallback, useState } from "react";
import "./index.css";
import { FileIcon } from "../../assets/svg";

const UploadDragAndDrop = (props: any) => {
  const { setSelectedFile } = props;

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="dnd-box-external">
      <div
        className="dnd-box-internal"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          onChange={handleChange}
          className="hide-input"
          id="fileInput"
        />
        <div className="container mb-2">
          <FileIcon width={"30"} height={"30"} />
        </div>
        <label htmlFor="fileInput">Drag & Drop Here Or Browse</label>
      </div>
      <button className="uploadManifestButton" type="button">
        Upload Manifest
      </button>
    </div>
  );
};

export default UploadDragAndDrop;
