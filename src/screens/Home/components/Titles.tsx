import React, {memo, useMemo} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import LikeSVG from '../../../assets/like-svgrepo-com.svg';
import SortSVG from '../../../assets/arrow-down-wide-short-svgrepo-com.svg';
import {ISortedBy} from '../../../utils/hooks/sortData';
import {Colors, ICON_SIZE} from '../../../utils/constants';

type ITitles = {
  sortedBy: ISortedBy;
  onSortPressed: () => void;
};

const Titles = ({sortedBy, onSortPressed}: ITitles) => {
  const style = useMemo(() => iconStyles(sortedBy), [sortedBy]);
  return (
    <View style={styles.box}>
      <View style={styles.small}>
        <LikeSVG width={ICON_SIZE} height={ICON_SIZE} />
      </View>
      <TouchableOpacity onPress={onSortPressed} style={[styles.big, ,]}>
        <SortSVG style={style.icon} width={ICON_SIZE} height={ICON_SIZE} />
        <Text style={styles.title}>Name</Text>
      </TouchableOpacity>
      <View style={styles.small}>
        <Text style={styles.title}>Gender</Text>
      </View>
    </View>
  );
};

const iconStyles = (sortedBy: ISortedBy) =>
  StyleSheet.create({
    icon: {
      transform: [{rotateZ: sortedBy != 'Z-A' ? '180deg' : '0deg'}],
      marginLeft: 10,
    },
  });

const styles = StyleSheet.create({
  box: {
    width: '100%',
    flexDirection: 'row',
    paddingBottom: 15,
    paddingTop: 10,
  },
  small: {
    width: '25%',
    paddingLeft: 15,
    justifyContent: 'center',
  },
  big: {
    paddingLeft: 15,
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: Colors.black,
    fontWeight: '500',
  },
});

export default memo(Titles, (prev, next) => {
  return prev.sortedBy == next.sortedBy;
});
