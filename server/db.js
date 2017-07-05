const mongoose = require('mongoose')
const Schema = mongoose.Schema

const costomerSchema = new Schema({
  签约日: Date,
  社保编码: String,
  区域: String,
  名称: String,
  连锁规模: Number,
  负责人: String,
  负责人电话: String,
  联系人: String,
  联系人电话: String,
  销售经理: String
})

const Models = {
  Customer: mongoose.model('customer', costomerSchema, 'customer'),
  initialized: false
}

mongoose.connect('mongodb://127.0.0.1/yft')
mongoose.set('debug', true)

mongoose.connection.on('connected', () => console.log('mongoose.connect ok!'))
mongoose.connection.on('error', () => console.log('mongoose.connect error!'))
mongoose.connection.on('disconnected', () => console.log('mongoose.connect disconnected!'))

const db = mongoose.connection

db.on('error', function (err) {
  if(err){
    console.log('Database connection error.' + err)
  }
})

db.once('open', function () {
  console.log('The database has connected.')
})

module.exports = Models
