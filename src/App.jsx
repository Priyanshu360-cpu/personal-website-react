import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import './textfont.css';
import left from './left.png';
import right from './right.png';
import video from './bga2.mp4';
var viewportHeader = document.querySelector(".viewport-header");

document.body.addEventListener("scroll", function(event) {
  var opacity = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
  var scale = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
  document.documentElement.style.setProperty('--headerOpacity', opacity);
  document.documentElement.style.setProperty('--headerScale', scale);
});

function App() {
  return (
    <>
    <body>
      
    <div class = "app">
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700' rel='stylesheet' type='text/css'></link>
    <video autoPlay muted loop id="myVideo" source src={video} type="video/mp4">
</video>
<div class = "App">
     <a href = "https://www.goolge.com"><img src = "https://media.discordapp.net/attachments/750089917501014036/913134398914834502/IMG_20211023_175855_214.jpg" class = "App-logo" alt = "logo" ></img></a>
     <img src = {left} class = "left"></img>
     <img src = {right} class = "right"></img>
     <div class = "bright">
     
     <button  type="button" class="button button1"> 
     <img src="https://cdn.discordapp.com/avatars/736232217956843590/bd518c73ae40386d7899b0a6435f14db.png?size=32" /><a href = "https://github.com/Priyanshu360-cpu">Github</a>
  </button>
  </div>
  <div class = "lright">
     <button onclick="window.location.href='/edit/{{.Title}}';" class="button button2">
     <img src="https://cdn.discordapp.com/emojis/868562770277318698.gif?size=32" /> LinkedIn 
  </button>
  </div>
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
<div class = "texta">

</div> 
<div class = "newaa">
<marquee behavior="alternate" direction="left" class="marqueestyle" onmouseover="this.stop();" onmouseout="this.start();">
                            <span class="marqueetext">📢<a href = "https://www.instagram.com/priyanshu.__0007/">Website releasing Soon!</a></span>

            </marquee>
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
