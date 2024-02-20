import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useTypedDispatch} from '../../../utils/hooks/hooks';
import {useCallback} from 'react';
import {selectionActions} from '../../../redux/slices/selected';
import {Colors} from '../../../utils/constants';

const ClearBTN = () => {
  const dispatch = useTypedDispatch();
  const clearPressed = useCallback(
    () => dispatch(selectionActions.clear()),
    [],
  );

  return (
    <TouchableOpacity onPress={clearPressed} style={styles.btn}>
      <Text style={styles.text}>Clear</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.red,
    alignSelf: 'center',
  },
  text: {
    color: Colors.red,
    fontSize: 17,
  },
});

export default ClearBTN;
