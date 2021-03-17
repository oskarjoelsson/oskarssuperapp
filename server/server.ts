import express from 'express';
import { routes } from './routes';
import { Convert, TrapsOfInterest } from "./src/interfaces/InputData";
import myData from './assets/20210309.json';

const inputData = Convert.trapsOfInterestToJson(myData);
let outputData = myData.accountOwner.toString();






// expressuttf
const app = express();
// Allow any method from any host and log requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});


app.use(express.json());
app.use('/', routes);
routes.get('/', (req, res) => res.send({myData}));

app.listen(4201, '0.0.0.0', function () {
    console.log('Server now listen, port http://0.0.0.0:4201');
})
