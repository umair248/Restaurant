import EncryptedStorage from 'react-native-encrypted-storage';

var getSession = async data => {
  try {
    var session = await EncryptedStorage.getItem('user');
    return JSON.parse(session);
  } catch (error) {
    // console.log(error);
  }
};

var setSession = async data => {
  try {
    await EncryptedStorage.setItem('user', JSON.stringify(data));
  } catch (error) {
    // console.log(error);
  }
};

var clearSession = async () => {
  await EncryptedStorage.removeItem('user');
};

export {getSession, setSession, clearSession};
