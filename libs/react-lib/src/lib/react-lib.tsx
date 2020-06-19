export async function create() {
  return { a: 1 };
}
export async function test() {
  const { a } = await create();
  console.log(a);
}
