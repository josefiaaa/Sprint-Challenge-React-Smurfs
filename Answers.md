1. Explain the differences between client-side routing and server-side routing.

    Client-side: The whole page does not refresh when using client-side routing. For example, components like headers, menus, and footers are things we typically want on every page. Since we are internally routing the page, changing the URL will give us a different view of the website.

    Server-side: Server-side routes only requests the information that was asked for but every request refreshes the page. A new “get” request is sent to the server and returns a new page.


2. What does HTTP stand for?

	HyperText Transfer Protocol
        (communications protocol that deals with transferring information on the internet)

3. What does CRUD stand for?
	Create- new resources on the database
	Read- data from database
	Update- data that is currently on the database
	Delete- data from the database


4. Which HTTP methods can be mapped to the CRUD acronym that we use when        interfacing with APIs/Servers.

	GET -	receives data from specified source 

	POST - usually changes state to add to the data

	PUT - updates specified data object

	DELETE - deletes data

5. Mention three tools we can use to make AJAX requests

    .get(*URL goes in here*)
    .then(*use response to set state*)
    .catch(*use err to to set state*)
