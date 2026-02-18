import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./src/pages/Home";
import NotFound from "./src/pages/NotFound";
import Profile from "./src/pages/Profile";
import Video from "./src/pages/Video";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 10, borderBottom: "1px solid white" }}>
        <Link to="/" style={{ marginRight: 10 }}>
          Home
        </Link>
        <Link to="/profile">profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/video/:id" element={<Video />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

//Link is used to navigate
//Routes is used to display current component