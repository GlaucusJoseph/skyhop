import { useCallback, useState } from "react";
import "./index.css";

const UploadDragAndDrop = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      setSelectedFile(file);
    }
  };

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = useCallback(() => {
    console.log("Archivo para subir:", selectedFile);
  }, [selectedFile]);

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
          style={{ display: "none" }}
          id="fileInput"
        />
        <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
          Drag & Drop Here Or Browse
        </label>
        <br />
        {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      </div>
      <button onClick={handleSubmit} style={{ marginTop: "10px" }}>
        Subir Archivo
      </button>
    </div>
  );
};

export default UploadDragAndDrop;
