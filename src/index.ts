type PrimitiveObject = {
  [key: string]: any
}

declare const jsonStorage: {
  setItem: (key: string | number, data: PrimitiveObject, useSession?: boolean) => void;
  getItem: (key: string | number, useSession?: boolean) => PrimitiveObject;
  removeItem: (key: string | number, useSession?: boolean) => void;
}

export default jsonStorage
