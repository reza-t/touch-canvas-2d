import mongoose from 'mongoose';

// Connect to Database
mongoose
  .connect(
    'mongodb://localhost:27017/flow',
    { useNewUrlParser: true },
  )
  .then(() => console.log('DB connected'))
  .catch(err => console.error(err));

// To fix the => DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
