import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // await prisma.post.create({
  //     data: {
  //         title: "Nodejs Tuturial",
  //         content: "Tuturial.............",
  //         authorId: 14
  //     }
  // })
  // ===============Culsulta de datos Relacionales======================//
  const users = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  //   console.log(users);

  users.forEach((user) => {
    console.log("-----------");
    console.log(`User: ${user.name}`);
    console.log(`Email: ${user.email}`);

    user.posts.forEach((post, index) => {
      console.log(`${index}. ${post.title} ${post.content}`);
    });
  });
  // ===============Creacion de datos Relacionales======================//
  //   const newUser = await prisma.user.create({
  //     data: {
  //       name: "donna",
  //       email: "donna@gmail.com",
  //       posts: {
  //         create: {
  //           title: "Tuturial de prisma",
  //           content: "Para hacer este tuturial.....",
  //         },
  //       },
  //     },
  //   });
  //   console.log(newUser);
  //   const posts = await prisma.post.findMany();
  //   console.log(posts);
  //   const newUser = await prisma.user.create({
  //     data: {
  //       name: "Joe",
  //       email: "joe444@gmail.com",
  //     },
  //   });
  //   console.log(newUser);
  //   const newPost = await prisma.post.create({
  //     data: {
  //       title: "Mi primera publicacion",
  //       content: "este es mi primer post",
  //       author: {
  //         connect: {
  //           id: newUser.id,
  //         },
  //       },
  //     },
  //   });
  //   console.log(newPost);
}

main();

// async function main() {
//   const user = await prisma.user.upsert({
//     where: {
//       email: "fcode@gmail.com",
//     },
//     create: {
//       name: "F Code",
//       email: "fcode@gmail.com",
//     },
//     update: {
//       lastname: "Lastname X",
//       name: "F Code 💻"
//     },
//   });
//   console.log(user);
//   //   // Update users by name - field lastname
//   //   const result = await prisma.user.updateMany({
//   //     where: {
//   //       name: "Joseph",
//   //     },
//   //     data: {
//   //       lastname: "Perez"
//   //     },
//   //   });
//   //   console.log(result);
//   //   // Update user by id - fields name & lastname
//   //   const user = await prisma.user.update({
//   //     where: {
//   //       id: 6,
//   //     },
//   //     data: {
//   //       lastname: "Perez",
//   //       name: "Sam",
//   //     },
//   //   });
//   //   console.log(user);
//   //   // Delete users by name
//   //   const result = await prisma.user.deleteMany({
//   //     where: {
//   //       name: "Joseph",
//   //     },
//   //   });
//   //   console.log(result);
//   //   // Delete user by id
//   //   try {
//   //     const user = await prisma.user.delete({
//   //       where: {
//   //         id: 100,
//   //       },
//   //     });
//   //     console.log(user);
//   //   } catch (error) {
//   //     if (error.code === "P2025") {
//   //       console.log("Usuario No encontrado");
//   //     }
//   //   }
//   //   // find user id && email - first data
//   //   const user = await prisma.user.findFirst({
//   //     where: {
//   //       AND: [{ id: 3 }, { email: "juan@gmail.com" }],
//   //     },
//   //   });
//   //   console.log(user);
//   // // Find user id || name - first data
//   // const user = await prisma.user.findFirst({
//   //     where: {
//   //         OR: [
//   //             {id: 10},
//   //             {name: "Juan"}
//   //         ]
//   //     }
//   // })
//   // console.log(user)
//   // // Find user name - first data
//   // const user = await prisma.user.findFirst({
//   //     where: {
//   //         name: "Juan"
//   //     }
//   // })
//   // console.log(user)
//   //   // find all users
//   //   const users = await prisma.user.findMany();
//   //   //   console.log(users);
//   //   users.map((user) => {
//   //     console.log(`${user.id} - ${user.name}`);
//   //   });
//   //   //create new user
//   //   const newUser = await prisma.user.create({
//   //     data: {
//   //       name: "Joseph",
//   //       email: "joseph2@gmail.com",
//   //     },
//   //   });
//   //   console.log(newUser);
// }

// main();
