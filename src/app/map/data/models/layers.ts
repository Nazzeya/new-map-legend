export type TranslatedLayersNamesMap = {
  [key: string]: string;
};

export interface IItem {
  pressure?: IPressure,
  region?: IRegion
}

export interface ICoord {
  lat: number,
  lng: number,
}

export interface IPressure {
  coord: ICoord,
  numberValue: number,
  colorValue: string
}

export interface IRegion {
  color: string,
}