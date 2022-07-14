import './App.css';


function App() {
  const style = {
    fontSize: 8
  }
  return (
    <div className="App">
        <img className="logo" src="https://ecommercenews.eu/wp-content/uploads/2020/11/paack.png" alt="logo" />
      <div className='left-content'>
          <h4 style={{color: "blue"}}>Aliquam Risus Justo</h4>
          <p style={style}>28 March,2018 | Posted by Andrew</p>
          
          <p>
          <img className="first-img" src="https://www.thebalancecareers.com/thmb/Nj7Q2NoZG2e8puC8d3BcN1Q5uy0=/405x0/filters:max_bytes(150000):strip_icc()/software-developer-job-description-salary-and-skills-2061833-Final-edit-9875eff5eaf04cac9c010711547fe499.jpg" alt="para-pic" />
            Developing writers can often benefit from examining an essay, a paragraph, or even a sentence to determine what makes it effective. 
            On the following pages are several paragraphs for you to evaluate on your own, along with the Writing Center's explanation.
          </p><br></br>
          <p>Note: These passages are excerpted from actual student papers and retain the original wording. Some of the sentences are imperfect, but we have chosen these passages to highlight areas in which the author was successful.
            Thanks to the students who provided their writing for this page of our website. Do you have a discussion post, paper, or other writing assignment that you are particularly proud of? We would love to use it as a sample.</p>
          <button>Read More</button>
          <button>Contact</button>
          <div className="left">
          <h4 style={{color: "blue"}}>Aliquam Risus Justo</h4>
          <p style={style}>28 March,2018 | Posted by Andrew</p>
          
          <p>
          <img className="second-img" src="https://s27389.pcdn.co/wp-content/uploads/2021/08/addressing-demand-for-global-software-developer-talent-1011x440.jpeg.optimal.jpeg" alt="para-pic" />
            Developing writers can often benefit from examining an essay, a paragraph, or even a sentence to determine what makes it effective. 
            On the following pages are several paragraphs for you to evaluate on your own, along with the Writing Center's explanation.
          </p><br></br>
          <p>Note: These passages are excerpted from actual student papers and retain the original wording. Some of the sentences are imperfect, but we have chosen these passages to highlight areas in which the author was successful.
            Thanks to the students who provided their writing for this page of our website. Do you have a discussion post, paper, or other writing assignment that you are particularly proud of? We would love to use it as a sample.</p>
          <button>Read More</button>
          </div>
        </div>
      <div className="right-content">
        <span style={{color: "blue"}}>Sidebar menu</span>
        <ul>
        <a href="#" class="link"><li>Home</li></a>
        <a href="#" class="link"><li>About us</li></a>
        <a href="#" class="link"><li>Blog</li></a>
        <a href="#" class="link"><li>Demo</li></a>
        </ul>
        <div className="right">
        <span>Sponsors</span>
        <ul>
        <a href="#" class="link"><li>Home<p style={style}>This is home</p></li></a>
        <a href="#" class="link"><li>About us<p style={style}>This is about</p></li></a>
        <a href="#" class="link"><li>Blog<p style={style}>This is blog</p></li></a>
        <a href="#" class="link"><li>Demo<p style={style}>This is demo</p></li></a>
        </ul>
        </div>
      </div>
      <div className="bottom-content">
      <div className="bottom-left">
          <h4>Image Gallery</h4>
          <img className="bottom-img" src="https://chennai.vit.ac.in/wp-content/uploads/2021/08/Types-and-Future-of-Software-Developer.jpg" alt="bottom-img"/>
          <img className="bottom-img" src="https://chennai.vit.ac.in/wp-content/uploads/2021/08/Types-and-Future-of-Software-Developer.jpg" alt="bottom-img"/>
          <img className="bottom-img" src="https://chennai.vit.ac.in/wp-content/uploads/2021/08/Types-and-Future-of-Software-Developer.jpg" alt="bottom-img"/>
          <img className="bottom-img" src="https://chennai.vit.ac.in/wp-content/uploads/2021/08/Types-and-Future-of-Software-Developer.jpg" alt="bottom-img"/>
          <h4>Lorem ipsum</h4>
          <p> Developing writers can often benefit from examining an essay, a paragraph, or even a sentence to determine what makes it effective. 
            On the following pages are several paragraphs for you to evaluate on your own, along with the Writing Center's explanation.</p>
        </div>
        <div className="bottom-center">
          <h4>Lorem ipsum</h4><br></br>
          <p>
          Developing writers can often benefit from examining an essay, a paragraph, or even a sentence to determine what makes it effective. 
            On the following pages are several paragraphs for you to evaluate on your own, along with the Writing Center's explanation.
          </p>
        </div>
        <div className="bottom-right">
        <span>Sponsors</span>
        <ul>
        <a href="#" class="link"><li>Home</li></a>
        <a href="#" class="link"><li>About us</li></a>
        <a href="#" class="link"><li>Blog</li></a>
        <a href="#" class="link"><li>Demo</li></a>
        </ul>
        </div>
      </div>
      <footer>
        <span>copyright@avinash-2022 All right reserve</span>
      </footer>
      
      
        
    </div>
  );
}

export default App;
