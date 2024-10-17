import React, { useEffect, useState } from 'react';
import api from '../Api';
import { useAuth } from "./AuthContext"; 
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const navigate = useNavigate();
    const [jokes, setJokes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { isAuthenticated,logout } = useAuth();

    const color = ['skyblue','lightgrey','rgb(199, 157, 17)']
  
    const fetchJokes = async () => {
      try {
        const response = await api.get('/public/randomjokes'); 
        setJokes(response.data?.data?.data); 
        
        setLoading(false);
      } catch (error) {
        setError(error.response ? error.response.data : error.message);
        setLoading(false);
      }
    };

    const handleLogout = async () => {
        try {
          await api.post('/users/logout'); 
          localStorage.removeItem('accessToken'); 
          localStorage.removeItem('refreshToken'); 
          logout(); 
          navigate('/'); 
        } catch (error) {
          console.error('Logout failed:', error);
          alert('Error: ' + (error.response ? error.response.data : error.message));
        }
      };

  
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        } else {
            fetchJokes(); 
        }
    }, [isAuthenticated, navigate]);
  
    if (loading) return <p>Loading...</p>;

  console.log({jokes})

    return (
        <div>
            <div className='d-flex m-4'>
            <h1>Random Jokes</h1> 
            <button onClick={handleLogout} className='ms-auto' style={{backgroundColor:'white',borderRadius:'5px',width:'140px',fontWeight:700}}>Logout</button>

            </div> 
     
        <ul className='mx-5' style={{listStyleType:'none'}}>
          {jokes?.map((joke:any, index) => (
            <li className='p-3 mb-4 text-center' key={index} style={{backgroundColor:`${color[index%3]}`}}>{joke?.content}</li> 
          ))}
        </ul>
      </div>
    );
};

export default Dashboard;
