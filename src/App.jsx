import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import MainLayout from './components/layout/MainLayout';
import theme from './theme';
import UserManagement from './pages/UserManagement';
import Profile from './pages/Profile';
import MyChecks from './pages/MyChecks';
import AllMails from './pages/AllMails';

const Home = () => <div>Home Page</div>;
const Settings = () => <div>Settings Page</div>;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Profile} />
            <Route path="/profile" component={Profile} />
            <Route path="/settings" component={Settings} />
            <Route path="/user-management" component={UserManagement} />
            <Route path="/my-checks" component={MyChecks} />
            <Route path="/all-mails" component={AllMails} />
          </Switch>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App; 