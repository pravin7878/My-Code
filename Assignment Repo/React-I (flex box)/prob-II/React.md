Q.1 What is React?
Ans. React is a java script library,react is not a frenwork.this is a open-source project.react is used to buld user interface(UI) on the front end.

Q.2 Who made React?
Ans. React is created by facebook.

Q.3 What is Babel?
Ans.babel is a java script compiler.this is a Toolchain that used to manaly transelete the jsx code to normel js code.

Q.4 How does Babel convert html code in React into valid code?
Ans. Babel is a key tool that can translate JSX syntax, which is used to create HTML-like code in React components, into valid JavaScript code that can be executed in preferred browsers.

Q.5 What is ReactDOM used for? Write an example?
Ans. ReactDOM is a package in React that provides DOM-specific methods.ReactDOM provides the developers with an API containing the various methods to manipulate DOM.
````
Example:-
let child1 = React.createElement('div',{
    className:'child1',
    children:'1'
})

let child2= React.createElement('div',{
    className:'child2',
    children:'2'
})

ReactDOM.render([child1,child2],document.getElementById('root'))

````
Q.6 What are the packages that you need to import for react to work with?
Ans.It forms the foundation of any React application and is an essential package to include in our project.

Q.7 How do you add react to a web application?
Ans. Step 1:I will Add a DOM Container to the HTML. First, open the HTML page i want to edit. ...
Step 2: I will Add the Script Tags. Next, add three <script> tags to the HTML page i righting before the closing </body> tag: ...

Step 3: THen i will Createing a React Component and i Create a file called like_button.js next to our HTML page.

Q.8 What is React.createElement?
 Ans. React.createElement is a fundamental method of React JS. The main use of React.createElement is the Creation of a React component. It is the JavaScript format for creating react components. Also, the JSX react component when transpired invokes this only method for creating the component.

Q.9 What are the three properties that createElement accept?
Ans. createElement() function takes three arguments: type , props , and children . And returns an object just like the one above.

Q.10 What is the meaning of render and root?
Ans.React renders HTML to the web page by using a function called render(). The purpose of the function is to display the specified HTML code inside the specified HTML element. In the render() method, we can read props and state and return our JSX code to the root component of our app.