import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux';
import {RootState, TypedDispatch} from '../types';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch: () => TypedDispatch = useDispatch;
