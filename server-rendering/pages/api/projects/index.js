import db from '../controllers/database'

export default async(request, response) => {
    const sql = `select * from project`
    const projects = await db.query(sql)

    response.status(200).json(projects)
}