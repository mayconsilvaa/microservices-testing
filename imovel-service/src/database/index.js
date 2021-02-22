import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
    this.connection = {};
  }

  async mongo() {
    try {
      this.connection = await mongoose.connect(
        process.env.NODE_ENV === 'development'
          ? `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`
          : process.env.MONGO_URI_PRODUCTION,
        {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false,
          useUnifiedTopology: true,
        },
      );
      if (this.connection) {
        console.log('MongoDB => Connected');
      } else {
        console.error('MongoDB => Failed Connection');
      }
    } catch (err) {
      console.error('Mongo Error Connection:', err);
    }
  }
}

export default new Database();
