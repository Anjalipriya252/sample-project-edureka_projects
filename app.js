let app = require('express')();
app.get("/",(request,response) =>{
    response.status(200).send("its working");
});
app.listen(3000,host,() => {
    console.log("server is running on",host,"with port",port);
});