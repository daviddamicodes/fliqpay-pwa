import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Payout from './components/Payout/Payout';
import RecipientPage from './components/Recipient/RecipientPage';
import ReviewTransfer from './components/Review/ReviewTransfer';
import { DetailsProvider } from './components/DetailsContext';
// import InstallModal from './components/InstallModal';
import InstallFooter from './components/InstallFooter';

function App() {

  const [deferredPrompt, setDeferredPrompt] = useState();

  const installProcess = () => {

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      startInstall();
    })
    const startInstall = () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(choice => {
          if (choice.outcome === 'accepted') {
            console.log('installed')
          } else {
            console.log('canceled')
          }
        })
      }
    }

  }


  return (
    <Router>
      <Navbar />
      {/* <InstallModal /> */}
      <Switch>
        <DetailsProvider>
          {/* <Route exact path="/" component={(props) => <Payout {...props} state={state} setState={setState} />} /> */}
          <Route exact path="/" component={Payout} />
          <Route path="/recipient" component={RecipientPage} />
          <Route path="/review" component={ReviewTransfer} />
        </DetailsProvider>
      </Switch>
      <InstallFooter installProcess={installProcess} />
    </Router>
  );
}

export default App;
