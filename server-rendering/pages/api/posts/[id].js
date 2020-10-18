import db from '../controllers/database'
import template from 'sql-template-strings'

export default async(request, response) => {
  const post = await db.query(template`
    select * from post
    where id = ${ request.query.id }
  `)

  response.status(200).json({ post })
}