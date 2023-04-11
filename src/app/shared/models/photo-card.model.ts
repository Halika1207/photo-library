export interface Photo {
  id: string;
  url: string;
  download_url: string;
}

export interface PhotoBlob {
  photoUrl: Blob;
  id: string;
  isSelected?: boolean;
  encodedUrl?: Image64;
}

export type Image64 = string | ArrayBuffer | null | unknown;
