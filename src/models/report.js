import db from '../db';


const Report = db.Model.extend({
  tableName: 'report',

  validations: {
    message: {
      isRequired: true,
      error: 'Message is required!',
    },
    latitude: 'isRequired',
    longitude: 'isRequired',
    administrative_area_id: 'isRequired',
    address: 'isRequired',
    device_id: 'isRequired'
  },

  device: () => {
    return this.belongsTo(Device)
  },
  administrative_area: () => {
    return this.belongsTo(AdministrativeArea)
  }
})

export default Report
