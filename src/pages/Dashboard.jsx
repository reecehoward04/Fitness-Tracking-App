import '../css/Dashboard.css'
import ProgressRing from '../components/ProgressRing'

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <div className='nutrition-container card'>
          <div>calories: </div>
        </div>
        <div className="progress-container card">
          {/* pull from database for name below and similar data */}
          <h1>Welcome Back {'name'}</h1>
          <h2>Streak {'num'}</h2>
        </div>
        <div className='workout-container card'>workouts</div>
        <div className='card'>graph</div>
        <div className='card'>another</div>
      </div>
    </div>
  )
}

export default Dashboard
