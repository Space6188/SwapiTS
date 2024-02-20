import React, {memo, useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ISortedBy} from '../../utils/hooks/sortData';
import Counters from './components/Counter';
import List from './components/List';
import Pagination from './components/Pagination';
import Titles from './components/Titles';

const ListWithPagination = () => {
  const [page, setPage] = useState<number>(1);
  const [counter, setCount] = useState<number | null>(null);
  const [sortedBy, setSortedBy] = useState<ISortedBy>('A-Z');
  const onMount = (count: number) => {
    if (counter == null) {
      setCount(count);
    }
  };
  const onSortPressed = useCallback(() => {
    setSortedBy(prev => (prev == 'A-Z' ? 'Z-A' : 'A-Z'));
  }, []);
  const pageSetter = useCallback(
    (page: number) => setPage(prev => prev + page),
    [],
  );
  return (
    <>
      <Titles sortedBy={sortedBy} onSortPressed={onSortPressed} />
      <View style={{flex: 1}}>
        <List page={page} sortedBy={sortedBy} onMount={onMount} />
      </View>
      <Pagination pageSetter={pageSetter} page={page} total={counter} />
    </>
  );
};

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Counters />
      <ListWithPagination />
    </View>
  );
};

export default HomeScreen;
