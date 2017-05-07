/**
 * Created by zhubg on 2017/2/17.
 */
import { AsyncStorage } from 'react-native';
import storage from 'react-native-storage';
var storages = new storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24 * 7,
    enableCache: true
});
global.Storage = storages;






export {storages};
