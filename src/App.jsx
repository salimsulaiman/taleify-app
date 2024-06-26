import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/home/Dashboard";
import Article from "./pages/article/Article";
import SignIn from "./pages/user/signin/SignIn";
import Signup from "./pages/user/signup/Signup";
import Home from "./pages/user/home/Home";
import Literations from "./pages/user/literations/Literations";
import Profile from "./pages/user/profile/Profile";
import Layout from "./component/Layout";
import LiterationDetail from "./pages/user/literations/detail/LiterationDetail";
import Story from "./pages/user/literations/story/Story";
import Question from "./pages/user/literations/question/Question";
import UserLiteration from "./pages/user/literations/user_literation/UserLiteration";
import SearchLiteration from "./pages/user/literations/search/SearchLiteration";
import Verification from "./pages/user/signup/Verification";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/artikel/:id" element={<Article />} />
        <Route path="/user" element={<Layout />}>
          <Route path="/user/home" element={<Home />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/literations/:id" element={<Literations />} />
          <Route path="/user/literations/detail/:id" element={<LiterationDetail />} />
          <Route path="/user/literations/story/:id" element={<Story />} />
          <Route path="/user/literations/question/:id" element={<Question />} />
          <Route path="/user/literations/user_literation" element={<UserLiteration />} />
          <Route path="/user/literations/search" element={<SearchLiteration />} />
          <Route path="/user/verification" element={<Verification />} />
        </Route>
        <Route path="/user/signin" element={<SignIn />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/user/signup/verification" element={<Verification />} />
      </Routes>
    </>
  );
}

export default App;
