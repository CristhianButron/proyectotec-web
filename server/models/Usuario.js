// models/Usuario.js
import BaseModel from './BaseModel.js';
import Alumno from './Alumno.js';
import Administrativo from './Administrativo.js';

class Usuario extends BaseModel {
  static get tableName() {
    return 'usuario';
  }

  static get relationMappings() {
    return {
      alumnos: {
        relation: BaseModel.HasManyRelation,
        modelClass: Alumno,
        join: {
          from: 'usuario.idusuario',
          to: 'alumno.usuario_idusuario',
        },
      },
      administrativos: {
        relation: BaseModel.HasManyRelation,
        modelClass: Administrativo,
        join: {
          from: 'usuario.idusuario',
          to: 'administrativo.usuario_idusuario',
        },
      },
    };
  }
}

export default Usuario;
