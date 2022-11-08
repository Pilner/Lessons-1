# Regarding this project:

###### Uses:
* Node.js
* Express
* EJS
* Body Parser


#### This project is supposed to be a 'chatting service' where users can input a name wherein the the 'chatting service' will remember your name by your ip address(by using `req.connection.remoteAddress` or `req.ip`) and then assigning it to your chat message.

#### I proposed of using an object where elements are ip addresses and each of these ip addresses have their own object where various data have been stored in order for the 'chatting service' to use and output said data.

---

##### One small problem though, I can't seem to figure out why ip addresses return `'::ffff:172.17.0.1'`? I console.logged from another wifi connection and even with a vpn, but it still got the same results.

###### Scrapped for future projects