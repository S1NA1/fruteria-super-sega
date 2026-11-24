# Datos propuestos para MySQL — etapa 2

No se ha creado ni conectado una base de datos. Este documento define los datos necesarios para la siguiente sesión.

## Categorías

`id` entero autoincremental, `nombre` VARCHAR(60) único, `descripcion` VARCHAR(200), `activo` booleano. Una categoría tiene muchos productos. No borrar categorías con productos relacionados: reasignar primero.

## Productos

`id` entero autoincremental, `categoria_id` clave foránea, `nombre` VARCHAR(100), `descripcion` VARCHAR(300), `imagen_url` VARCHAR(500), `unidad` (kg, pieza, manojo o paquete), `precio` DECIMAL(7,2), `precio_oferta` DECIMAL(7,2) nullable, `disponible` booleano, `activo` booleano, `actualizado_en` DATETIME.

Reglas: precios positivos con dos decimales; oferta menor que el precio normal; categoría existente; imagen validada. Mantener decimales exactos en el servidor. Solo un precio de menudeo. No se controlan cantidades de inventario ni se reciben pedidos.

## Administradores

`id`, `usuario` único, `password_hash`, `activo`, `creado_en`. La autenticación se implementará en el servidor, con cookie HttpOnly y autorización de todas las escrituras. No enviar hashes ni contraseñas a la interfaz. La demo abierta se deshabilitará al activar el sistema real.

## Negocio

Un registro con nombre, teléfono WhatsApp en formato internacional, dirección, horario y fecha de actualización. No inventar datos pendientes. El contacto del encargado requerido por el profesor puede ser distinto del número comercial público.

## API prevista

GET público para catálogo/productos, categorías e información del negocio. Login y logout de administración. POST/PUT/DELETE protegidos para productos y categorías; PUT protegido para datos del negocio. Validaciones, consultas parametrizadas con mysql2 y errores de integridad. Las ofertas se gestionan sobre el producto, no requieren una tabla duplicada.

## Pantallas

- `/`: presentación, filtros, búsqueda, productos, ofertas y contacto.
- Ficha modal: imagen, nombre, descripción, precio/unidad y disponibilidad.
- `/admin/`: en etapa 1 es demostración; en etapa 2 requiere sesión.
- Panel: productos, categorías, ofertas e información del negocio.
