import { Route, Routes } from 'react-router-dom';
import styles from "./styles/app.module.scss";
import Home from './Home';

function App () {
  return (
    <div className={styles.wrapper}>
    <Routes >
      <Route path="/" element={<Home />}>
        <Route path='*' element={<Home />}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
