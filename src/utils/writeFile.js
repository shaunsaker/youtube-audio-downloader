import fs from 'fs';

export default function writeFile(path, data, onError, onSuccess) {
  fs.writeFile(path, JSON.stringify(data), 'utf8', (error) => {
    if (error) {
      onError(error);
    } else {
      onSuccess();
    }
  });
}
