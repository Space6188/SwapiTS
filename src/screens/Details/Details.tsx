import {useRoute} from '@react-navigation/native';
import {RootRouteProps} from '../../utils/types';
import {Linking, ScrollView, Text, View} from 'react-native';
import Field from './components/ListItem';

const DetailsScreen = () => {
  const data = useRoute<RootRouteProps<'character'>>();
  return (
    <ScrollView style={{marginTop: 10}}>
      {Object.entries(data.params).map(([key, value]) => (
        <Field keyValue={key} value={value as string} key={key} />
      ))}
    </ScrollView>
  );
};

export default DetailsScreen;
