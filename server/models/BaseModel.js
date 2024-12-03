import { Model } from 'objection';

class BaseModel extends Model {
  static get idColumn() {
    return this.idColumn || 'id';
  }
}

export default BaseModel;
