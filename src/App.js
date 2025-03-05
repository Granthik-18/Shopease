import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Products from "./components/Products/Products";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <>
      <Loading />
      <Products />
      <Login />
      <SignUp />
    </>
  );
}

export default App;