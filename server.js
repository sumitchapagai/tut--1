// importer l'application B.E
const app = require("./backend/app");

app.listen(3000, ()=>{
    console.log("Express Application is Running on PORT 3000 ");
});