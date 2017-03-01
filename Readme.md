Ｂｕｉｌｄ　ｙｏｕｒ　ｍｅｄｉｃａｌ　ｆｏｒｍｓ　
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

3. update your configure file before running gulp
3.1 edit src/config.js
replace following IP address with your own IP
var APP_URL = 'http://35.161.117.208:3005';
var API_URL = 'http://35.161.117.208:3005';
3.2 edit protractor.conf.js
replace baseUrl ip address with your own IP
baseUrl: 'http://35.161.117.208:3000'

4. gulp build
5. gulp serve
```
if you see following error : " Error: ENOENT: no such file or directory, scandir '../speedy-app-builder/node_modules/node-sass/vendor'
try to run following command to fix the issue:
npm rebuild node-sass

Next you will need to create an Admin account by logging into the server admin console and create a new
Admin login under the *Admin* Resource.
