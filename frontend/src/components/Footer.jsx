// import { list } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import "./Footer.css"
import { Input } from '@chakra-ui/react'
const Footer = () => {
   const footerData=[{
    heading:"Our Policies",
    list:[{name:"covid-19 precautions"},{name:"Our Promise"},{name:"Terms & Conditions"},{name:"Privacy Policy"}]
   },
   {
    heading:"Corporate",
    list:[{name:"Sell With Us"},{name:"Career Opportunities"},{name:"Sitemap"}]
   },
   {
    heading:"Help",
    list:[{name:"How MeanBuy Works"},{name:"My Orders"},{name:"Exchanges, Returns and Refunds"},{name:"Contact Us"},{name:"FAQ"}]
   },
   {
    heading:"Sell With Us",
    list:[{name:"General Information"},{name:"Signup"}]
   }
   
]
  return (
    
    <div className='footerMain'>
        
   {footerData.map((e)=>{
    return (
       
        <div key={e.heading} >
        <div className='footerHeading'>{e.heading}
        
        </div>
        <br />
        {e.list.map((s)=>{
            return (
               <div className='footerList' key={s.name}>
                <Link to="/">{s.name}</Link>
                </div>
               
            )
        })}
       
       
        </div>
       
        
        
    )
   })}
   <div>
    <Input className='inputFooter' htmlSize={18} width='auto' placeholder='Your Email Address' />
    <Button colorScheme='orange'>Subscribe</Button>
    </div>
    </div>
   
   
  )
}

export default Footer