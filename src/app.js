import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"})) //can change limit
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public")) //to store files like  pdf,image etc
app.use(cookieParser())




export { app }