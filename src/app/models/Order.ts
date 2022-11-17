import { model, Schema} from 'mongoose';

export const Order = model('Order', new Schema({
  table: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['waiting', 'in_production', 'done'],
    default: 'waiting',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  products: {
    type: [{
      product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: Number,
        default: 1,
        required: true
      }
    }],
    required: true
  }
}));
