import { Provider } from 'react-redux';
import store from '_redux/store';

import { ThemeProvider } from '_components/Theme/ThemeProvider';
import { Container } from '_components/Container';
import { Header } from '_components/Header';
import { Home } from '_components/Home';
import { Footer } from '_components/Footer';

import styles from './styles.module.scss';
import '_styles/main.scss';

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <Container>
                    <Header />
                    <Home />
                    <div className={styles.app}>Appp djksfn</div>
                </Container>
                <Footer />
            </ThemeProvider>
        </Provider>
    );
};
