import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Title from "./components/Title";

const App =() => {
  let title ="Belajar React";
  title="Belajar Ganti";
  const description="hai aku deskripsi";

  function showHello() {
    const sum = 1 + 2;
    return "hello world"+ sum;
  }

  const showHello2= (params) => {
    return "hello dari aku";
  }

  const testParams = (params) => {
    return params;
  };

  const alertTitle =() => {
    console.log("Hello dari parent")
  };

  const profile ={
    id:1,
    name: "farid",
    location : "indonesia",
  };

  const profiles = [
  {
    id:1,
    name: "nande",
    location : "indonesia",
  },
  {
    id:1,
    name: "joko",
    location : "indonesia",
  },
  {
    id:1,
    name: "anwar",
    location : "indonesia",
  },
  ]

  


  return (
    <div style={{ 
      backgroundColor: "blue"
     }}>
      <Header />
      <Title 
      title={title} 
      alertTitle={alertTitle} 
      profile={profile} 
      profiles={profiles}/>

      <h1>{title}</h1>
      <h2>{description}</h2>
      <h2>{showHello()}</h2>
      <h2>{showHello2()}</h2>
      <h2>{testParams("ini adalah params")}</h2>

      <Content>
      <h1> INi aku raja meksiko </h1>
      </Content>
      <Footer />
    </div>
  );
};

export default App;





