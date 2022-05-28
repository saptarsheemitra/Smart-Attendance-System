import cv2
import numpy as np
import face_recognition
import os
from datetime import datetime
import requests
import json

url = 'http://localhost:8080/mark/markpresent'

time_now_temp = datetime.now()
file_name = time_now_temp.strftime('%d_%m_%Y.csv')
test = open(file_name, 'a+')

path = 'images'
images = []
personNames = []
x = []
s_details = []
myList = os.listdir(path)
for cu_img in myList:
    current_Img = cv2.imread(f'{path}/{cu_img}')
    images.append(current_Img)
    personNames.append(os.path.splitext(cu_img)[0])
for i in range(len(personNames)):
    x = personNames[i].split("_")
    s_details.append(x)

def faceEncodings(images):
    print("Encoding started pls wait 30sec")
    encodeList = []
    for img in images:
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        encode = face_recognition.face_encodings(img)[0]
        encodeList.append(encode)
    return encodeList


def attendance(roll,name,branch):

    with open(file_name, 'r+') as f:
        myDataList = f.readlines()
        nameList = []
        for line in myDataList:
            entry = line.split(',')
            nameList.append(entry[0])
        if name not in nameList:
            time_now = datetime.now()
            tStr = time_now.strftime('%H:%M:%S')
            dStr = time_now.strftime('%Y-%m-%d')
            d1 = {
                "rollno": roll,
                "name": name,
                "branch": branch,
                "time" : tStr,
                "date" : dStr
            }
            # print(json.dumps(d1))
            r = requests.post(url, json = d1)   #sends data to server
            pastebin_url = r.text
            print("Status:%s "%pastebin_url)
            f.writelines(f'\n{name}, Roll: {roll}, Branch: {branch}, Time: {tStr}, Date: {dStr}')


encodeListKnown = faceEncodings(images)


print('All Encodings Complete!!!')
print("Starting camera")


cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    faces = cv2.resize(frame, (0, 0), None, 0.5, 0.5)
    faces = cv2.cvtColor(faces, cv2.COLOR_BGR2RGB)

    facesCurrentFrame = face_recognition.face_locations(faces)
    encodesCurrentFrame = face_recognition.face_encodings(faces, facesCurrentFrame)

    for encodeFace, faceLoc in zip(encodesCurrentFrame, facesCurrentFrame):
        matches = face_recognition.compare_faces(encodeListKnown, encodeFace)
        faceDis = face_recognition.face_distance(encodeListKnown, encodeFace)
        matchIndex = np.argmin(faceDis)

        if matches[matchIndex]:
            roll = s_details[matchIndex][0]
            name = s_details[matchIndex][1].upper()
            branch = s_details[matchIndex][2].upper()
            y1, x2, y2, x1 = faceLoc
            y1, x2, y2, x1 = y1 * 2, x2 * 2, y2 * 2, x1 * 2
            cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)
            cv2.rectangle(frame, (x1, y2 - 35), (x2, y2), (0, 255, 0), cv2.FILLED)
            cv2.putText(frame, name, (x1 + 6, y2 - 6), cv2.FONT_HERSHEY_COMPLEX, 1, (255, 255, 255), 2)
            attendance(roll,name,branch)

    cv2.imshow('Webcam', frame)
    if cv2.waitKey(1) == 13:
        break

cap.release()
cv2.destroyAllWindows()
