# Avance y siguiente sesión

## Acuerdo de trabajo

Trabajar por etapas completas para controlar el consumo. No avanzar a la siguiente etapa sin que el usuario lo pida. Fecha de entrega indicada: 2 de diciembre de 2026, 08:00, America/Mexico_City.

## Etapa 1 — 24 de noviembre de 2026

- [x] Proyecto independiente Frutería Super SEGA.
- [x] Diseño verde, rojo y morado con marca provisional.
- [x] Catálogo adaptable a celular y escritorio, búsqueda, categorías, ofertas y ficha de producto.
- [x] Panel navegable con formularios y cambios de demostración en la pestaña.
- [x] Base de servidor Node.js/Express y API de consulta de datos de ejemplo.
- [x] Definición de datos para MySQL y documentación para continuar.
- [x] Comprobar vista previa y pruebas.
- [x] Crear y subir repositorio GitHub.
- [x] Publicar manualmente en Vercel y verificar liga; integración automática descartada por el usuario.

### Enlaces y comprobaciones

- Sitio: https://fruteria-super-sega.vercel.app/
- Panel de demostración: https://fruteria-super-sega.vercel.app/admin/
- GitHub: https://github.com/S1NA1/fruteria-super-sega
- `npm run check` y `npm test`: correctos (prueba de integración de API, relaciones de datos, páginas y rechazo de escrituras).
- Vista móvil de 390 px: imágenes cargadas y sin desbordamiento horizontal. Búsqueda sin acentos y filtro de categorías comprobados.
- Panel: edición de oferta, rechazo de oferta mayor al precio normal, navegación de categorías y restablecimiento de datos comprobados.
- Producción: catálogo, panel, estilos, scripts, fotografías y rutas `/api/health` y `/api/catalogo` respondieron correctamente. API marcada como vista previa y base no conectada.

**Publicación manual:** el usuario rechazó instalar la aplicación de Vercel en GitHub; se canceló esa instalación. El repositorio y Vercel existen por separado. Cada etapa requiere subir los cambios a GitHub y ejecutar una publicación manual en Vercel. No intentar activar la integración automática sin autorización nueva.

## Etapa 2 — pendiente de autorización para iniciar

1. Obtener acceso autorizado a una base MySQL exclusiva de Super SEGA; no usar la base del catálogo SINAÍ.
2. Crear tablas y conexión mysql2, validar entradas y operaciones CRUD.
3. Implementar sesión real del administrador y protección de las rutas de escritura.
4. Sustituir los datos ficticios por datos reales y eliminar la persistencia de demostración del cliente.
5. Pruebas de integración y actualización en Vercel.

## Información por obtener

- Productos y categorías reales, unidades y precios vigentes de menudeo.
- Logotipo y fotografías del negocio si existen.
- WhatsApp comercial, dirección y horario.
- Contacto del encargado para entrega al profesor y validación del diseño por el negocio.

## Etapas restantes

Revisión con el encargado, correcciones, prueba completa en producción y documento de entrega. La primera etapa NO cumple todavía el requisito de MySQL ni constituye una entrega final.
