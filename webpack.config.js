const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Punto de entrada de la aplicación
  entry: './src/index.js',

  // Configuración de la salida
  output: {
    filename: 'main.js', // Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'), // Directorio de salida
    clean: true, // Limpia la carpeta dist antes de cada build
  },

  // Configuración de los módulos
  module: {
    rules: [
      {
        test: /\.css$/, // Coincide con los archivos .css
        use: ['style-loader', 'css-loader'], // Usa style-loader y css-loader para procesar los archivos CSS
      },
    ],
  },

  // Configuración de los plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Usa src/index.html como plantilla
    }),
  ],

  // Modo de configuración (development para desarrollo)
  mode: 'development',
};
