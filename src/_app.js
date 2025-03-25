import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../store';
import { BrowserRouter as Router } from 'react-router-dom';
import SomeContextProvider from '../context/SomeContextProvider'; // Import your context provider

function MyApp({ Component, pageProps }) {
  return (
    <ReduxProvider store={store}>
      <Router>
        <SomeContextProvider>
          <Component {...pageProps} />
        </SomeContextProvider>
      </Router>
    </ReduxProvider>
  );
}

export default MyApp;