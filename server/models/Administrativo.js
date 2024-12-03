// models/Administrativo.js
import BaseModel from './BaseModel.js';
import Usuario from './Usuario.js';

class Administrativo extends BaseModel {
  static get tableName() {
    return 'administrativo';
  }

  static get relationMappings() {
    return {
      usuario: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Usuario,
        join: {
          from: 'administrativo.usuario_idusuario',
          to: 'usuario.idusuario',
        },
      },
    };
  }
}

export default Administrativo;
