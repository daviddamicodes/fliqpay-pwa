import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Payout from './components/Payout/Payout';
import RecipientPage from './components/Recipient/RecipientPage';
import ReviewTransfer from './components/Review/ReviewTransfer';
import { DetailsProvider } from './components/DetailsContext';

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <DetailsProvider>
          {/* <Route exact path="/" component={(props) => <Payout {...props} state={state} setState={setState} />} /> */}
          <Route exact path="/" component={Payout} />
          <Route path="/recipient" component={RecipientPage} />
          <Route path="/review" component={ReviewTransfer} />
        </DetailsProvider>
      </Switch>

    </Router>
  );
}

export default App;
