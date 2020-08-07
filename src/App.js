import React, { useState } from 'react';
import EventDashboard from './components/events/eventdashboard/EventDashboard';
import Navbar from './components/Nav/NavBar';
import { Container } from 'semantic-ui-react';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <Navbar setFormOpen={setFormOpen} />
      <Container className="main">
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
}

export default App;
