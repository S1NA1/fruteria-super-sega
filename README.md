# Frutería Super SEGA

Proyecto final: catálogo público para un negocio real, con futura administración privada. Colores acordados: **verde, rojo y morado**.

## Estado: etapa 1 — vista previa

La primera entrega permite revisar el diseño, navegar el catálogo, buscar, filtrar por categoría/oferta y abrir fichas. El panel `/admin/` permite simular altas, modificaciones, borrados, categorías y ofertas. **No es un panel seguro ni funcional de producción:** usa datos ficticios y conserva cambios únicamente en `sessionStorage` de la pestaña. No introducir datos personales o contraseñas. Los precios no pertenecen al negocio.

Servidor Node.js con Express 5, interfaz HTML/CSS/JavaScript. La API REST inicial sirve datos de demostración. **MySQL y la autenticación no están implementados todavía.** Se implementan en la etapa 2, antes de presentar el proyecto como terminado.

## Enlaces y publicación

- Catálogo: https://fruteria-super-sega.vercel.app/
- Panel de demostración: https://fruteria-super-sega.vercel.app/admin/
- Repositorio: https://github.com/S1NA1/fruteria-super-sega

La publicación en Vercel es **manual**, por decisión del usuario. Subir un commit a GitHub no publica automáticamente la aplicación. No instalar la integración de GitHub/Vercel sin una nueva autorización. Para publicar una etapa terminada, desde este proyecto y con la cuenta autorizada de Vercel:

```bash
vercel deploy --prod
```

No versionar `.env.local` ni `.vercel/`. Esta vista previa no tiene credenciales MySQL.

## Ejecutar

Node.js 24:

```bash
npm ci
npm run dev
```

Catálogo: http://127.0.0.1:4320/ · Panel de demostración: http://127.0.0.1:4320/admin/

```bash
npm run check
npm test
```

## Alcance acordado

- Catálogo con imagen, nombre, categoría, precio de menudeo, unidad, disponibilidad y oferta opcional.
- Administración de productos, categorías, precios y ofertas.
- Ubicación, horario y contacto por WhatsApp; pendientes de confirmar con el encargado.
- MySQL y API REST con Node.js/Express en la siguiente etapa.
- GitHub y Vercel desde la primera etapa.

Fuera de alcance: pedidos, carrito, pagos, cuentas de clientes, IA, cuatro niveles de precio e integración con SICAR. Los precios se actualizarán manualmente en esta aplicación.

## API de esta etapa

- `GET /api/health`: indica etapa 1 y base no conectada.
- `GET /api/catalogo`: productos, categorías y negocio ficticios con `preview: true`.
- Ninguna ruta acepta modificaciones de datos en el servidor.

## Continuación

Leer `docs/AVANCE.md` y `docs/MODELO-DATOS.md` al retomar. Detenerse al completar la etapa autorizada. Mantener este proyecto separado de `catalogodeproductos` (SINAÍ); no reutilizar sus credenciales, base, identidad de despliegue ni repositorio.

## Imágenes

Fotografías de referencia descargadas de Unsplash; fuentes en `docs/IMAGENES.md`. Sustituirlas por fotos del negocio si el encargado las proporciona. El símbolo y la marca tipográfica son una propuesta provisional, no el logotipo oficial.
