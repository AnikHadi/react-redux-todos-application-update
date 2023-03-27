import { Provider } from "react-redux";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Navbar from "./Component/Navbar/Navbar";
import TodoList from "./Component/TodoList/TodoList";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        <Navbar />

        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />

          <hr className="mt-4" />
          <TodoList />

          <hr className="mt-4" />

          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
