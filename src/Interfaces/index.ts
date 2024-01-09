export interface IconProps {
  width?: string;
  height?: string;
}

export interface UploadDragAndDropProps {
  setSelectedFile: (file: File | null) => void;
}