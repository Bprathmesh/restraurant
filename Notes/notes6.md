~Making connections 
MonoLith and MicroService Architecture

MonoLith=> When apps were developed earlier we had a huge big project ~ big bulky project
MicroService=> Companies moving to micro service , we have different service for different jobs 
MicroService~~Seperation of concern , SIngle responsibility principle  each service has its own job , different tech stack for different service 

How do these service interact with each other??different type of connections 

How are they deployed ~ they can be deployed to different domain names and we can call these services by making call to different url 


2 Approaches to make api call 
When app loads , we can make api call and after getting data render it to ui 
As soon as page loads , render ui now make api call and now re render application with new UI
We use 2nd approachbetter ux 
rendering twice ~not a worry because react is good at it 

useEffect is called by a callback fn and a dependency array , this will be called after component renders 
body is rendered and useEffect is called 

cors policy~browser block us from one origin to another ~mismatch

Optional chaining 


Shimmer ui // fake page until we get actual data or skeleton 