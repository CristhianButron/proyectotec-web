// models/InscripcionesPasantias.js
import BaseModel from './BaseModel.js';
import Alumno from './Alumno.js';
import Pasantias from './Pasantias.js';

class InscripcionesPasantias extends BaseModel {
  static get tableName() {
    return 'inscripciones_pasantias';
  }

  static get relationMappings() {
    return {
      alumno: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Alumno,
        join: {
          from: 'inscripciones_pasantias.alumno_idalumno',
          to: 'alumno.idalumno',
        },
      },
      pasantia: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Pasantias,
        join: {
          from: 'inscripciones_pasantias.pasantias_idpasantia',
          to: 'pasantias.idpasantia',
        },
      },
    };
  }
}

export default InscripcionesPasantias;
