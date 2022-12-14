import express from 'express'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'

const app = express()

app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

export default app
