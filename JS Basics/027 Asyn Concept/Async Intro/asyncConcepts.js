/*
Javascript 
1. Synchronous  (each operation wait for last one to complete before execution)
2. Single Threaded Language
 


Q. Difference between synchronous and asynchronous 

Synchronous: agar file read kar rahi hai to tab tak koi aur kaam nahi kar sakte
Asynchronous: agar file read kar rahi hai to tab tak koi aur kaam kar sakte hai



Blocking code vs Non Blocking code

Blocking code: 
      - block the flow of the program
      - read file synchronously

Non Blocking code:
      - don't block the flow of the program
      - read file asynchronously



---> yhaan pe hum soch sakte hai ki non blocking code achaa hota hai use karne ke liye

but jaise ek user ka data aaya aur humein us data ko database mein store karna hai and uske baad user ko notification dena hai ki "Registration Successful" 

and we know that database is also a file (where we read and write data) so according to the non blocking code  user ko pehle hi message chala jayega ki "Registration Successful" jab tak file read ho rahi hogi but ho skta hai ki jab file read ho rhi ho to usmein koi error aa gyi ho... but user ko message chala jayega ki "Registration Successful" and user ko pta bhi nahi chalega ki uska data store hua bhi ya nahi hua so hum keh skte hai ki koi bhi acha yaa bura nahi hai... it depends on the situation use case  ki humein kya karna hai 
*/ 