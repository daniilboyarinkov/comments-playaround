export const DBConfig = {
  name: "db",
  version: 1,
  objectStoresMeta: [
    {
      store: "comments",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        {
          name: "author",
          keypath: "author",
          options: { unique: false },
        },
        {
          name: "content",
          keypath: "content",
          options: { unique: false },
        },
        {
          name: "likes",
          keypath: "likes",
          options: { unique: false },
        },
      ],
    },
  ],
};
