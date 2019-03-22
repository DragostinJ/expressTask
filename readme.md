Create a single Express-based app that serves two separate, unrelated pieces of functionality.

The first piece of functionality is an in-memory stack (LIFO). This portion of the application have two endpoints:

an endpoint to add an item to the stack -- /stack/:stackItem  
 example - http://localhost:3000/stack/stack1 where stack1 is the item we want to add to the stack
an endpoint to return the top item of the stack -- /stack
example - http://localhost:3000/stack

requesting an item from the stack also remove that item from the top of the stack

This process is in-memory, so there is no persisting the stack across restarts of the application.

Example requests

Add "Hello" to stack http://localhost:3000/stack/Hello

Add "World" to stack http://localhost:3000/stack/World

Get item from stack http://localhost:3000/stack
"World" would be returned

Add "Again" to stack http://localhost:3000/stack/Again

Get item from stack http://localhost:3000/stack
"Again" would be returned

Get item from stack http://localhost:3000/stack
"Hello" would be returned

The second piece of functionality is an in-memory key-value store that supports TTLs on the keys.

The interface supports:

adding a key to the store
example http://localhost:3000/add with body of an object
{
"key": "name",
"name": "Sasho",
"ttl" : 5  
}

setting a TTL is optional to the client when adding the key

getting the value for a key - http://localhost:3000/get/name where "name" is the name of the key

this respects the TTL for the key if provided

deleting the value stored for a given key
http://localhost:3000/del/name

In total your Express app should have 5 routes:

Add to stack http://localhost:3000/stack/stack1
Get from stack http://localhost:3000/stack
Add to key-value store http://localhost:3000/add
Get from key-value store http://localhost:3000/get/name
Delete from key-value store http://localhost:3000/del/name

Upon receipt of the archive you can run:

tar -xf [filename.tar]
npm install
npm start
