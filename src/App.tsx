import { useState } from 'react'
import './App.css'
import Profile from'./components/profile';
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

          <svg width="300" height="300" viewBox="0 0 300 300">
          {/* Rectangle */}
          <rect x="50" y="50" width="200" height="100" fill="lightblue" />

          {/* Circle */}
          <circle cx="150" cy="200" r="100" fill="orange" />

          {/* Line */}
          <line x1="50" y1="50" x2="250" y2="150" stroke="black" strokeWidth="3" />

          {/* Path for a custom shape (a triangle) */}
          <path
            d="M 150 50 L 100 150 L 200 150 Z"
            fill="green"
            stroke="transparent"
            strokeWidth="3"
          />
        </svg>
    </Container>
  )
}

export default App
