
import logo from './logo.svg';
import mypic from './mypic.png';
import './App.css';
import './textfont.css';
import './night.css';
import left from './left.png';
import right from './right.png';
import video from './bf.mp4';
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { render } from '@testing-library/react';
var viewportHeader = document.querySelector(".viewport-header");
document.body.addEventListener("scroll", function(event) {
  var opacity = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
  var scale = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
  document.documentElement.style.setProperty('--headerOpacity', opacity);
  document.documentElement.style.setProperty('--headerScale', scale);
});
class test{
  constructor(){
   this.name="This"
  }
}
function Appu() {
  const [count, setCount] = useState("");
  const name=["I","s","\n","P","r","i","y","a","n","s","h","u"]
  useEffect(() => {
    for(let i=0;i<name.length;i++)
    setTimeout(() => {
      setCount((count) => count + name[i]);
    }, (i+1)*1000);
  } ,[]);
  return <div class ="glow">{new test().name} {count} </div>;
}
function Appus() {
  const [count, setCount] = useState("");
  const name=["DESKTOP DEVELOPER","\n","APP DEVELOPER","\n","GAME DEVELOPER","\n","GO-LANG LOVER","\n"]
  useEffect(() => {
    for(let i=0;i<name.length;i++)
    setInterval(() => {
      setCount((count) => name[i]);
    }, (i+1)*1000);
  } ,[]);
  return  <div class = "belu">{count}</div> ;
}

function App() {
 
  return (
    
    <>
    <body>
      
    <div class = "app">
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700' rel='stylesheet' type='text/css'></link>
    <video autoPlay muted loop id="myVideo" source src={video} type="video/mp4">
</video>
<div class = "blinker"><a href="https://ww.google.com"><Appu></Appu></a></div>
<Appus></Appus>
<div class = "beluw">
<div class = "bright">
     
     <script source="./button.js"></script>
          <div class="contentse">
             <i class="fas fa-sun"></i>
             &nbsp;&nbsp;&nbsp;
             <input type="checkbox" id="tooglenight" class="cbx hidden"/>
             <label for="tooglenight" class="switch"></label>
             &nbsp;&nbsp;&nbsp;
             <i class="fas fa-moon"></i>
         </div>
       </div>
</div>
<div class = "App">

     
</div>
<div class = "viewport-header">
<div class = "content">
  
<div class = "glow"><a href = "https://github.com/Priyanshu360-cpu">About Me</a></div>
  <div class = "texth"><p><img src = "https://cdn.discordapp.com/emojis/779358851690528808.gif?size=32"></img>Hello my Name is Priyanshu, an Active Learner developing things</p>
  <p><img src = "https://cdn.discordapp.com/emojis/779358851690528808.gif?size=32"></img>I completed my schooling in India and am currently doing btech in Computer </p>
  <p><img src = "https://cdn.discordapp.com/emojis/779358851690528808.gif?size=32"></img>I am good in Javascript, TypeScript, Css, ReactJs, Golang, Python, C, cpp, C#.</p>
  <p><img src = "https://cdn.discordapp.com/emojis/779358851690528808.gif?size=32"></img> I have a couple of verified application on different platforms and i also go by the name Akio </p>
  <p><img src = "https://cdn.discordapp.com/emojis/779358851690528808.gif?size=32"></img> I am currently Learning Rust and Aseembly Language </p>
  <p><img src = "https://cdn.discordapp.com/emojis/779358851690528808.gif?size=32"></img> I stay active with competitive programming events </p>
  <p><img src = "https://cdn.discordapp.com/emojis/779358851690528808.gif?size=32"></img>My hobbies are Playing cricket and reading books . </p>
  <p><img src = "https://cdn.discordapp.com/emojis/779358851690528808.gif?size=32"></img>I have a deep interest in space and everything related with space attracts me towards it. </p>
  <p> <img src = "https://cdn.discordapp.com/emojis/779358851690528808.gif?size=32"></img>am a keen obeserver and i actively write blogs on my Linked In account :) </p></div>

  
</div>
</div>
<div class = "newaa">
<marquee behavior="alternate" direction="left" class="marqueestyle" onmouseover="this.stop();" onmouseout="this.start();">
                            <span class="marqueetext">📢<a href = "https://www.instagram.com/priyanshu.__0007/">Website releasing Soon!</a></span>

            </marquee>
            </div>
            <div class = "texta">
            <iframe src="https://discordapp.com/widget?id=701041158876299373&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
<div class = "cardo">
<div class="skillcard">
<h1>My Skills</h1>

<p>JAVASCRIPT</p>
<div class="container">
  <div class="skills html"><span>90%</span></div>
</div>

<p >GOLANG</p>
<div class="container">
  <div class="skills css"><span>80%</span></div>
</div>

<p>C FAMILY</p>
<div class="container">
  <div class="skills js"><span>65%</span></div>
</div>

<p>JAVA</p>
<div class="container">
  <div class="skills php"><span>60%</span></div>
</div>
</div>
</div>
</div> 

<ul>

  <li><a class="active" href="#home">Priyanshu</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li style={{float:"right"}}><a class="active" href="#about"><img src ="https://cdn.discordapp.com/emojis/909511958053658634.gif?size=32"></img></a></li>
  <li style={{float:"right"}}><a class="active" href="#about"><img src ="https://cdn.discordapp.com/emojis/797052330054516747.gif?size=32"></img></a></li>
  <li style={{float:"right"}}><a class="active" href="#about"><img src ="https://cdn.discordapp.com/avatars/736232217956843590/bd518c73ae40386d7899b0a6435f14db.png?size=32"></img></a></li>
</ul>



     </div>
     </body>
     
</>
  );
}

export default App;
