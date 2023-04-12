export interface Photo {
  id: string;
  url?: string;
  download_url?: string;
  author?: string;
}

export interface SelectedPhoto extends Photo {
  isSelected?: boolean;
}

export interface PhotoBlob extends SelectedPhoto {
  photoUrl: Blob;
  encodedUrl?: Image64;
}


export type Image64 = string | ArrayBuffer | null | unknown;
