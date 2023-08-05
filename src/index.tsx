import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './pages/App';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Nav from './components/Nav/Nav';

export default function Application() {
  return (
    <div className="min-h-screen bg-slate-200 flex items-stretch"> {/* Use flex container */}
      <div className="flex-shrink-0 sm:1/8 md:w-1/8 lg:w-1/8"> {/* Set a fixed width for the Nav component on larger screens */}
        <Nav />
      </div>
      <div className="flex-grow"> {/* Use flex-grow to make the main content fill the remaining space */}
        <BrowserRouter>
          <Routes>
            <Route path="Home" element={<App />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Project />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

render(<Application />, document.getElementById('root'));
