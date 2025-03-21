
import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Contact() {
    const nodeRef = useRef(null);

    return (
        <CSSTransition
            in={true}
            appear={true}
            timeout={300}
            classNames="fade"
            nodeRef={nodeRef}
        >
            <main className="contact" ref={nodeRef}>
                <h1 className="contact-title">Contact</h1>
                <section className="contact-info">
                    <div className="contact-info--mail">
                        <FontAwesomeIcon icon={"envelope-square"} /> angelbarena89@hotmail.com
                    </div>
                    <div className="contact-info--phone">
                        <FontAwesomeIcon icon={"phone-square"} /> +52 1 833 151 3138
                    </div>
                </section>
            </main>
        </CSSTransition>
    );
}