import { CourseStaff } from './components/course-staff'
import './App.css'

function App() {
  return (
    <div>
      <h2>Welcome to our first React Application</h2>
      <div>
        <h4>Look at my custom content!</h4>
      </div>

      <h2>The amazing CS391 course staff!</h2>
      <div>
          <CourseStaff name="Taymaz" title="Professor" rating={100} subject="Computer Science" />
          <CourseStaff name="Jeffrey" title="Teaching Assistant" rating={100} subject="Mathematics" />
      </div>

    </div>


  )
}

export default App
