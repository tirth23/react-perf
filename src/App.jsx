import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// /*
// create build:-
// npm run build
// check dist - only one index.js in which all components bundles together

// run build:-
// npm install -g serve
// serve -s dist: -s stands for "single-page application" mode, which ensures that all routes are served correctly
// check network tab - only one index.js called bundles with all components
// */
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// function App() {
// 	return (
// 		<>
// 			<Router>
// 				<div>
// 					<div>
// 						<nav>
// 							<ul>
// 								<li>
// 									<Link to="/">Home</Link>
// 								</li>
// 								<li>
// 									<Link to="/about">About</Link>
// 								</li>
// 								<li>
// 									<Link to="/contact">Contact</Link>
// 								</li>
// 							</ul>
// 						</nav>
// 					</div>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/contact" element={<Contact />} />
//             </Routes>
// 				</div>
// 			</Router>
// 		</>
// 	);
// }

/* ------------------------------------------------------------------------------------------------------------------------------ */

// /*
// code splitting manually - Dynamic import is a powerful feature in JavaScript that allows you to load modules asynchronously. 
// This means that instead of loading all your JavaScript code upfront, you can load parts of it on demand. 
// This can be particularly useful in large applications where you want to optimize performance and reduce initial load times.
// In React, dynamic import can be used to load components only when they are needed. 
// This helps in splitting your code and loading it in smaller chunks, which is often referred to as "code splitting".
// Dynamic imports create separate chunks for each component. When you run npm run build, Vite will create separate files for HomePage,
// AboutPage, and ContactPage. These files are only loaded when needed
// import() function returns a promise that resolves to the module object, from which we can access the default export (the component
// itself)

// check dist - along with index.js, Home.js, About.js, Contact.js created

// check network tab - only index.js & Home.js called since onload they are required
// if clicked on About, About.js is fetched from network only when required
// */
// function App() {
// 	const [Home, setHomePage] = useState(null);
// 	const [About, setAboutPage] = useState(null);
// 	const [Contact, setContactPage] = useState(null);

// 	useEffect(() => {
// 		// preload the Home Page component
// 		import("./components/Home").then((module) =>
// 			//whatever is exported bydefault from this file is set
// 			setHomePage(() => module.default)
// 		);
// 	}, []);

// 	const loadHomePage = () => {
// 		import("./components/Home").then((module) =>
// 			setHomePage(() => module.default)
// 		);
// 	};

// 	const loadAboutPage = () => {
// 		import("./components/About").then((module) =>
// 			setAboutPage(() => module.default)
// 		);
// 	};

// 	const loadContactPage = () => {
// 		import("./components/Contact").then((module) =>
// 			setContactPage(() => module.default)
// 		);
// 	};

// 	return (
// 		<>
// 			<Router>
// 				<div>
// 					<div>
// 						<nav>
// 							<ul>
// 								<li>
// 									<Link to="/" onClick={loadHomePage}>
// 										Home
// 									</Link>
// 								</li>
// 								<li>
// 									<Link to="/about" onClick={loadAboutPage}>
// 										About
// 									</Link>
// 								</li>
// 								<li>
// 									<Link to="/contact" onClick={loadContactPage}>
// 										Contact
// 									</Link>
// 								</li>
// 							</ul>
// 						</nav>
// 					</div>
// 					<Routes>
// 						<Route path="/" element={Home ? <Home /> : <div>Loading...</div>} />
// 						<Route
// 							path="/about"
// 							element={About ? <About /> : <div>Loading...</div>}
// 						/>
// 						<Route
// 							path="/contact"
// 							element={Contact ? <Contact /> : <div>Loading...</div>}
// 						/>
// 					</Routes>
// 				</div>
// 			</Router>
// 		</>
// 	);
// }

/* ------------------------------------------------------------------------------------------------------------------------------ */

/* 
code splitting with lazy suspense - same behavior as above

React.lazy() allows you to dynamically import components, which means the component will only be loaded when it is needed. This
helps in reducing the initial load time of the application by splitting the code into smaller chunks.
Suspense is a component that can wrap lazy-loaded components and handle the loading state. It takes a fallback prop, which is a 
React element that will be displayed while the component is being loaded.
*/
import Memo from "./components/ReactMemo";
import UseMemo from "./components/UseMemo";
import ItemsList from "./components/List";

const HomePage = lazy(() => import("./components/Home"));
const ContactPage = lazy(() => import("./components/Contact"));
const AboutPage = lazy(() => import("./components/About"));
function App() {
	return (
		<>
			<Router>
				<div>
					<div>
						<nav>
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/about">About</Link>
								</li>
								<li>
									<Link to="/contact">Contact</Link>
								</li>
                <li>
									<Link to="/memo">Memo</Link>
								</li>
                <li>
									<Link to="/usememo">UseMemo</Link>
								</li>
                <li>
									<Link to="/usecallback">UseCallback</Link>
								</li>
							</ul>
						</nav>
					</div>
					<Suspense fallback={<div>Loading ....</div>}>
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/about" element={<AboutPage />} />
							<Route path="/contact" element={<ContactPage />} />
              <Route path="/memo" element={<Memo />} />
              <Route path="/usememo" element={<UseMemo />} />
              <Route path="/usecallback" element={<ItemsList />} />
						</Routes>
					</Suspense>
				</div>
			</Router>
		</>
	);
}

export default App;
