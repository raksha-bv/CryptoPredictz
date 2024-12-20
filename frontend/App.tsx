import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Accounts from "./pages/Accounts";
import Rewards from "./pages/Rewards";
import InviteFriends from "./pages/InviteFriends";
import Sports from "./pages/Sports";
import AuthenticationPage from "./pages/AuthenticationPage";
import { OktoContextType, useOkto } from "okto-sdk-react";
import BlackjackGame from "../games/blackjack";
import SlotMachine from "../games/slotMachine";
import { useEffect } from "react";
// import Error404Page from "./pages/Error404Page";

function App() {
  // const { connected } = useWallet();
  const { isLoggedIn, createWallet } = useOkto() as OktoContextType;
  useEffect(() => {
    if (isLoggedIn) {
      (async () => {
        await createWallet();
      })();
    }
  }, [isLoggedIn]);

  return (
    <Router>
      <main className="min-h-screen overflow-hidden bg-fixed bg-center bg-[url('/bg.jpg')] ">
        {/* <main className="bg-gradient-to-b from-black via-neutral-900 to-gray-900 text-white min-h-screen relative overflow-x-hidden"> */}
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/authentication" element={<AuthenticationPage />} />
          <Route path="/account" element={<Accounts />} />
          <Route path="/reward" element={<Rewards />} />
          <Route path="/affiliate" element={<InviteFriends />} />
          <Route path="/sports" element={<Sports />} /> */}
          {isLoggedIn ? (
            <>
              s
              <Route path="/" element={<Home />} />
              <Route path="/account" element={<Accounts />} />
              <Route path="/reward" element={<Rewards />} />
              <Route path="/affiliate" element={<InviteFriends />} />
              <Route path="/blackjack" element={<BlackjackGame />} />
              <Route path="/slotmachine" element={<SlotMachine />} />
              <Route path="/sports" element={<Sports />} />
              {/* <Route path="/404" element={<Error404Page />} /> */}
            </>
          ) : (
            <Route path="*" element={<AuthenticationPage />} />
          )}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
