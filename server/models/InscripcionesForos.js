// models/InscripcionesForos.js
import BaseModel from './BaseModel.js';
import Alumno from './Alumno.js';
import Foros from './Foros.js';

class InscripcionesForos extends BaseModel {
  static get tableName() {
    return 'inscripciones_foros';
  }

  static get relationMappings() {
    return {
      alumno: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Alumno,
        join: {
          from: 'inscripciones_foros.alumno_idalumno',
          to: 'alumno.idalumno',
        },
      },
      foro: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Foros,
        join: {
          from: 'inscripciones_foros.foros_idforo',
          to: 'foros.idforo',
        },
      },
    };
  }
}

export default InscripcionesForos;
