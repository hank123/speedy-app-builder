A form building application.
---------------------------------

Overview
--------

First, this Application allows administrators to log in and create, update, and delete forms within the application. Second, it allows users to log in, view the list of forms, and fill out the forms. Administrators can also view all submissions from the users. 


Installation
--------------
You can easily get this application running by typing the following in your command line.

```
1. npm install
2. bower install
2.1 npm rebuild node-sass ( optional）
3. gulp build
4. gulp serve
```
if you see following error : " Error: ENOENT: no such file or directory, scandir '../speedy-app-builder/node_modules/node-sass/vendor'
try to run following command to fix the issue:
npm rebuild node-sass

Next you will need to create an Admin account by logging into the server admin console and create a new
Admin login under the *Admin* Resource.
