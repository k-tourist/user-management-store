import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import MainLayout from './components/layout/MainLayout';
import theme from './theme';
import UserManagement from './pages/UserManagement';
import Profile from './pages/Profile';

const Home = () => <div>Home Page</div>;
const Settings = () => <div>Settings Page</div>;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/settings" component={Settings} />
            <Route path="/user-management" component={UserManagement} />
          </Switch>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App; 