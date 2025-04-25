
export default {
  basePath: 'C:/Program Files/Git/arcane_guessr',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
