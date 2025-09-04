import React from 'react'
import myimage from '../images/image1.jpg' 

function Test() {
  return (
    <div>
      <h1>My Sample Page</h1>
      <p>Author : Dharshini S</p>
      < img src='https://scontent-maa2-1.xx.fbcdn.net/v/t1.6435-9/59429342_1082462871944453_1275865269872361472_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=108&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=3Pou7fLN4aoQ7kNvwFWzqia&_nc_oc=AdkhF0nuXNGyaLuK6XJ3Ox3zIS2yU4WsCcy-jHRaeru5XTtyksM4xHIUuVRh04vWArU&_nc_zt=23&_nc_ht=scontent-maa2-1.xx&_nc_gid=DhRZoo5_srywqsKJ1c5Mng&oh=00_AfWhS4-XFcNk255rcGxqwzzriORjCIEI1mr2DcvjTJAjWQ&oe=68BA48FE' alt='BIT'/>
      < img src={myimage} alt='bit' />
    </div>  
  )
}

export default Test
