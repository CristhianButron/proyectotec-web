// models/Foros.js
import BaseModel from './BaseModel.js';
import InscripcionesForos from './InscripcionesForos.js';

class Foros extends BaseModel {
  static get tableName() {
    return 'foros';
  }

  static get relationMappings() {
    return {
      inscripciones: {
        relation: BaseModel.HasManyRelation,
        modelClass: InscripcionesForos,
        join: {
          from: 'foros.idforo',
          to: 'inscripciones_foros.foros_idforo',
        },
      },
    };
  }
}

export default Foros;
