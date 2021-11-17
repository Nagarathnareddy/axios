import axios from 'axios'
import './App.css';

function App() {
  getMoviesDetails()
  return (
    <div className="App">
 <h1>Hello world</h1>
    </div>
  );
}

const getMoviesDetails = async()=>
{
  axios.defaults.baseURL = 'https://services.brninfotech.com/tws'
  //axios.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  axios.defaults.timeout =15000
  axios.defaults.transformResponse =[(data)=>
  {
    console.log("transforming the response")
    return JSON.stringify(data)
    
  }
]
  try {
    let moviesData = await axios.get("MovieDetails2.php?mediaType=movies")
 console.log(moviesData)

    
  } catch (error) {
    console.log(error)
  }
 
}

export default App;
