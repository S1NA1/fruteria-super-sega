// Datos ficticios para revisar el diseño. No representan precios del negocio.
export const demo = {
  preview: true,
  categories: [{ id: 1, name: 'Frutas', description: 'Color y sabor para todos los días.' }, { id: 2, name: 'Verduras', description: 'Lo que necesitas para cocinar rico.' }],
  business: { name: 'Frutería Super SEGA', whatsapp: '', address: '', hours: '' },
  products: [
    { id: 1, name: 'Fresa', categoryId: 1, unit: 'kg', price: 65, offerPrice: 49.9, available: true, image: 'fresas.jpg', description: 'Un toque de color para tus desayunos, postres y antojos. Imagen y precio de referencia.' },
    { id: 2, name: 'Aguacate', categoryId: 2, unit: 'kg', price: 79.9, offerPrice: null, available: true, image: 'aguacate.jpg', description: 'El compañero de tus comidas favoritas. Imagen y precio de referencia.' },
    { id: 3, name: 'Plátano', categoryId: 1, unit: 'kg', price: 29.9, offerPrice: 24.9, available: true, image: 'platano.jpg', description: 'Para el desayuno, un licuado o disfrutarlo tal cual. Imagen y precio de referencia.' },
    { id: 4, name: 'Jitomate', categoryId: 2, unit: 'kg', price: 32.9, offerPrice: null, available: false, image: 'jitomate.jpg', description: 'Un básico para tus salsas, ensaladas y recetas de casa. Imagen y precio de referencia.' }
  ]
};
