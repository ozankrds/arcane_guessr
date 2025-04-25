
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 14989, hash: '2b29c52f173cfb1e88b657ecb999dacacb0592f020e4eaf1f4e46d459edfde1a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15262, hash: '0f6b19359a63fc27fb707a1318e9c28e93afa7d656437f882f19f692b65d8d5d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 17601, hash: 'e6265d03e442dc8c9315acb0b1c48c8ca9362c92814f6620e6148f415c627247', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-3DJK6GGA.css': {size: 121, hash: '/+XRqqqzxCQ', text: () => import('./assets-chunks/styles-3DJK6GGA_css.mjs').then(m => m.default)}
  },
};
