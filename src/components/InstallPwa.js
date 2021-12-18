import React, { useEffect, useState } from 'react'

const InstallPwa = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      console.log("we are beign triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }


  return (
    <div className=''>
      <div className='flex justify-center flex-col text-purple-900 text-center'>
        <h1 className='font-semibold text-lg mb-4'>Install the app to use offline</h1>
          <button className='font-medium text-xs py-4 px-4 bg-white text-purple-700 border border-purple-700 rounded-md hover:bg-purple-700 hover:text-white transition-all delay-75' onClick={onClick}>Install App</button>
      </div>
    </div>
  )
}

export default InstallPwa;
