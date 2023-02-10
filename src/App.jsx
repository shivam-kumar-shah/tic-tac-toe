import { Provider } from "react-redux";
import store from "./store/gameStore";

import GameHUD from "./components/GameHUD";

const App = () => {
    return (
        <Provider store={store}>
            <GameHUD />
        </Provider>
    )
}

export default App;