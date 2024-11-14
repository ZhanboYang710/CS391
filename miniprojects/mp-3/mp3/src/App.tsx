import { useState } from 'react'
import { createBrowserRouter, Route, Routes, RouterProvider, } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import ResumeHome from '../components/resume_home';
import EducationPage from '../components/education';
import ExperiencePage from '../components/experience';
import ProjectPage from '../components/project';
import ActivityPage from '../components/activity';
import SkillPage from '../components/skill';
import './App.css';
import styled from 'styled-components';

const MainContent = styled.div`
    background-color: brown;
    color: white;
    margin: 0 10%;
    padding: 0;


  #middle-content {
      display: flex;
      flex-direction: row;
  }

  header {
      padding-left: 2vw;
      text-align: left;
  }

  ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 1%;
      padding: 0;
      width: 90%;
      height: 100%;
  }

  li {
      background-color: gold;
      margin: 10% 2%;
      padding: 10%;
      text-align: center;
      /* align-items: center; */
  }

  li a{
      font-size: calc(2px + 1.5vw);
      text-decoration: none;
  }


      height: 100vh;
      max-width: 70vw;
      background-color: rgba(255, 204, 0, 0.695);
      margin: 1vw;
      color: darkblue;
      padding: 2%;

      text-align: center;
      font-size: calc(5px + 2vw);


  table #old{
      margin: 3vh 0;
      text-align: left;
  }

  table {
      max-width: 70vw;
  }

  img {
      /* max-width: 100vw; */
      width: 30vw;
      height: auto;
  }

  #purpose {
      text-align: justify;
  }

  @media screen and (max-width: 750px) {
    header {
        padding: 0;
        text-align: center
    }

    nav {
        color: darkolivegreen;
        max-width: 100vw;
        /* width: 100vw; */
        width: 100vw;
        max-height: 10vw;
        margin: 0;
        padding: 0;
        max-height: 10vw;
    }

    ul {
        width: 100vw;
        margin: 0;
        padding: 1vh 0;
        padding-left: 0;
        flex-direction: row;
        justify-content: space-evenly;
    } 

    li {
        min-width: 10vw;
        margin: 1vw 0;
        padding: 1%;
    }

    #middle-content {
        display: flex;
        flex-direction: column;
    }

    main {
        max-width: 100vw;
        margin: 0;
    }
  }
`

const Root = () => {
  return (
    <>
      <Header />
      <MainContent>
        <Routes>
          <Route path={`/`} element={<ResumeHome />}></Route>
          <Route path={`/education`} element={<EducationPage />}></Route>
          <Route path={`/experience`} element={<ExperiencePage />}></Route>
          <Route path={`/project`} element={<ProjectPage />}></Route>
          <Route path={`/activity`} element={<ActivityPage />}></Route>
          <Route path={`/skill`} element={<SkillPage />}></Route>
        </Routes>
      </MainContent>
    </>
  )
}

const resume_router = createBrowserRouter (
  [
    {path:"*", Component: Root},
  ]
)

export default function App() {
  return (
    <>
      <RouterProvider router={resume_router} />
      <Footer />
    </>
  )
}


