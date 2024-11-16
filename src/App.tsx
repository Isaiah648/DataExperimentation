import { useState } from 'react'
import './App.css'
import Profile from'./components/profile';
import HeaderSimple from'./components/HeaderSimple';
import { Box, Flex, Card, Text, Grid, Container } from '@mantine/core';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Home from './Home';



function App() {
  const [count, setCount] = useState(0);

  return (
    <Container fluid>
      <div>
        
      </div>

          <div>
            <Profile
              name="Isaiah Kenny"
              title="Student - Philosopher - Free-Spirit"
              description="Hey, you found my page. Feel free to explore and enjoy. Right now, I am a second year CS student at Georgia Tech, but I want so much more, so more to come... :)"
              socialLinks={{
                github: "https://github.com/Isaiah648",
                linkedin: "https://www.linkedin.com/in/isaiah-kenny/",
                email: "mailto:ikenny3@gatech.edu"
              }}
            />

          </div>

    </Container>
  )
}

export default App
