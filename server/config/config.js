process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/ionic-project';
} else {
    urlDB = 'mongodb+srv://RASE:nG51gvwWA9AJ9haj@ionicapp.depxx.mongodb.net/test';
}

process.env.URLDB = urlDB;