import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Payout from './components/Payout/Payout';
import RecipientPage from './components/Recipient/RecipientPage';
import ReviewTransfer from './components/Review/ReviewTransfer';
import { DetailsProvider } from './components/DetailsContext';
import InstallPwa from './components/InstallPwa';
// import InstallModal from './components/InstallModal';
// import InstallFooter from './components/InstallFooter';

function App() {

  
  // const installProcess = () => {
  //   const [deferredPrompt, setDeferredPrompt] = useState(false);

  //   console.log('fired')
  //   window.addEventListener('beforeinstallprompt', (e) => {
  //     e.preventDefault();
  //     setDeferredPrompt(e);
  //     console.log('first defered value:', deferredPrompt)
  //     startInstall();
  //   })
  //   const startInstall = () => {
  //     if (deferredPrompt) {
  //       deferredPrompt.prompt();
  //       deferredPrompt.userChoice.then(choice => {
  //         if (choice.outcome === 'accepted') {
  //           console.log('installed')
  //         } else {
  //           console.log('canceled')
  //         }
  //       })
  //     } else if (!deferredPrompt) {
  //       console.log('defredPrompt is not defined:', deferredPrompt)
  //     }
  //   }

  // }


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
      {/* <InstallFooter /> */}
      <InstallPwa />
    </Router>
  );
}

export default App;
