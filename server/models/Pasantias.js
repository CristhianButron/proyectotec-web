// models/Pasantias.js
import BaseModel from './BaseModel.js';
import InscripcionesPasantias from './InscripcionesPasantias.js';

class Pasantias extends BaseModel {
  static get tableName() {
    return 'pasantias';
  }

  static get relationMappings() {
    return {
      inscripciones: {
        relation: BaseModel.HasManyRelation,
        modelClass: InscripcionesPasantias,
        join: {
          from: 'pasantias.idpasantia',
          to: 'inscripciones_pasantias.pasantias_idpasantia',
        },
      },
    };
  }
}

export default Pasantias;
