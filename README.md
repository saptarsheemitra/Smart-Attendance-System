# EVG ID:
1. Vinit Agarwal: 22EVGVZR226433 
2. Achyut Vardhan: 22EVGEVV570567
3. Anupam Moharana: 22EVG2YZ480746
4. Saptarshee Mitra: 22EVGPKB426094 (Leader)

![App picture](https://github.com/margiki/NHS-nodejs-webapp/blob/master/github_readme_photos/main_picture.jpg)

# Description :point_left:
It's a web application for managing hospitals rooms and determining the patient's priority for isolation. The app provides a centralised hub for managing the patients and planning their distribution across hospital’s rooms. 

It allows nurses to keep track of the patients and their diseases in real time and to have an overview over the patients and rooms, and better manage the rooms assignment across patients.


# Youtube video
<a href="http://www.youtube.com/watch?feature=player_embedded&v=Q9wTakyRWi4
" target="_blank"><img src="http://img.youtube.com/vi/Q9wTakyRWi4/0.jpg" 
alt="Youtube video" width="240" height="180" border="10" /></a>

# Prerequisites
- [x] Node.js 14 or later - install from https://nodejs.org/
- [x] Python 3.x or later - install from https://www.python.org/

# Installing python packages:
1.	Open the Terminal (Linux & MacOS) or PowerShell (Windows)
2.	Type "pip install numpy" after it gets installed.
3.	Type "pip install opencv-python" after it gets installed.
4.	Type "pip install requests" after it gets installed.
#### Installing Face_Recognition module
5.	Type "pip install cmake" after it gets installed.
6.  Type "pip install dlib" after it gets installed.
7.  Type "pip install face_recognition" after it gets installed.
8.  Now if all the modules got installed correctly attendance.py should run correctly.

# Installing packages:
1.	Download the repository
```
git clone https://github.com/saptarsheemitra/Envisage22.git
```
2.	Open the Terminal (Linux & MacOS) or PowerShell (Windows) and change directory to the project folder.
3.	Type ‘npm install’ in the Terminal (PowerShell) and press Enter. All the dependencies would be installed.
4.	Now make sure you are in backend folder. To open the application, type ‘npm run server’ and press Enter in the terminal.
5.	The application should be live on the local port 8080.  
6.	Now go to face recognition folder and open attendance.py.
#### **If all the packages got installed currectly the program should run without any problem.


# How to use it :book:
### Dashboard

Data about patients and rooms is available here. The page is split into three tables. 

![Dashboard](https://github.com/margiki/NHS-nodejs-webapp/blob/master/github_readme_photos/dashboard.jpg)

![Dashboard](https://github.com/margiki/NHS-nodejs-webapp/blob/master/github_readme_photos/dasboard_2.jpg)

To clear the red warning sign you need to go on the patient’s personal page. To do that, you have to double click on his name. By clicking on the ‘Update button’ on the bottom of the page, the patient’s diagnosis in updated for the next 24 hours (consequently, the red warning sign disappears).

### Add patient page

You can add a new patient in the system with his personal details and his diseases. The application automatically computes the score of the patient based on the entered diseases

![Add patient page](https://github.com/margiki/NHS-nodejs-webapp/blob/master/github_readme_photos/add_new_patient.jpg)

### Patient page

Double click on a patient name on the dashboard to get here.
![Patient page](https://github.com/margiki/NHS-nodejs-webapp/blob/master/github_readme_photos/patient_page.jpg)

### System settings

The control center of the application. It allows users to manage the diseases & rooms of the Hospital and create new accounts

![System Settings](https://github.com/margiki/NHS-nodejs-webapp/blob/master/github_readme_photos/system_settings.jpg)

# App Modules and Code organisation
### Modules

Module|Core	|Patients|Diseases|Rooms 
------|-----|--------|--------|----
Functionality	|- login system | - add / delete patients | - add / delete diseases | 	- assign rooms to patients
.|- add users | - update patient's diagnosis | - assign disease to patients | - add / remove rooms
.|- view dashboard	| - view patient’s page | 
.|.| - retrieve patient's information	

### Code organisation :open_file_folder:

Folder | Content | Responsability
------|-----|--------
/public	| |	Contains the public files, such as CSS, fonts and scripts.
/routes	| |	Manage the HTTP requests. Is divided into smaller modules responsible for disjoint tasks.
.	|/app.js| 	Renders dashboard page
.	|/disease.js| 	Responsible for diseases
.	|/login.js|	Responsible for logging in
.	|/patients.js|	Responsible for patients
.	|/rooms.js|	Responsible for rooms
.	|/settings.js|	Renders settings page
.	|/users.js|	Add new users and logout
/server	| |	Defines the database and Schemas
.	|/db/mongoose.js| 	Database settings
.	|/models| 	Defines Schemas
/views		| |Render pages
.	|/layouts|	The core layout; each page is rendered inside the layout
.	|/(other files)|	Contains specific visual changes for every page

# Technologies

### Backend
![Nodejs - ExpressJS](https://github.com/margiki/NHS-nodejs-webapp/blob/master/github_readme_photos/backend.jpg)

### Frontend
![jQuery](https://github.com/margiki/NHS-nodejs-webapp/blob/master/github_readme_photos/frontend.jpg)

### Database
![MongoDB - Mongoose](https://github.com/margiki/NHS-nodejs-webapp/blob/master/github_readme_photos/database.jpg)

### Databse Schema
![Database schema](https://github.com/margiki/NHS-nodejs-webapp/blob/master/github_readme_photos/database_design.jpg)

**The available application is connected to a MongoDB database online.** If you want to change the database to another one, you need to go: NHS app folder -> server -> db -> mongoose.js

Inside the file, you need to change the database link from
mongoose.connect("mongodb://admin:admin123@ds145220.mlab.com:45220/nhs-app"); to mongoose.connect("your-database-link");

# REST Apis
The backend and frontend communicate through REST Apis. On the frontend, we make Ajax requests using jQuery to the following routes: 

URI |	Returns
----|----
/app/getdiseases |	returns information about all diseases in the system
/app/getpatients |       	returns information about all patients in the system
/app/getpatient/:hospitalNumber |	returns information about a specific patient
/app/getrooms	| returns information about the rooms in the system

# Known bugs :bug:
1. On some mobiles devices (iPhone, iPad) assigning rooms to patients is not working because mobile browsers doesn’t interpret the double-click. Also, the user can’t enter the patient's page because of the same reason. However, on LG mobile devices this feature works. 

# License 
Free to use, copy and distribute. :money_with_wings:






