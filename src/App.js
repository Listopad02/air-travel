import './App.css';
import Layout from './hoc/Layout/Layout'
import Filters from './components/Filters/Filters';
import FlightsList from './containers/FlightsList/FlightsList';

function App() {
  return (
    <Layout>
      <Filters />
      <FlightsList />
    </Layout>
  );
}

export default App;
