# EVG IDs:
1. Vinit Agarwal: 22EVGVZR226433 
2. Achyut Vardhan: 22EVGEVV570567
3. Anupam Moharana: 22EVG2YZ480746
4. Saptarshee Mitra: 22EVGPKB426094 (Leader)

![App picture](https://github.com/saptarsheemitra/Envisage22/blob/main/Projectimg/Project.png)

# Description :point_left:
This system was created to provide a simple and secure method of recording attendance. The software initially takes a picture of all of the authorised people and stores it in a database. The image is then stored by mapping it into a face coordinate structure by the system. 
Whenever a registered person enters the premises, the system recognises him and records his time and attendance.


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
### Node Server

Data about patients and rooms is available here. The page is split into three tables. 

![NodeServer](https://github.com/saptarsheemitra/Envisage22/blob/main/Projectimg/Nodeserver.png)


To clear the red warning sign you need to go on the patient’s personal page. To do that, you have to double click on his name. By clicking on the ‘Update button’ on the bottom of the page, the patient’s diagnosis in updated for the next 24 hours (consequently, the red warning sign disappears).

### Face Detection working

You can add a new patient in the system with his personal details and his diseases. The application automatically computes the score of the patient based on the entered diseases

![Face Detection](https://github.com/saptarsheemitra/Envisage22/blob/main/Projectimg/Face%20Detection%20working.png)

### How to add new students

Double click on a patient name on the dashboard to get here.
![Add Student](https://github.com/margiki/NHS-nodejs-webapp/blob/master/github_readme_photos/patient_page.jpg)

### How to access frontend

The control center of the application. It allows users to manage the diseases & rooms of the Hospital and create new accounts

![Frontend files](https://github.com/saptarsheemitra/Envisage22/blob/main/Projectimg/frontend.png)

### Login Page

The control center of the application. It allows users to manage the diseases & rooms of the Hospital and create new accounts

![Login page](https://github.com/saptarsheemitra/Envisage22/blob/main/Projectimg/login%20page.png)

### Student Attendance Details page

The control center of the application. It allows users to manage the diseases & rooms of the Hospital and create new accounts

![Attendance Details](https://github.com/saptarsheemitra/Envisage22/blob/main/Projectimg/attendance%20table.png)


# Technologies

### Backend
![Backend Stack](https://github.com/saptarsheemitra/Envisage22/blob/main/Projectimg/backend%20stack.png)

### Frontend
![Frontend Stack](https://github.com/saptarsheemitra/Envisage22/blob/main/Projectimg/Frontend%20stack.png)

### Database
![Database](https://github.com/saptarsheemitra/Envisage22/blob/main/Projectimg/database.png)

### Training models
![models](https://github.com/saptarsheemitra/Envisage22/blob/main/Projectimg/database.png)


# Known bugs :bug:
1. On some mobiles devices (iPhone, iPad) assigning rooms to patients is not working because mobile browsers doesn’t interpret the double-click. Also, the user can’t enter the patient's page because of the same reason. However, on LG mobile devices this feature works. 

# License 
Need to add here some thing :money_with_wings:

# Team Members
1. **Saptarshee Mitra**: saptarshee08@gmail.com  
2. **Vinit Agarwal**:
3. **Achyut Vardhan**: achyutvardhan234@gmail.com
4. **Anupam Moharana**: 



 
