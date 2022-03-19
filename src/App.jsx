import './App.css';
import './textfont.css';
import './night.css';
import video from './bf.mp4';
import { useState, useEffect } from "react";
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
  const name=["DESKTOP DEVELOPER","\n","APP DEVELOPER","\n","SYSTEM DEVELOPER","\n","GO-LANG LOVER","\n","\n","RUST USER"]
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
const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}
const onClickUrl = (url) => {
  return () => openInNewTab(url)
}
function App() {
 
  return (
    
    <>
    <body>
    <div class = "app">
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700' rel='stylesheet' type='text/css'></link>
    <video autoPlay muted loop id="myVideo" source src={video} type="video/mp4">
</video>
<div class = "blinker"><a href="https://www.google.com"><Appu></Appu></a></div>
<Appus></Appus>


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
              <div class = "proj"><img src="https://cdn.discordapp.com/avatars/838697702760906802/09646c544c38aee2dd428999f56a2097.png?size=64"></img><p>Caretaker is a cross platform Mobile App to monitor and maintain your health</p><p>it was built with xamarain and c sharp on vs 2022</p><button class="button button2" onClick={onClickUrl('https://github.com/Priyanshu360-cpu/Caretaker-cross-platform-MobileApp.git')}>Visit</button></div>
              <div class = "proi1"><img id="object1" src="https://cdn.discordapp.com/avatars/741280410180386947/97ddc40395dfa5312cdbf02f4da07d7a.png?size=64"></img><p>Techie is a Multifunctioncal bot built with Javascript</p><p>From lavalink to providing safe environemnt It does all</p><p> listen to songs and show others what you are listening with Techie.</p><button class="button button2" onClick={onClickUrl('https://top.gg/bot/741280410180386947')}>Visit</button></div>
              <div class = "proj2"><img src="https://cdn.discordapp.com/avatars/798655819033608262/bb6accbe3c1ac258c138d151f503911a.png?size=64"></img><p>Cordy is a npm package which eases your bot making</p><p>Cordy has support for Discordjs</p><p>You can build a bot with cordy with no coding experience before.</p><button class="button button2" onClick={onClickUrl('https://www.npmjs.com/package/cordy/v/1.0.5?spm=a2c6h.24755359.0.0.74a23a2bsFqyoJ&file=1.0.5')}>Visit</button></div>
            <iframe src="" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

</div> 

<ul>

  <li><a class="active" href="#home">Priyanshu</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  
  <li style={{float:"right"}}><a class="active" href="https://www.instagram.com/priyanshu.__0007/"><img src ="https://cdn.discordapp.com/emojis/797052330054516747.gif?size=32"></img></a></li>
  <li style={{float:"right"}}><a class="active" href="https://github.com/Priyanshu360-cpu"><img src ="https://cdn.discordapp.com/emojis/880422918268518450.png?size=32"></img></a></li>
</ul>



     </div>
     <div class ="skillsbg">
     
     </div>
     <div class="conc">
       <p>Made with Reactjs with ❤️</p>
       <p>Shoot me an email at <a href="https://www.tpriyanshu775@gmail.com">tpriyanshu775@gmail.com</a></p>
       </div>
     
     </body>
     
</>
  );
}

export default App;

