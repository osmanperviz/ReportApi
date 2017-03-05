import db from '../db';

const Device = db.Model.extend({
  tableName: 'device'

  report: () => {
    return this.hasMany(Report)
  }
})

export default Device
