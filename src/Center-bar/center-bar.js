import './center-bar.css'
import articles from '../data/articles.json'
import skills from '../data/skills.json'
import footer from '../data/footer.json'

function Center_bar(){
    return( 
      <div className="center-bar">
          <h1>Олександр Ліла</h1>
          <div class="row">
            <div class="contact-skills">
                <section class="section-contacts">
                    <h2>Контакти</h2>
                    <span>Email: </span><a href="email: example@ukr.net">alekslila_45@ukr.net</a>
                    <p>Телефон: <a href="tel:+38063-299-11">+38(063)-299-11-32</a></p>
                </section>
                <section class="section-skills">
                    <h2>Навички</h2>
                    <div className="skills">
                      {skills.map(item=>
                        <section>
                          <p>{item.title}</p>
              
                        </section>   
                      )} 
                    </div>         
                </section>
            </div>
            <img  src="../img/photo1.png" alt="photo"/>
          </div>
          <div className="paragraph">
              {articles.map(item =>
                <section key={item.title}>
                  <h2>{item.title}</h2>
                    <div>
                        {item.body.map((line, index) => (
                        <p key={index}>{line}</p>
                        ))}
                    </div>
                </section>
              )}
          </div>

          
          <div className="Footer">
                {footer.map(item=>
                    <section>
                        <p>{item.title}</p>
              
                    </section>  
                )}      
          </div>      
          
      </div>         
    );
  }
  export default Center_bar;