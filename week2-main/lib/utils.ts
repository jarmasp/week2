// read the contents of a text file, code it using run length encoding and decode it

import { writeFileSync, existsSync, promises } from 'fs';

const checkFile = async (file: string): Promise<boolean> => {
  return /\d/g.test(file)
}

const encode = async (file: string): Promise<string> => {
  return file.replace(
      /(.)\1+/g,
      (match) => { return `${match.length}${match[0]}` }
  );
}

const decode = async (file: string): Promise<string> => {
  return file.replace(
      /(\d+)(\D)/g,
      (_: string, num: number, char: string) => { return char.repeat(num) }
  );
}

const encodeDecode = async (path: string, option: string) => {
  try {
      if (existsSync(path)) {
      const file: string = await promises.readFile(path, 'utf-8')
      if (option === 'e') {
          if (await checkFile(file) === false) {
              await promises.copyFile(path, 'copy' + path)
              const encoded = await encode(file)
              writeFileSync(path, encoded)
          } else {
              throw new Error ("the file was already encoded or it's corrupted")
          }
      } else if (option === 'd') {
          if (await checkFile(file)) {
              await promises.copyFile(path, 'copy' + path)
              const decoded = await decode(file)
              writeFileSync(path, decoded)
          } else {
              throw new Error ("the file was already decoded or it's corrupted")
          }
          }
  } else {
      throw new Error ("the file doesn't exist")
  }
  }
  catch (err) {
    console.log(err)
  }
}

export default { checkFile, encode, decode, encodeDecode }