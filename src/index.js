import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Integrate extends React.Component{
  render(){
    return(
        <div id="main">
          <nav>
            <ul>
                  <li><span>&#9993;</span><a class="nava" href="mailto:business@papaintegrator.com">business@papaintegrator.com</a></li>
                  <li><span>&#9742;</span><a class="nava" href="tel:917701908894">+91 770 190 8894</a></li>
                  <li><span>&#9755;</span><strong>New Delhi</strong></li>
                  <li id="motion"><a class="nava" href="www.facebook.com">Facebook</a></li>
                  <li><a class="nava" href="www.instagram.com">Instagram</a></li>
                  <li><a class="nava" href="www.twitter.com">Twitter</a></li>
            </ul>
          </nav>
              <div class="fixing">
                <div id="thor" class="belownav"></div>
                <div id="tech">
                  <p><a id="daddy" href="http://www.papaintegrator.com">PAPAINTEGRATOR &emsp;  TECHNOLOGIES</a></p>
                     <h3 id="making">Making Learning An Experience</h3>
                </div>
                <div id="next">
                  <a class="belownav" href="http://www.papaintegrator.com">Home</a>
                  <a class="belownav" href="http://www.papaintegrator.com">About</a>
                  <a class="belownav" href="http://www.papaintegrator.com">Reach Us</a>
                </div>
              </div>
               <div id="below-head">Place pictures here</div>
               <div id="imgblocks">
                 <div class="display">
                   <img src="" alt="" />
                    <h3>eLearning</h3>
                 </div>
                 <div class="display">
                   <img src="" alt="" />
                     <h3>Web</h3>
                 </div>
                 <div class="display">
                   <img src="" alt=""/>
                    <h3>Content</h3>
                 </div>
               </div>
               <div id="Footer">
                 <footer id="foot">
                   <h1 id="foothead">PAPAINTEGRATOR TECHNOLOGIES</h1>
                   <div id="subline">
                   <h2>eLearning Development</h2>
                   <hr width="1" size="30" />
                   <h2>Instructional Designing</h2>
                   <hr width="1" size="30" />
                   <h2>Web Development</h2>
                   </div>
                   <div id="contactbtm">
                      <h1 id="footcontact">Contact: </h1>
                      <span>&#9993;</span><a class="nava" href="mailto:business@papaintegrator.com">business@papaintegrator.com</a>
                      <span>&#9742;</span><a class="nava" href="tel:917701908894">+91 770 190 8894</a>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkedVgKoGFuBYcazoHM-KeKlqxQwKyF4mlyAO0KlAKYclatRKQ" /><a class="nava" href="https://www.facebook.com"> Facebook</a>
                   </div>
                 </footer>
               </div>
            </div>
    );
  }
};

ReactDOM.render(<Integrate />, document.getElementById('root'));
