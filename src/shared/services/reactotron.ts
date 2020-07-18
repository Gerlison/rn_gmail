import tron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-community/async-storage';

const Reactotron = tron
  .setAsyncStorageHandler?.(AsyncStorage)
  .configure()
  .useReactNative({
    asyncStorage: false,
    networking: {
      ignoreUrls: /symbolicate/,
    },
    errors: { veto: () => false },
    overlay: false,
  })
  .use(reactotronRedux());

if (__DEV__) {
  Reactotron?.connect?.().clear?.();
}

export default Reactotron;
