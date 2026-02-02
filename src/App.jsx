import React from 'react'
import Card from './components/Card.jsx'
import { Car } from 'lucide-react'; 
const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0.jpg",
    companyName: "Google",
    description : "Join our dynamic team to innovate and shape the future of technology with cutting-edge projects and a collaborative work environment.",
    datePosted: "5 days ago",
    position: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: '120000/Month',
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://images.stockcake.com/public/1/c/5/1c5f326a-d867-4ac6-ba64-47b3edb9f752_large/illuminated-apple-logo-stockcake.jpg",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    description : "Be a part of a team that values innovation and creativity, working on groundbreaking products that impact millions worldwide.",
    position: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: '145000/Month',
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbpIfA-_GwTVZBVlpCvdIcLVOsCxn4BmqHA&s",
    companyName: "Meta",
    datePosted: "10 days ago",
    description : "Work with a passionate team to build social technologies that connect people and foster community on a global scale.",
    position: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: '110000/Month',
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.vectorstock.com/i/500p/39/87/amazon-icon-black-and-white-vector-34243987.jpg",
    companyName: "Amazon",
    datePosted: "3 weeks ago",
    description : "Join us in revolutionizing e-commerce and cloud computing, delivering exceptional experiences to customers worldwide.",
    position: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: '140000/Month',
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:286,cw:736,ch:736,q:80,w:736/BDvqkcvVLHBu6xZ5yaN7jQ.jpg",
    companyName: "Netflix",
    description : "Collaborate with a creative team to develop innovative streaming solutions that entertain and engage audiences globally.",
    datePosted: "1 week ago",
    position: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: '160000/Month',
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYD88cvp8-Rxy_qRPOWPtAOjj5zoVmvPTqYA&s",
    companyName: "Microsoft",
    description : "Be part of a team that drives innovation in software development, creating solutions that empower individuals and businesses worldwide.",
    datePosted: "4 days ago",
    position: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: '115000/Month',
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0.jpg",
    companyName: "Google",
    datePosted: "6 weeks ago",
    description : "Join our innovative team to work on cutting-edge AI projects that push the boundaries of technology and impact millions worldwide.",
    position: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: '170000/Month',
    location: "Pune, India"
  },
  {
    brandLogo: "https://cdn.vectorstock.com/i/500p/39/87/amazon-icon-black-and-white-vector-34243987.jpg",
    companyName: "Amazon",
    datePosted: "8 days ago",
    description : "Work with a dynamic team to develop scalable e-commerce solutions that enhance customer experiences globally.",
    position: "DevOps Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: '90000/Month',
    location: "Chennai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbpIfA-_GwTVZBVlpCvdIcLVOsCxn4BmqHA&s",
    companyName: "Meta",
    datePosted: "10 weeks ago",
    description : "Join our team to create innovative social media solutions that connect people and foster global communities.",
    position: "Product Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: '155000/Month',
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://images.stockcake.com/public/1/c/5/1c5f326a-d867-4ac6-ba64-47b3edb9f752_large/illuminated-apple-logo-stockcake.jpg",
    companyName: "Apple",
    datePosted: "12 days ago",
    position: "UI/UX Engineer",
    description : "Design and develop user interfaces and experiences that are intuitive, engaging, and accessible.",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: '85000/Month',
    location: "Mumbai, India"
  }
  ];
  console.log(jobOpenings)
  return (
      <div className="parent">
        {jobOpenings.map(function(ele,idx){
          console.log(idx);
          return <div key={idx}>
            <Card description={ele.description} location={ele.location} pay={ele.pay} tag1={ele.tag1} tag2={ele.tag2} logo={ele.brandLogo} company={ele.companyName} post ={ele.position} date={ele.datePosted} />
            </div>
        })}
      </div>
  )
}

export default App
