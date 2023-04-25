export interface IconType {
  name: string;
  minX: number;
  minY: number;
  width: number;
  height: number;
  raw: string;
  attr?: ObjType;
}

export interface CustomizeIconType {
  name: string;
  width: number;
  height: number;
  minX?: number;
  minY?: number;
  raw?: string;
  attr?: ObjType;
  points?: string;
  polygons?: ObjType[];
  d?: string;
  paths?: ObjType[];
}

export interface ObjType {
  [key: string]: string;
}
