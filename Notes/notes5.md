//Untouched superpower of react 
Food delivery App ->Using live api data  recap config driven ui 
react hooks 
Seperate file for seperate components 
never keep hard coded data in the components file utils.js or whatever you wanna name it  constants 
multiple exports method 

//Learn using filter ->how to bring change in ui ? React is fast is DOM MANIPULATION data consistent to each other virtual dom gliff algorithm reconcilation

SO convert js variable to react state variable  -> for that we use React Hook State 
# React Hooks-> 
Normal js fns ->written by fb developers
//Use State ->State variable maintains state of component or applicaion,Use Effect 
Whenever a state variable updates or changes  state variable re renders the component 
Use state gives powerful state variables 

React is only good at dom operations ->Data layer sync with ui layer
React fiber diff algo?

React uses Reconcilation algorithm also called as React Fiber 
On ui we have a dom which is a tree So ui changes to filter certain cards say 7 to 3 what and why is react ?  react creates a virtual dom of it 
Virtual dom is not an actual dom it is representation of an actual dom 
Virtual Dom is that object those react elements 
virtual dom is just a object 
Diff Algorithm(new way of finding difference and updating the dom ) -> finds out difference between updated and previous virtual dom , It will update virtual dom on every render cycle it came in React 16 diff algorithm to update dom came out which made react intensively popular 
finding difference between 2 object is faster than finding between 2 elements group , React does not touch DOM
These all made react faster 
Reconcilation -> ?render cycles 

React fiber React  acdLite  Reacy Fiber Architecture  ->Incremental rendering ability to split renderingwork into chunks and spread React does efficient dom manipulations
Virtual Dom is js or object representation of it 



//Important terms
components-< Building blocks js function that returns markup jsx xml>

rendering ->using virtual dom  to model html element , state change ~ virtual dom ~ reconcilation

hooks ~state useState and Reducer
~context useContext
reference useRef
external system ~ use effect
performance ~ useMemo useCallback

Purity ~how react component should work ~ same component should return same type of thing 
~prevent errors Strict mode

effects code that reach outside of our React apps 
to refrence a dom element use useRef 

context data without props 
portals context for components ~ createPortal 

suspense better for component to wait for something to load 
