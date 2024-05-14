import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface DeleteParams {
    firstName: string;
    lastName: string;
}

async function deleteUser(username: string, {
    firstName,
    lastName
}: DeleteParams) {
 const res= await prisma.user.update({
    where: {email: username },
    data:{
      firstName,
      lastName
    }
  })
  console.log(res);
}
deleteUser('kuldeep@gmail.com',{
    firstName: 'kuldeep12',
    lastName: 'yadav'
})