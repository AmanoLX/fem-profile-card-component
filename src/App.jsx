import { useState } from 'react';
import './index.css';
import data from './data';
import Profiles from './Profiles';

function App() {
  const [profiles, setProfiles] = useState(data);

  return (
    <main>
      <Profiles profiles={profiles} />
    </main>
  );
}

export default App;
