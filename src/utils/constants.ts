import {Dimensions} from 'react-native';

export enum Routes {
  HOME = 'Fans',
  DETAILS = 'DETAILS',
}

export enum Colors {
  black = '#000',
  white = '#fff',
  red = 'red',
  link = '#0000EE',
  shadow = 'rgba(40,40,40,.3)',
}

export const BASE_URL = 'https://swapi.dev/api/';
export const {width: WIDTH_SCREEN} = Dimensions.get('window');

export const ICON_SIZE = 25;
