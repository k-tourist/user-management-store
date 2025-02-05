import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import MainLayout from './components/layout/MainLayout';
import Alert from './components/Alert';
import theme from './theme';
import UserManagement from './pages/UserManagement';

const Home = () => <div>Home Page</div>;
const Profile = () => <div>Profile Page</div>;
const Settings = () => <div>Settings Page</div>;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Alert />
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/settings" component={Settings} />
              <Route path="/user-management" component={UserManagement} />
            </Switch>
          </MainLayout>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App; 