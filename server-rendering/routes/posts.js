const { router, database } = require('./index')

router.get('/', (request, response) => {
    const sql = `select * from post`

    database.query(sql, (error, data, fields) => {
        if(error) throw error

        response.json({
            status: 200,
            data,
            message: 'Posts lists are retvieved successfully'
        })
    })
})

router.get('/:id', (request, response) => {
    const sql = `select * from post where id = ${request.params.id}`

    database.query(sql, (error, data, fields) => {
        if(error) throw error

        response.json({
            status: 200,
            data,
            message: 'Post is retvieved successfully'
        })
    })
})

module.exports = router