
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
    'index.csr.html': {size: 15023, hash: '499fed7785faa225ea8060ee5bce4294b668c022ee2d1f58fbd3dc084fb0777f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15296, hash: '58243152d7a3951b0975eddcedc9f799692a2534d9e3840f9be68e1b2854dc79', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-3DJK6GGA.css': {size: 121, hash: '/+XRqqqzxCQ', text: () => import('./assets-chunks/styles-3DJK6GGA_css.mjs').then(m => m.default)}
  },
};
