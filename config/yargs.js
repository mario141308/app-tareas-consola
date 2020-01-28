const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripcion de la tarea por hacer'
};
const completado = {
  alias: 'c',
  type: 'booleano',
  default: true,
  desc: 'Cambia el estatus de la tarea'
};

const optsCrear = { descripcion };

const optsBorrar = { descripcion };

const optsActualizar = {
  descripcion,
  completado
};

const argv = require('yargs')
  .command('crear', 'Crea una nota', optsCrear)
  .command('actualizar', 'Marca como completada una tarea', optsActualizar)
  .command('borrar', 'Borra una tarea', optsBorrar)
  .help()
  .argv;


module.exports = { argv };