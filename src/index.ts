import express, {Request, Response} from "express";
import { AddressInfo } from "net";
import dotenv from "dotenv";
import { userRouter } from "./router/UserRouter";
import { friendshipRouter } from "./router/FriendshipRouter";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/", userRouter)
app.use("/friendship/", friendshipRouter)

// //testando o servidor
// app.get("/", (req: Request, res: Response) => {
//     res.status(200).send({
//         message: "success"
//     })
// })

const server = app.listen(process.env.PORT || 3002, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
