API documentation

run npm i (to install all necessary packages)

*all the request except the report generation should be a post request
*to run the server just type npm run server in the terminal below


to mark present:
    url: http://<host>/mark/markpresent
    url demo: http://localhost/mark/markpresent
    demo post data json:-
        {
            "rollno":"21051275",
            "name":"vinit agarwal",
            "date":"2020-02-12" //format YYYY-MM-DD HH:mm:ss time is 24hr
        }
    demo outputs:-
        21051275 already marked
        21051275 marked present


to mark absent:
    url: http://<host>/mark/markabsent
    url demo: http://localhost/mark/markpresent
    demo request data json:-
        {
            "rollno":"21051275",
            "name":"vinit agarwal",
            "date":"2020-02-12" //format YYYY-MM-DD HH:mm:ss time is 24hr
        }
    demo outputs:-
        21051275 already marked
        21051275 marked absent

to get all the data saved
    url: http://<host>/mark/getall
    url demo: http://localhost/mark/getall
    demo outputs:-
        *the output is return in json array and other format required should be informed
        [
            {
                "roll": "21051276",
                "name": "vinit agarwal",
                "date": "13-02-2020",
                "time": "12:02:00",
                "status": "absent"
            }
        ]


to generate reort:-
    url: http://<host>/mark/get
    url demo: http://localhost/mark/get
    demo post data json:-
        {
            "date":"2020-02-13"
        }
    demo outputs:-
        *the output is return in json array and other format required should be informed
        [
            {
                "roll": "21051276",
                "name": "vinit agarwal",
                "date": "13-02-2020",
                "time": "12:02:00",
                "status": "absent"
            }
        ]

