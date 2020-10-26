import db from '../controllers/database'
import template from 'sql-template-strings'

export default async(request, response) => {
    const project = await db.query(template`
        select * from project
        where id = ${ request.query.id }
    `)

    response.status(200).json(project)
}