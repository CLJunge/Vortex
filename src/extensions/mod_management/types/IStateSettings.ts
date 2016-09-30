import { IAttributeState } from './IAttributeState';

export interface IStatePaths {
  base: string;
  download: string;
  install: string;
}

export interface IStateModSettings {
  paths: IStatePaths;
  modlistState: { [id: string]: IAttributeState };
}
