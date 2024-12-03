// models/Alumno.js
import BaseModel from './BaseModel.js';
import Usuario from './Usuario.js';
import Graduados from './Graduados.js';
import InscripcionesForos from './InscripcionesForos.js';
import InscripcionesPasantias from './InscripcionesPasantias.js';

class Alumno extends BaseModel {
  static get tableName() {
    return 'alumno';
  }

  static get relationMappings() {
    return {
      usuario: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Usuario,
        join: {
          from: 'alumno.usuario_idusuario',
          to: 'usuario.idusuario',
        },
      },
      graduados: {
        relation: BaseModel.HasManyRelation,
        modelClass: Graduados,
        join: {
          from: 'alumno.idalumno',
          to: 'graduados.alumno_idalumno',
        },
      },
      inscripcionesForos: {
        relation: BaseModel.HasManyRelation,
        modelClass: InscripcionesForos,
        join: {
          from: 'alumno.idalumno',
          to: 'inscripciones_foros.alumno_idalumno',
        },
      },
      inscripcionesPasantias: {
        relation: BaseModel.HasManyRelation,
        modelClass: InscripcionesPasantias,
        join: {
          from: 'alumno.idalumno',
          to: 'inscripciones_pasantias.alumno_idalumno',
        },
      },
    };
  }
}

export default Alumno;
