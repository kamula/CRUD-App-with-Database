const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('./app');
dotenv.config({ path: './config.env' });
// database url path
const database = process.env.DATABASE_URL.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);
// connect to db
mongoose.connect(database, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(conn => {

    console.log('conected to db')
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`app listening on ${port}`);
});