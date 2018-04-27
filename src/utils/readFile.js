import fs from 'fs';

export default function writeFile(path, onError, onSuccess) {
  fs.readFile(path, (error, data) => {
    if (error) {
      onError(error);
    }

    onSuccess(data);
  });
}
