import { Provider } from "react-redux";
import store from "./store/gameStore";

import GameHUD from "./components/GameHUD";
import ResultModal from "./components/ResultModal";

const App = () => {
  return (
    <Provider store={store}>
      <ResultModal />
      <GameHUD />
    </Provider>
  );
};

export default App;
