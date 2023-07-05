import styles from './App.module.css';
import Home from './App/screens/Home';

function App() {
    return (
        <div className={styles.App}>
            <Home />
            {/* <header className={styles.App_header}>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className={styles.App_link}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header> */}
        </div>
    );
}

export default App;
