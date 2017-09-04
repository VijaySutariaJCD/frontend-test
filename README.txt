To Start application
1) Webapplication is added at public\webapp\ path
2) navigate to this path for below steps:
	2.1) Run npm install command to install the required dependencies of web app.
	2.2) Run ng serve command to start application
3) Start node service using
4) Browser "http://localhost:4200" to start web application


Assumption: 
1) Node service is running at : http://localhost:8888, 
	To change this URL, Open public\WebApp\src\app\global\AppGlobals.ts and update value of "ApiURL" variable
	give command ng serve on command prompt to start application again	
	
Changes in existing NodeJS service:
1) Existing service is returning data page wise, but not returning total available states, We have updated "/states" api to return total count value too.