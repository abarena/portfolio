import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {CSSTransition} from 'react-transition-group';
import Category from './Category';
import { projects } from './constants';

export default function Projects() {
    return (
        <CSSTransition in={true} appear={true} timeout={300} classNames="fade">
            <main className="projects">
                <h1 className="projects-title">Projects</h1>
                <section className="projects-placeholder">
                    <div className="projects-placeholder--spinner">
                        <FontAwesomeIcon  icon="cog" spin/> 
                        <span> this section is work in progress...</span>
                    </div>
                    <a className="projects-placeholder--link" 
                    href="https://github.com/Angel-Barena/portfolio" 
                    target="_blank" >
                        <span>Meanwhile, you could take a look at this website's repo </span>  
                        <FontAwesomeIcon  icon="external-link-alt"/>
                    </a> 
                </section>
                <section className="projects-section">
                    <ul className="projects-section__category">
                        {projects.map(category=> <Category categoryData={category} />)}
                    </ul>
                </section>        
            </main>
        </CSSTransition>
    );
    
}