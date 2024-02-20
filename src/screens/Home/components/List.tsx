import {useEffect} from 'react';
import {ListRenderItem, ActivityIndicator, FlatList} from 'react-native';
import {useLazyGetUsersQuery} from '../../../redux/api/people';
import {ICharacter, ILikeFN} from '../../../utils/types';
import Character from './Character';
import {selectionActions} from '../../../redux/slices/selected';
import {useTypedDispatch, useTypedSelector} from '../../../utils/hooks/hooks';
import {ISortedBy, useSorting} from '../../../utils/hooks/sortData';

type IList = {
  page: number;
  sortedBy: ISortedBy;
  onMount: (count: number) => void;
};

const List = ({page, sortedBy, onMount}: IList) => {
  const [getUsers, {data, isLoading, isFetching, error}] =
    useLazyGetUsersQuery(undefined);

  useEffect(() => {
    getUsers(page);
  }, [page]);

  useEffect(() => {
    if (data) {
      onMount(data.count);
    }
  }, [data]);

  const dispatch = useTypedDispatch();
  const selector = useTypedSelector(store => store.selection);
  const KEY_EXTARACTOR = (item: ICharacter) => item.created;
  const like: ILikeFN = (name, gender, isSelected) =>
    dispatch(selectionActions.like({name, gender, isSelected}));
  const renderItem: ListRenderItem<ICharacter> = ({item}) => (
    <Character
      isSelected={selector.selected.includes(item.name)}
      onLikePressed={like}
      item={item}
    />
  );

  if (isFetching || isLoading || !data)
    return <ActivityIndicator size={'large'} color={'lightblue'} />;
  const sortedData = useSorting([...data.results], sortedBy);

  return (
    <FlatList
      keyExtractor={KEY_EXTARACTOR}
      data={sortedData}
      renderItem={renderItem}
    />
  );
};

export default List;
