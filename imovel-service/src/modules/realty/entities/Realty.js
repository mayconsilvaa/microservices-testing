import { Schema, model } from 'mongoose';

const RealtySchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    square_meter: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

export default model('Realty', RealtySchema);
