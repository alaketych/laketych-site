import next from 'next'
import express, { Router } from 'express'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import { urlencoded, json } from 'body-parser'

import { Roles } from './pages/api/controllers/roles'
import { resticted } from './pages/api/controllers/restricted'
import { route } from 'next/dist/next-server/server/router'

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler()

nextApp.prepare()
    .then(async() => {
        const app = express()
        app.use(json())
        app.use(cookieParser())
        app.use(passport.initialize())


    })