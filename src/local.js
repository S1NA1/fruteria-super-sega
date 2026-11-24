import app from './app.js';
const port = Number(process.env.PORT || 4320);
app.listen(port, '127.0.0.1', () => console.log(`Super SEGA: http://127.0.0.1:${port}`));
