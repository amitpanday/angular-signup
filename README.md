# Angular Dashboard starterkit template
This is an Angular dashboard starterkit template project.


## What's in this project?
- Bootstrap 4 (https://getbootstrap.com/)
- Fontawesome 5 (https://fontawesome.com/)
- Angular 6 (https://angular.io/)
- A basic authentication service to handle the login/logout/check authentication token
- A simple secured dashboard
- A simple login page (including error handling)
- A fake backend service to handle the api request
- A service to inject the authentication token on each request to the api endpoint
- Angular Routing system
- Some RxJS function (http://reactivex.io/) 
- Feature "Items"   : Add / Delete / Edit items using CRUD (Create Read Update Delete) methods

## Install and run this project
- Install NodeJS (https://nodejs.org)
- Install Angular CLI (https://cli.angular.io/)
- Download or clone this repository on your computer
- Open your termninal and navigate to the project root folder and enter :  ``` npm install ```
- Next to build and start the project : ``` npm start ```
- Open your browser and navigate to http://localhost:4200/

## Testing
There are 2 tests :
- Karma / Jasmine tests : ``` ng test ```
- Protractor e2e tests : ``` ng e2e ```

## Build and run production
- ``` ng build --prod ``` 
- ``` http-server ./dist/angular-dashboard-starterkit -p 8888 ``` 

The production build will replace the environment.ts (environment.prod.ts) and the fakebackend.ts (fakebackend.prod.ts)  file. 

## Build staging
For staging there are 2 flavours:
- Build without mocks: ``` ng build -c=staging ``` 
- Build with mocks: ``` ng build -c=staging-mocks``` 

The environment.ts contens file will be replaced with the environment.staging.ts file.

## Serving
- Default (with mocks) : ``` ng serve ``` 
- Without mocks : ``` ng serve --c no-mocks``` 
- Without mocks, different api url : ``` ng serve --c api``` 

