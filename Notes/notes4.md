ALways start with building the mock ->UI MOCK
Header
Body 
Footer
Component composition ->When a component is inside another component

to give inline style while writing jsx we can give style={{color;red}}->why double brackets one for writing js and other for passing as obj we can also define object elsewhere and pass it on

Props ->properties->data to a component->arguments to a fn 

Passing props to a fn is similar to passing arguments to the fn 
E.g.
<RestaurantCard resName="Meghana Foods" rating="4.5/>
When you gotta pass data dynamically we pass it through props  
We can pass any number of pass we wish to react will create a object and pass it tio props 

Learn about object destructuring 
passing data ?-> json 

Conflict Driven UI-> What swiggy has done is Conflict driven UI when we open swiggy app shows bunch of offers available in bangalore suppose if there is some other offer in bangalore card will be different in calcuta chennai chandigarh dehradun
How to build a Ui like that 
Different ui for all tha places No 
Our website is driven by configs data
Basically controlling ui using data and config comes from backend 

Array joins-> to join with , or - or anything imp for production

these images link are on cdn hosted 

Map fn ?->usage why

React optimises its render cycle-? in refernce to passing id in map 
Components at same level ~ need to have unique ids , uniquely represented ->new restrau that came in that came in first place react will not know what is changed and react will re render all these components and one more thing editted react doesnt now at which place it has to come  so it will re render all the components ~ Think about it in big scale for 1000 restrau components the level of optmisation it brings 

Never use index as key bad practice
index as a key as an antipattern

NOT USING KEY<<index as key<< unique id is the best practice