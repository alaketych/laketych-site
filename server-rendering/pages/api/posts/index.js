import db from '../controllers/database'

export default async(request, response) => {
    const sql = `select * from post`
    const posts = await db.query(sql)

    response.status(200).json({ posts })
}