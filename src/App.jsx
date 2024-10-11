import { BrowserRouter, Routes, Route } from "react-router-dom";  
import LoginPage from "./pages/Auth";
import Home from "./pages/Home";
import SmsPage from "./pages/Sms";
import ProfilePage from "./pages/Profile";
import SeansPage from "./pages/seans";
import Movies from "./pages/Movies";
import DetailPage from "./pages/Detail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Bileti from "./pages/Bileti";
import { Provider } from "react-redux";
import store from "./redux/store";
import SearchPage from "./pages/SearchPage";

// import AuthContextProvider from "./contectAuthContextProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/* <AuthContextProvider> */}
          {/* <ToastContainer /> */}
          {/* <Router/> */}
          <div className="max-w-[1360px] w-full mx-auto">
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/login/sms" element={<SmsPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/seans" element={<SeansPage />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/:id" element={<DetailPage />} />
                <Route path="/bilet" element={<Bileti />} />
                <Route path="/search" element={<SearchPage />} />

              </Routes>
            </BrowserRouter>
          </div>
        {/* </AuthContextProvider> */}
      </QueryClientProvider>
    </Provider>
  );
}

export default App;

