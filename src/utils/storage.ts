import {MMKV, Mode} from 'react-native-mmkv';

export const storage = new MMKV({
  id: `app-storage`,
  path: `${'AppVocability'}/storage`,
  encryptionKey: 'VocabilityKey',
  mode: Mode.MULTI_PROCESS,
  readOnly: true,
});
