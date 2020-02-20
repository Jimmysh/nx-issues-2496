export * from './lib/react-lib';

export async function create() {
  return { a: 1 };
}
export async function test() {
  const { a } = await create();
  console.log(a);
}

// change file to this can build success.
// export async function test() {
//   const c = await create();
//   console.log(c.a);
// }
