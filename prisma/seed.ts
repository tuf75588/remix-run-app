import { PrismaClient } from '.prisma/client';

let prisma = new PrismaClient();

async function seed() {
  let andrew = await prisma.user.create({
    data: {
      username: 'andrew',
      passwordHash:
        '168a3fa9d0bbec628196abcc56149ce02428eee26e5c1d995497ab0cd0fed513',
    },
  });
  /* primsa function here */
  await Promise.all(
    getJokes().map((joke) => {
      let data = { jokeId: andrew.id, ...joke };
      return prisma.joke.create({ data });
    })
  );
  console.log('our db has been seeded 🎉');
}

seed();

function getJokes() {
  return [
    {
      name: 'Road worker',
      content: `I never wanted to believe that my Dad was stealing from his job as a road worker. But when I got home, all the signs were there.`,
    },
    {
      name: 'Frisbee',
      content: `I was wondering why the frisbee was getting bigger, then it hit me.`,
    },
    {
      name: 'Trees',
      content: `Why do trees seem suspicious on sunny days? Dunno, they're just a bit shady.`,
    },
    {
      name: 'Skeletons',
      content: `Why don't skeletons ride roller coasters? They don't have the stomach for it.`,
    },
    {
      name: 'Hippos',
      content: `Why don't you find hippopotamuses hiding in trees? They're really good at it.`,
    },
    {
      name: 'Dinner',
      content: `What did one plate say to the other plate? Dinner is on me!`,
    },
    {
      name: 'Elevator',
      content: `My first time using an elevator was an uplifting experience. The second time let me down.`,
    },
  ];
}
