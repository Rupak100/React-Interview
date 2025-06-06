import { Link, Outlet, useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    const handlenavigate =() =>{
        const userId =12345;
        navigate(`profile/${userId}`,{state:{
            name:"Rupak",
            age:23,
            userIDs:userId
        }})
    }
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <button onClick={handlenavigate}>Profile</button> |{' '}
        <Link to="settings">Settings</Link>
      </nav>
      <hr />
      <Outlet /> {/* Renders nested components here */}
    </div>
  );
}

export default Dashboard;
