import React from 'react'

const Title = ({title, alertTitle, profile, profiles}) => {
    
    
    alertTitle();
    console.log(profiles);
  return (
    <h1>
        {JSON.stringify(profile)}
        
      title: {title} || {profile.name} || {profile.location}
    </h1>
  )
};

export default Title
