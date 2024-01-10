export interface IconProps {
  width?: string;
  height?: string;
}

export interface UploadDragAndDropProps {
  setSelectedFile: (file: File | null) => void;
}

export interface FormValues {
  selectedImportName: string;
  socialDistancing: string;
  numberClients: string;
  selectTestingCenter1: string;
  selectTestingCenter2: string;
  selectTestingCenter3: string;
  selectTestingCenter4: string;
}
