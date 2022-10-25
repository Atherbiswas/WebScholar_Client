import React from 'react';
import Footer from '../shared/Footer/Footer';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div className='container section-padding'>
            <section className='container shadow-lg rounded p-3 fw-bolder'>
                <h3>What is cors?</h3>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                <br /><br />
                <p>For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.</p>
            </section>
            <div className='section-padding'>
            <section className='container shadow-lg rounded p-3 fw-bolder'>
                <h3>Why are you using firebase?</h3>
                <p>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</p>

                <br /><br />
                <h3>What other options do you have to implement authentication?</h3>
                <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.Cybercriminals always improve their attacks. As a result, security teams are facing plenty of authentication-related challenges. This is why companies are starting to implement more sophisticated incident response strategies, including authentication as part of the process. The list below reviews some common authentication methods used to secure modern systems.</p>
            </section>
            </div>
            <div className='section-padding'>
            <section className='container shadow-lg rounded p-3 fw-bolder'>
                <h3>How does the private route work?</h3>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                <br /><br />
                <p>We will start off with a minimal React project that uses React Router to navigate a user from one page to another page. In the following function component, we have matching Link and Route components from React Router for various routes. Furthermore, we have a so-called Index Route loaded with the Landing component and a so-called No Match Route loaded with inline JSX. Both act as fallback routes:</p>
            </section>
            </div>
            <div className='section-padding'>
            <section className='container shadow-lg rounded p-3 fw-bolder'>
                <h3>What is Node? How does Node work?</h3>
                <p>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.Node.js is an open source server environment.Node.js is free.Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.).Node.js uses JavaScript on the server</p>
                <br /><br />
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive</p>
            </section>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Blog;