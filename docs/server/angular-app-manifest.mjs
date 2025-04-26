
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/arcane_guessr/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/arcane_guessr"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 15023, hash: '7527851abb396cc70f7d2eabcda3354e03f81577c2ce29179315ae320882cc4c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15296, hash: '966b1bd5aa2b505cd28a33ea64baca0b73b2360af51debca8ba51402166d7b56', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3DJK6GGA.css': {size: 121, hash: '/+XRqqqzxCQ', text: () => import('./assets-chunks/styles-3DJK6GGA_css.mjs').then(m => m.default)}
  },
};
