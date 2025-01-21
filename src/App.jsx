import Navbar from "./components/Navbar"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import JobCard from "./components/JobCard"
// import jobData from "./JobDummyData"
import { useEffect, useState } from "react"
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import {db} from "./firebase.config"

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);

  const fetchJobs = async() => {
    setCustomSearch(false);
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
  }

  const fetchJobsCustom = async (jobCriteria) => {
    try {
      setCustomSearch(true);
      const tempJobs = [];
      const jobsRef = collection(db, "jobs");
  
      // Dynamically add query constraints based on jobCriteria
      let queryConstraints = [orderBy("postedOn", "desc")];
      if (jobCriteria.type) queryConstraints.push(where("type", "==", jobCriteria.type));
      if (jobCriteria.title) queryConstraints.push(where("title", "==", jobCriteria.title));
      if (jobCriteria.experience) queryConstraints.push(where("experience", "==", jobCriteria.experience));
      if (jobCriteria.location) queryConstraints.push(where("location", "==", jobCriteria.location));
  
      const q = query(jobsRef, ...queryConstraints);
      const req = await getDocs(q);
  
      req.forEach((job) => {
        tempJobs.push({
          ...job.data(),
          id: job.id,
          postedOn: job.data().postedOn.toDate(),
        });
      });
  
      setJobs(tempJobs);
    } catch (error) {
      console.error("Error fetching custom jobs:", error);
    }
  };
  


  useEffect(() => {
    fetchJobs()
  },[])


  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom}/>
      {customSearch && 
        <button onClick={fetchJobs} className="flex pl-[1250px] mb-2">
          <p className="bg-blue-500 px-10 py-2 rounded-md text-white">Clear Filters</p>
        </button>
      }
      {jobs.map((job)=> (
        <JobCard key={job.id} {...job}/>
      ))}
    </div>
  )
}

export default App