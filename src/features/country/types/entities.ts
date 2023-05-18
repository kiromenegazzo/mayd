export type TRegion = 'Europe' | 'Asia' | 'Africa' | 'Oceania' | 'Americas';

export interface IFlag {
  png: string;
  svg: string;
  alt: string;
}

export interface IBaseName {
  common: string;
  official: string;
}

export interface INativeName {
  [key: string]: IBaseName;
}

export interface IName extends
  IBaseName {
  nativeName: INativeName;
}

export interface ILanguages {
  [key: string]: string;
}

export interface ICurrency {
  name: string;
  symbol: string;
}

export interface ICurrencies {
  [key: string]: ICurrency;
}

export interface ICountryBase {
  flags: IFlag;
  name: IName;
  capital: string[];
  region: TRegion;
  population: number;
}

export interface ICountryDetail extends
  ICountryBase {
  languages: ILanguages;
  currencies: ICurrencies;
  subregion: string;
  tld: string[];
  borders: string[];
}
