import "./index.css";
import { FileIcon } from "../../assets/svg";

interface UploadDragAndDropProps {
  setSelectedFile: (file: File | null) => void;
}

const UploadDragAndDrop: React.FC<UploadDragAndDropProps> = ({
  setSelectedFile,
}) => {
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
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
    }
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
        <label htmlFor="fileInput" className="special-text">
          Drag & Drop Here Or <span className="special-text-bold">Browse</span>
        </label>
      </div>
      <button className="upload-manifest-button" type="button">
        Upload Manifest
      </button>
    </div>
  );
};

export default UploadDragAndDrop;
