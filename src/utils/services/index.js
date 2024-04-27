const express = require('express');
const app = express();

// Endpoint para obtener información y una imagen
app.get('/data', (req, res) => {
  // Aquí puedes proporcionar cualquier información que desees devolver
  const data = {
    name: 'Ejemplo de API',
    description: 'Este es un ejemplo de servicio de API con Express',
    imageUrl: 'https://ejemplo.com/imagen.jpg' // URL de la imagen que deseas servir
  };

  res.json(data);
});

// Middleware para servir archivos estáticos (en este caso, la imagen)
app.use(express.static('public'));

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
