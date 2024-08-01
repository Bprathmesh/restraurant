Before we push our code to production a lot of stuff needs to be taken to care of 
Igniting my app
npm manages paclage bts is a node paclage manager 
package.json is a config for npm 
package also called dependency 


webpack parser vite ->these are bundler it packs the code so as to push to production  
We can have 2 types of dependency dev and normal 
dev -> dev phase 
normal ->used in production 
tilde and caret 

Diff between package.json->keeps track of dependence and package-lock->keeps track of exact version locks the version and keeps record of it 

presence of hash or integrity 
So what we can say is that remember how sometimes the versio works at local but breaks at production so hash keeps track of excat environment preseent at local so as to get the same in  prod as well

Node_modules->it is actual data of package

Transitive dependency a dependency can itself have other dependency 

How would parcel work up 
Creates a whole dependancy treee
every dependency have its own package.json 

Never push nodemodules to prodn or git 
imp to push package both in git as it can regenerate the node modules
fetching from cdn is a costly operation so we prefer npm i and installling as a normal depenedency 


So we were building our own app and what happened was it was being treated as browser script so we described it as modules in the script we import

Here we are using parcel But what can it do host a web server makes dev build , hmr->hot module replacement refreshes file automatically saving  uses a file watching algorithm c++
does caching improves file opening fast build development 
image optimisation 
for prodn build it minifise and bundle as well ooptimise it and compress it  
Tree Shaking Algorithm -> remove unused code 
build comes in dist folder after we run npx parcel build 

