import { prismaClient } from '@repo/db/client';


export default async function Home() {

    const users = await prismaClient.user.findMany();
  return (

    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.username}</h2>
          <p>{user.password}</p>
        </div>
      ))}
    </div>

  );
}
