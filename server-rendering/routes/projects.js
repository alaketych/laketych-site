const { router, database } = require('./index')

router.get('/', (request, response) => {
    const sql = `select * from project`

    database.query(sql, (error, data, fields) => {
        if(error) throw error

        response.json({
            status: 200,
            data,
            message: 'Projects lists are retvieved successfully'
        })
    })
})

router.get('/:id', (request, response) => {
    const sql = `select * from project where id = ${request.params.id}`

    database.query(sql, (error, data, fields) => {
        if(error) throw error

        response.json({
            status: 200,
            data,
            message: 'Project is retvieved successfully'
        })
    })
})

module.exports = router