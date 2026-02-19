import Child from "./Child";
export default function Parent({ user }) {
  return (
    <>
      <h1>Parent</h1>
      <Child user={user} />
    </>
  );
}
