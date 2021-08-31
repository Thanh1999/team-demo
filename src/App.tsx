import './App.css';
import { useCallback, useState } from 'react';
import InputForm from './components/input-form/InputForm';
import ResultView from './components/result- view/ResultView';
import User from './model/User';
import Partner from './model/Partner';

function App(): JSX.Element {

  const [user, setUser] = useState<User>();
  const [partner, setPartner] = useState<Partner>();
  const [isLoading, setLoading] = useState<boolean>(false);

  function onSubmit(user: User) {
    setLoading(true);
    fetch("https://fiep-7d64f.firebaseio.com/partners.json").then((response) => {
      return response.json();
    }).then((data) => {

      for (const key in data) {
        let items: Array<Partner> = data[key];
        setPartner(items[Math.floor(Math.random() * items.length)]);
      }
      setUser(user);
      setLoading(false);
    })
  }

  return (<div className="content">
    <InputForm onSubmit={useCallback(
      onSubmit,
      [],
    )} />
    {isLoading ?
      <div className="loading">
        <img src="/asset/loading-buffering.gif" alt="Loading" />
      </div>
      : partner && user && <ResultView user={user} partner={partner} />}

  </div>);
}
export default App;
