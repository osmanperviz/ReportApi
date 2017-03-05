import db from '../db';

const Report = db.Model.extend({
  tableName: 'report',

  device: () => {
    return this.belongsTo(Device)
  }
})

export default Report
