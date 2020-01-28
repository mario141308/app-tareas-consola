const argv = require('./config/yargs').argv;
const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
  case 'crear':
    console.log(crear(argv.descripcion));
    console.log('Crear nota');
    break;
  case 'listar':
    let listado = getListado();
    for (const nota of listado) {
      console.log('========Por Hacer========='.green);
      console.log('Nota: ' + nota.descripcion);
      console.log('Estado: ', nota.completado);
      console.log('========================='.green);
    }
    
    break;
  case 'actualizar':
    let actualizado = actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
    console.log('Actualizar nota');
    break;
  case 'borrar': 
    let borrado = borrar(argv.descripcion);
    console.log(borrado);
    break;
  default:
    console.log('comando no reconocido');
}