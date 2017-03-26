import db from '../db';

const AdministrativeArea = db.Model.extend({
  tableName: 'administrative_area'

  city: () => {
    return this.belongsTo(City)
  },

  reports: () => {
    return this.hasMany(Report)
  }
})

export default AdministrativeArea
