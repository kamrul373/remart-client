import React from 'react';
import { pageTitle } from '../../utility/pageTitle';

const Blogs = () => {
    // page title 
    pageTitle("Blogs");
    return (
        <div className='lg:px-10 px-4 blogs mx-auto lg:w-[70%] w-[90%]'>
            <h2 className='text-4xl font-bold my-8 text-center'>Blogs</h2>
            <div className='blog my-5 '>
                <h2 className='title lg:text-3xl text-2xl text-center my-3 font-bold'> What are the different ways to manage a state in a React application?</h2>
                <div className='text-center'>
                    <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1621503743613/eGkZpP6mP.png" alt="React state" className='inline-block my-3' />
                </div>
                <div className="content text-justify text-xl my-3">
                    <p>State in reactive programming is data that dictates the configuration of the application in any moment in time.The Four Kinds of React State to Manage : <strong>Local state , Global state , Server state, URL state.</strong></p>
                    <p className='mt-4'>
                        <span className='text-primary'>Local (UI) state</span> – Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.
                    </p>
                    <p>
                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form's inputs.
                    </p>
                    <p className='mt-4'><span className='text-primary'>Global (UI) state</span> – Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                    </p>
                    <p>
                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.
                    </p>
                    <p className='mt-4'><span className='text-primary'>Server state – </span> Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                    </p>
                    <p>
                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                        Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                    </p>
                    <p className='mt-4'><span className='text-primary'>URL state –</span> Data that exists on our URLs, including the pathname and query parameters.</p>
                    <p>There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
                    <p className='mt-4 text-primary'>How to Manage Local State in React</p>
                    <p>
                        Local state is perhaps the easiest kind of state to manage in React, considering there are so many tools built into the core React library for managing it.
                    </p>
                    <p><span className='font-bold'>useState</span> is the first tool you should reach for to manage state in your components.It can take accept any valid data value, including primitive and object values. Additionally, its setter function can be passed down to other components as a callback function (without needing optimizations like useCallback).</p>
                    <p><span className='font-bold'>useReducer</span> is another option that can be used for either local or global state. It is similar in many ways to useState under the hood, although instead of just an initial state it accepts a reducer.The benefit of useReducer is that it provides a built-in way to perform a number of different state operations with the help of the reducer function, which makes it more dynamic overall than useState.</p>
                    <p className='mt-4 text-primary'>How to Manage Global State in React</p>
                    <p>
                        To be clear: the Context API is not a state management solution. It is a way to avoid problems like props drilling (creating a bunch of props in components that don’t need it), but it is only helpful for reading state, not updating it.The default behavior for Context is to re-render all children components if the value provided to it as a prop changes.Redux is also great for global state management.
                    </p>
                    <p className='mt-4 text-primary'>How to Manage Server State in React</p>
                    <p>Server state can be deceptively challenging to manage.At first, it seems you just need to fetch data and display it in the page. But then you need to display a loading spinner while you are waiting for the data. Then you need to handle errors and display them to the user as they arise.To fix this, there are a couple of great libraries that make data fetching in React a breeze: SWR and <span className='font-bold'>React Query</span>.</p>
                    <p className='mt-4 text-primary'>How to Manage URL State in React</p>
                    <p>
                        URL state is quite easy to manage, usually through custom hooks that give us all the information we need about our location, history, and pathname. If you are using React Router, you can get all the information you need using useHistory or useLocation.
                    </p>
                </div>
            </div>
            <div className='blog my-5'>
                <h2 className='title lg:text-3xl text-2xl text-center mb-3 mt-10 font-bold'>How does prototypical inheritance work?</h2>
                <div className='text-center'>
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200520193336/Untitled-Diagram108.png" alt="React state" className='inline-block my-3' />
                </div>
                <div className="content text-justify text-xl my-3">
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
                    <p className='mt-4'>
                        JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype.
                    </p>
                    <p>
                        All JavaScript objects inherit properties and methods from a prototype:
                        <strong>Date objects </strong> inherit from Date.prototype.
                        <strong>Array objects</strong> inherit from Array.prototype.
                        <strong>Player objects</strong> iinherit from Player.prototype.
                    </p>
                    <p className='mt-4'>The Object.prototype is on top of the prototype inheritance chain. ​ Date objects, Array objects, and Player objects all inherit from Object.prototype.The JavaScript prototype property allows you to add new properties to object constructors:The JavaScript prototype property also allows you to add new methods to objects constructors:
                    </p>
                </div>
            </div>
            <div className='blog my-5'>
                <h2 className='title lg:text-3xl text-2xl text-center mb-3 mt-10 font-bold'>What is a unit test? Why should we write unit tests?</h2>
                <div className='text-center'>
                    <img src="https://assets.codegrip.tech/wp-content/uploads/2019/10/04113325/1_Y07KF-_laqG2cJ1Squ0Bag.png" alt="React state" className='inline-block my-3' />
                </div>
                <div className="content text-justify text-xl my-3">
                    <p>Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p>
                    <p className='mt-4'>
                        Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.
                    </p>
                    <p>
                        Unit tests help to fix bugs early in the development cycle and save costs.It helps the developers to understand the testing code base and enables them to make changes quickly.Good unit tests serve as project documentation.Unit tests help with code re-use. Migrate both your code and your tests to your new project. Tweak the code until the tests run again.
                    </p>
                </div>
            </div>
            <div className='blog my-5'>
                <h2 className='title lg:text-3xl text-2xl text-center mb-3 mt-10 font-bold'>React vs. Angular vs. Vue?</h2>
                <div className='text-center'>
                    <img src="https://presence.agency/wp-content/uploads/2020/07/1_lC1kj3IeXoE8Z3OCKJoWkw.jpeg" alt="React state" className='inline-block my-3' />
                </div>
                <div className="content text-justify text-xl my-3">
                    <p>React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.</p>
                    <p className='mt-4'>
                        <span className='text-primary'>React</span> can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.
                    </p>
                    <p className='mt-4'>
                        React Elements are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes.
                    </p>
                    <p className='mt-4'>
                        Components are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user.React is based on JavaScript, but it’s mostly combined with JSX (JavaScript XML), a syntax extension that allows you to create elements that contain HTML and JavaScript at the same time.
                    </p>
                    <p className='mt-4'>
                        <span className='text-primary'>The Vue.js</span> core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.
                    </p>
                    <p className='mt-4'>
                        Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you’ll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View.
                    </p>
                    <p className='mt-4'>
                        Vue’s templating syntax lets you create View components, and it combines familiar HTML with special directives and features. This templating syntax is preferred, even though raw JavaScript and JSX are also supported.
                    </p>
                    <p className='mt-4'>
                        Components in Vue are small, self-contained, and can be reused throughout the application. Single File Components (SFCs) with the .vue extension contain HTML, CSS, and JavaScript so that all relevant code resides in one file.SFCs are the recommended way to organize code in Vue.js projects, especially larger ones.
                    </p>
                    <p className='mt-4'>
                        <span className='text-primary'>AngularJS</span> the original framework, is an MVC (Model-View-Controller)) framework.
                    </p>
                    <p className='mt-4'>
                        Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module.
                    </p>
                    <p className='mt-4'>
                        Each component in Angular contains a Template, a Class that defines the application logic, and MetaData (Decorators). The metadata for a component tells Angular where to find the building blocks that it needs to create and present its view.
                    </p>
                    <p className='mt-4'>
                        Angular templates are written in HTML but can also include Angular template syntax with special directives to output reactive data and render multiple elements, among other things.
                    </p>
                    <p className='mt-4'>
                        Services in Angular are used by Components to delegate business-logic tasks such as fetching data or validating input.
                    </p>
                    <p className='mt-4'>
                        Angular is built in TypeScript, so its use is recommended to get the most seamless experience, but plain JavaScript is also supported.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;