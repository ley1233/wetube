import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";


const PORT = 4000;
console.log(process.cwd()); 


const app = express();
const logger = morgan("dev")

app.set("view engine","pug")
app.set("views", process.cwd()+"/src/views")
app.use(logger)
app.use("/", globalRouter)
app.use("/videos",videoRouter);
app.use("/users", userRouter)



const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);
