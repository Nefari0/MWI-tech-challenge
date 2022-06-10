const express = require('express')
const path = require('path')
const session = require('express-session')
const massive = require('massive')
require('dotenv').config({ path: __dirname + '/../.env'})
const contactController = require('./controllers/contactController')

// server
const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env

const app = express();

app.use(express.json());

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: { maxAge: 1000 * 60 * 5 },
    }),
    )
    
app.use( express.static( __dirname + '/../build'));
app.get('*', (req,res) => {
    res.send(path.join(__dirname, '../build/index.html'))
})

// end points
app.get('/api/contacts/get',contactController.getContacts)
app.post('/api/contacts/new',contactController.newContact)

// massive
massive({
connectionString: CONNECTION_STRING,
ssl: {
    rejectUnauthorized: false,
}
}).then((dbInstance) => {
    app.set('db',dbInstance);
    console.log('db connected');
    app.listen(SERVER_PORT, () => console.log(`server ready on ${SERVER_PORT}`))
});