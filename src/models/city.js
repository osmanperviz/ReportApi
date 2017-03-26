import db from '../db';

const City = db.Model.extend({
  tableName: 'city'

  administrative_area: () => {
    return this.hasMany(AdministrativeArea)
  }
})

export default City
