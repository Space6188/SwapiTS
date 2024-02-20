import {RouteProp} from '@react-navigation/native';
import store from '../redux/store';

export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch = typeof store.dispatch;

export type IHandlePaginationButton = {children: string; onPress: () => void};

export type ICharacter = {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films?: any[] | null;
  gender: IGenders;
  hair_color: string;
  height: number;
  homeworld: string;
  mass: number;
  name: string;
  skin_color: string;
  species?: any[] | null;
  starships?: any[] | null;
  url: string;
  vehicles?: any[] | null;
};

export type IGenders = 'male' | 'female' | 'n/a';

export type ICharcterElement = {
  item: ICharacter;
  onLikePressed: ILikeFN;
  isSelected: boolean;
};

export type ILikeFN = (
  name: string,
  gender: IGenders,
  isAlreadySelected: boolean,
) => void;

export type IGenderState = {
  selected: string[];
  male: number;
  female: number;
  'n/a': number;
};

export type RootStackParamList = {
  character: ICharacter;
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
