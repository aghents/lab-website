import { ReactElement } from 'react';

export function Home(): ReactElement {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="banner-info">
            <h2>Pattern Recognition Lab | UAI</h2>
            <p> Data Science, Machine Learning and Applied Statistics</p>
          </div>
        </div>
      </div>
      <div className="container news">
        <h4>News</h4>
        <ul>
          <li>
            <b>Jan. 2024: </b> Jiajun Hu and Jialun Cao have successfully
            defended their PhD thesis.
          </li>

          <li>
            <b> Nov. 2023: </b> One paper is accepted by IEEE S&P 2024.
          </li>

          <li>
            <b>Jul. 2023: </b> Huaxun Huang has successfully defended his PhD
            thesis. Congratulations!
          </li>

          <li>
            <b>Jul. 2023: </b> Three papers are accepted by ESEC/FSE 2023.
            Congrats to Ying, Ming, Jialun and Xiao.
          </li>

          <li>
            <b>Jul. 2023: </b> One paper on software testing using LLM is
            accepted by ASE'23.
          </li>

          <li>
            <b>Jul. 2023: </b> Yongqiang Tian has successfully defended his PhD
            thesis. Congratulations!
          </li>

          <li>
            <b>Jul. 2023: </b> Prof. Shing-Chi Cheung has been promoted to chair
            professorship.
          </li>

          <li>
            <b>Jun. 2023: </b> One paper on program synthesis is accepted by
            TOSEM.
          </li>

          <li>
            <b>Nov. 2022: </b> Prof. Shing-Chi Cheung has been elected to the
            IEEE Fellow Class 2023.
          </li>
        </ul>
      </div>
      <div id="about" className="team">
        <div className="container">
          <h4>About us</h4>
          <div className="group">
            <img src="images/about.jpeg" alt=" " />
          </div>
          <div className="group-text">
            <h3>CASTLE Lab at HKUST</h3>
            <p>
              <b>CASTLE</b> (<b>C</b>ode <b>A</b>nalysi<b>S</b>, <b>T</b>esting
              and <b>LE</b>arning) Lab is a part of Software Engineering Group
              in HKUST. The lab is headed by Prof.{' '}
              <a href="http://www.cse.ust.hk/faculty/scc/">Shing-Chi Cheung</a>.
              We are interested in research topices regarding program analysis,
              testing and debugging, machine learning, crowdsourcing and open
              source software repository.
            </p>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </>
  );
}
