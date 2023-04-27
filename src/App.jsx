import { useState } from 'react'
import {
  Box,
  Container,

} from "@chakra-ui/react";
import ContactForm from './components/ContactForm';
import './App.css'

function App() {


  return (
    <div className="App">
      <Container maxW="container.md" py={12}>
        <Box boxShadow="lg" borderRadius="lg" p={12}>
          <ContactForm />
        </Box>
      </Container>
    </div>
  );
}

export default App
