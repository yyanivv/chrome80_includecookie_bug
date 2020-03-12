const express = require('express');
const app = express();
const path = require('path');


// app.use(express.json());
// app.use(express.urlencoded());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')));

// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/', 'index.html'));
});

app.listen(3000, () => console.log(`avilable in http://localhost:3000`));