import db from '../db';


const Report = db.Model.extend({
  tableName: 'report',

  validations: {
    message: {
      isRequired: true,
      error: 'Message is required!',
    }
    latitude: 'isRequired',
    longitude: 'isRequired',
    administrativeCentar: 'isRequired',
    address: 'isRequired',
    device_id: 'isRequired'
  },

  device: () => {
    return this.belongsTo(Device)
  }
})

export default Report
