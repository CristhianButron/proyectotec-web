// models/Graduados.js
import BaseModel from './BaseModel.js';
import Alumno from './Alumno.js';

class Graduados extends BaseModel {
  static get tableName() {
    return 'graduados';
  }

  static get relationMappings() {
    return {
      alumno: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Alumno,
        join: {
          from: 'graduados.alumno_idalumno',
          to: 'alumno.idalumno',
        },
      },
    };
  }
}

export default Graduados;
