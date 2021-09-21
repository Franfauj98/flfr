export class pictureTitlePath {
  path: string = '';
  text: string = '';


  constructor(path: string, text: string) {
    this.path = path;
    this.text = text;
  }
}

export class nestedPictureTitlePath {
  pictureTitlePath: pictureTitlePath;
  nested: pictureTitlePath[] = [];

  constructor(pictureTitlePath: pictureTitlePath, nested: pictureTitlePath[]) {
    this.pictureTitlePath = pictureTitlePath;
    this.nested = nested;
  }
}
