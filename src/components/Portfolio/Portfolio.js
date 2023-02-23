import React,{useState,useEffect} from 'react'
import './Portfolio.css'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'


const DUMMY_DATA=[{
    id:1,
    Name: 'Restaurant Website',
    Img: "https://firebasestorage.googleapis.com/v0/b/portfolio-01a2.appspot.com/o/Royale%20Punjab.png?alt=media&token=3c94003a-998b-4ccf-b4dd-1deef33a27fc",
    Description : 'This is my favourite project which is for a famous punjabi restaurant in my city.I really loved the developing this site for them',
},
{
    id:2,
    Name: 'Weathrify Application',
    Img: "https://firebasestorage.googleapis.com/v0/b/portfolio-01a2.appspot.com/o/Weatherify.png?alt=media&token=07edec33-efb1-40cf-885f-da4116cd5362",
    Description : 'This react application gives information about weather of the city entered by the user.',
},
{
    id:3,
    Name: 'Magic Text App',
    Img: "https://firebasestorage.googleapis.com/v0/b/portfolio-01a2.appspot.com/o/Word%20Counter.png?alt=media&token=7b7cd152-c83f-4d7a-a7d5-40f05c7bc6f5",
    Description : 'MagicText react application helps to perform various operations at text such as converting into lowercase,uppercase, removing extra spaces, clearing text, counting words and characters.',
}
, {
    id:4,
    Name: 'Instagram Clone App',
    Img: "https://firebasestorage.googleapis.com/v0/b/portfolio-01a2.appspot.com/o/Instagram.png?alt=media&token=06d4f200-a531-4186-9b6e-f1016a7c0531",
    Description : 'This is my favourite project which is for a famous punjabi restaurant in my city.I really loved the developing this site for them',
},
{
    id:5,
    Name: 'Food Order App',
    Img: "https://firebasestorage.googleapis.com/v0/b/portfolio-01a2.appspot.com/o/Food%20Ordering%20Application.png?alt=media&token=77b7e23a-5850-4c82-be37-99709ce14a21",
    Description : 'This is also one of my favourite project which is for a local barber in my city.I really loved the developing this site.',
},
{
    id:6,
    Name: 'Portfolio Website',
    Img : "https://firebasestorage.googleapis.com/v0/b/portfolio-01a2.appspot.com/o/Portfolio.png?alt=media&token=a386f84e-eddc-41c8-8246-7cce8fbee77f",
    Description : 'In this Project, the primary techs used are React.Js,Javscript,Scss.Please visit it and give me a review.',
},
]

function Portfolio() {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 5000)
      }, [])
    
  return (
    <>
    <div className="portfolio-container">
        <div className="heading-text">
        <AnimatedLetters
              letterClass={letterClass}
              strArray={['M','y',' ','P','r','o','j','e','c','t','s']}
              idx={15}
            />
        </div>
        <div className="projects">
            { DUMMY_DATA.map((project)=>(
                <div className="project">
                <div className="project-img">
                   <img src={project.Img} alt="project-img"></img>
                </div>
                <div className="project-heading">
                 <h3>{project.Name}</h3>
                </div>
                <div className="project-description">
                <p>{project.Description}</p> 
                </div>
            </div>
            ))}
            </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Portfolio