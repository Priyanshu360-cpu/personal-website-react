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
function clicker(){
  window.location.href='https://www.linkedin.com/in/priyanshu-tiwari-3a04171aa/';
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

  <a href = "https://www.goolge.com"><img src = "https://media.discordapp.net/attachments/750089917501014036/913134398914834502/IMG_20211023_175855_214.jpg" class = "App-logo" alt = "logo" ></img></a>
</div>
</div>
<div class = "newaa">
<marquee behavior="alternate" direction="left" class="marqueestyle" onmouseover="this.stop();" onmouseout="this.start();">
                            <span class="marqueetext">📢<a href = "https://www.instagram.com/priyanshu.__0007/">Website releasing Soon!</a></span>

            </marquee>
            </div>
            <div class = "texta">
              <div class = "proj"><img src="https://cdn.discordapp.com/avatars/838697702760906802/09646c544c38aee2dd428999f56a2097.png?size=64"></img><p>Caretaker is a cross platform Mobile App to monitor and maintain your health</p><p>it was built with xamarain and c sharp on vs 2022</p><p>Track your health,find solutions and stay healthy with caretaker.</p><button class="button button2">Visit</button></div>
              <div class = "proi1"><img id="object1" src="https://cdn.discordapp.com/avatars/741280410180386947/97ddc40395dfa5312cdbf02f4da07d7a.png?size=64"></img><p>Techie is a Multifunctioncal bot built with Javascript</p><p>From Catching Sockets and lavalink to providing safe environemnt It does all</p><p>Easily listen to songs and show your friends what you are listening with the rpc client with Techie.</p><button class="button button2">Visit</button></div>
              <div class = "proj2"><img src="https://cdn.discordapp.com/avatars/798655819033608262/bb6accbe3c1ac258c138d151f503911a.png?size=64"></img><p>Cordy is a npm package which eases your bot making</p><p>Cordy has support for Discordjs</p><p>You can build a bot with cordy with no coding experience before.</p><button class="button button2">Visit</button></div>
            <iframe src="https://discordapp.com/widget?id=222078108977594368&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
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
  <li style={{float:"right"}}><a class="active" href="https://discord.gg/9cKGtRNDqZ"><img src ="https://cdn.discordapp.com/emojis/909511958053658634.gif?size=32"></img></a></li>
  <li style={{float:"right"}}><a class="active" href="https://www.instagram.com/priyanshu.__0007/"><img src ="https://cdn.discordapp.com/emojis/797052330054516747.gif?size=32"></img></a></li>
  <li style={{float:"right"}}><a class="active" href="https://github.com/Priyanshu360-cpu"><img src ="https://cdn.discordapp.com/emojis/880422918268518450.png?size=32"></img></a></li>
</ul>



     </div>
     <div class ="skillsbg"></div>
     <div class="conc">
       <p>Made with Reactjs with ❤️</p>
       <p>Shoot me an email at <a href="tpriyanshu775@gmail.com">tpriyanshu775@gmail.com</a></p>
       </div>
     <div class = "linked"><button onclick={() =><clicker></clicker>} class="button button2">
     <img src="https://cdn.discordapp.com/emojis/868562770277318698.gif?size=32" /> LinkedIn 
  </button></div>
     </body>
     
</>
  );
}

export default App;

