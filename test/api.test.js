import test from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import app from '../src/app.js';
test('la API declara modo demo, sirve el catálogo y no acepta escrituras', async () => {
  const server=app.listen(0,'127.0.0.1');await once(server,'listening');const base=`http://127.0.0.1:${server.address().port}`;
  try {
    const health=await (await fetch(`${base}/api/health`)).json();assert.equal(health.database,'not-connected');
    const catalog=await (await fetch(`${base}/api/catalogo`)).json();assert.equal(catalog.preview,true);assert.equal(catalog.products.length,4);assert.ok(catalog.products.every(p=>catalog.categories.some(c=>c.id===p.categoryId)));assert.ok(catalog.products.every(p=>p.offerPrice===null||p.offerPrice<p.price));
    assert.equal((await fetch(`${base}/api/catalogo`,{method:'POST'})).status,404);
    for(const path of ['/','/admin/','/style.css','/app.js','/assets/logo.svg'])assert.equal((await fetch(base+path)).status,200,path);
    assert.equal((await fetch(`${base}/no-existe`)).status,404);
  } finally { server.closeAllConnections();await new Promise(resolve=>server.close(resolve)); }
});
