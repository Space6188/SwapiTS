import {memo} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ICharcterElement} from '../../../utils/types';
import LikeSVG from '../../../assets/like-svgrepo-com.svg';
import UnLikeSVG from '../../../assets/like-o-svgrepo-com.svg';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import {Colors, ICON_SIZE, Routes} from '../../../utils/constants';

const Character = ({
  item,
  onLikePressed,
  isSelected = false,
}: ICharcterElement) => {
  const like = () => onLikePressed(item.name, item.gender, isSelected);
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  function onItemPressed() {
    navigation.navigate(Routes.DETAILS, {...item});
  }
  return (
    <>
      <TouchableOpacity onPress={onItemPressed} style={styles.box}>
        <TouchableOpacity onPress={like} style={styles.small}>
          {isSelected ? (
            <LikeSVG width={ICON_SIZE} height={ICON_SIZE} />
          ) : (
            <UnLikeSVG width={ICON_SIZE} height={ICON_SIZE} />
          )}
        </TouchableOpacity>
        <View style={styles.big}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
        <View style={styles.small}>
          <Text style={styles.text}>{item.gender}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const isEqual = (prev: ICharcterElement, next: ICharcterElement) => {
  return prev.isSelected == next.isSelected;
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomColor: Colors.shadow,
    borderBottomWidth: 0.5,
  },
  small: {
    width: '25%',
    paddingLeft: 15,
    justifyContent: 'center',
    zIndex: 2,
  },
  big: {
    paddingLeft: 15,
    justifyContent: 'center',
    width: '50%',
  },
  text: {color: Colors.black},
});

export default memo(Character, isEqual);
