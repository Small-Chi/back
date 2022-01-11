import mongoose from 'mongoose'

// 商品上架
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '商品名不能為空']
  },
  price: {
    type: Number,
    min: [0, '價格格式不正確'],
    required: [true, '商品價格不能為空']
  },
  // 商品說明
  description: {
    type: String
  },
  image: {
    type: String
  },
  // 預設是否上架:否
  sell: {
    type: Boolean,
    default: false
  },
  // 商品分類，目前範例是用規定好的分類，如果要可以新增要多一個檔案出來寫，很麻煩
  category: {
    type: String,
    enum: {
      values: ['飾品', '皮件', '鞋子'],
      message: '商品分類不存在'
    }
  }
}, { versionKey: false })

export default mongoose.model('products', productSchema)
