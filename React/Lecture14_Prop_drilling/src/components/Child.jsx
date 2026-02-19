import GrandChild from "./GrandChild";
export default function Child({ user }) {
  return (<>
  <h1>Child</h1>
  <GrandChild user = {user}/>
  </>
)
}
