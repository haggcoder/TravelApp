const app = require('./index.js');
const PORT = 4000;

const server = app.listen(PORT, ()=>{
    console.log(`Running on localhost: ${PORT}`);
});
