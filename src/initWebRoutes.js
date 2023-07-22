import dataRouter from "./data/dataRoutes";

const initWebRoute = (app) => {
    // route home
    app.get('/', (req, res) => {
        res.send('Peachee server is running!')
    })

    // port used to listen, client will call api to this port
    app.listen(8080, () => {
        console.log(`App listening on port 8080`)
    })

    app.use("/api/v1/data", dataRouter);
};

export default initWebRoute;