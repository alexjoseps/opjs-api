import { model, Schema } from 'mongoose';

export const Product = model('Category', new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imagePath: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  ingredients: {
    type: [
      {
        name: {
          type: String,
          required: true
        },
        icon: {
          type: String,
          required: true
        }
      }
    ],
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category'
  }
}));
