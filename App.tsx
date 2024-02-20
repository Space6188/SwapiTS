import {Provider} from 'react-redux';
import Navigator from './src/navigation';
import store from './src/redux/store';
import {TouchableOpacity} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
