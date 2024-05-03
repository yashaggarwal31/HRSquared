import { notFound } from 'next/navigation'
import { dbConnect } from './renderDB'
import { Database } from '@/types/database.types'

export async function getUserFromDb (email, password) {
  console.log('credentials are:::: ', email)
  console.log('pass: ', password)
  return {
    id: `dfdf`,
    name: `fdfd`,
    email: 'test@example.com'
  }
  // const query = {
  //     text:
  //     `select u.id, u.username, u.email, r.rolename
  //     from users u
  //     left join userrole_mapping um
  //     on u.id = um.user_id
  //     left join roles r
  //     on um.role_id = r.id
  //     where u.email=$1 and password=$2;`,
  //     values: [email, password],
  // }

  // const client = await dbConnect();
  // const data = await client.query(query);
  // if(data.rowCount>0) {
  //     return data.rows;
  // }else {
  //     notFound();
  // }
}
