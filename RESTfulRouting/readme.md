# RESTful Routing

## Introduction
* Define REST and explain WHY it matters
* List all 7 RESTful routes
* Show example of RESTful routing in practice

## Blog Index
* Setup the Blog App
* Create the Blog model
* Add INDEX route and template

## Basic Layout
* Add Header and Footer Partials
* Include Semantic UI
* Add Simple Nav

## Putting the C in CRUD
* Add NEW route
* Add NEW template
* Add CREATE route
* Add CREATE template

## SHOWtime
* Add Show route
* Add Show template
* Add links to show page
* Style show template

## Edit/Update
* Add Edit Route
* Add Edit Form
* Add Update Route
* Add Update Form
* Add Method-Override

## Final Updates
* Sanitize blog body
* Style Index
* Update REST Table

REST - a mapping between http routes and CRUD

BLOG

CREATE
READ	/allBlogs/:id
UPDATE	/updateBlog/:id
DESTROY	/destroyBlog/:id


RESTful 7 Routes

Name		Path            	HTTP Verb   	Purpose
-------		------------    	---------   	----------------------------------------------------
Index		/dogs           	GET         	List all dogs
New 		/dogs/new       	GET         	Show new dog form
Create 		/dogs           	POST        	Create a new dog, then redirect somewhere
Show		/dogs/:id       	GET         	Show info about one specific dog
Edit 		/dogs/:id/edit  	GET         	Show edit form for one dog
Update		/dogs/:id       	PUT         	Update a particular dog, then redirect somewhere
Destroy		/dogs/:id       	DELETE      	Delete a particular dog, then redirect somewhere