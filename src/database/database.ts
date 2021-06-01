import { QuizDataBase } from "./database.type";

export const quizDatabase:QuizDataBase=[{
    _id:"1",
    genre:"Badminton",
    description:"Take part in this quiz and check your knowledge about badminton",
    image:"https://www.yonex.com/media/catalog/category/Badminton-Racquets-Desktop.jpg",
    questions:[{
        _id:"1",
        question:"What is the name of the international governing body for badminton recognised by the International Olympic Committee ?",
        points:2,
        negativePoints:-1,
        options:[{
            _id:"1",
            text:"Badminton World Federation – BWF",
            isRight:false,
        },{
            _id:"2",
            text:" International Badminton Association – IBA",
            isRight:true
        },{
            _id:"3",
            text:" Badminton World Organization – BWO",
            isRight:false
        }]
    },{
        _id:"2",
        question:"In which year did badminton make its debut in the Summer Olympic Games ?",
        points:3,
        negativePoints:-1,
        options:[{
            _id:"1",
            text:"1992",
            isRight:true
        },{
            _id:"2",
            text:"1991",
            isRight:false
        },{
            _id:"3",
            text:"1993",
            isRight:false
        }]
    }]
},{
    _id:"2",
    genre:"Table Tennis",
    description:"Take this quiz and test your knowledge about table tennis",
    image:"https://media.self.com/photos/5c360cc973e3cb2ca1e0fd35/4:3/w_2560%2Cc_limit/table-tennis.jpg",
    questions:[{
        _id:"1",
        question:"What is the diameter of a table tennis ball ?",
        points:2,
        negativePoints:-1,
        options:[{
            _id:"1",
            text:"38mm",
            isRight:false
        },{
            _id:"2",
            text:"40mm",
            isRight:true
        },{
            _id:"3",
            text:"45mm",
            isRight:false
        }]
    },{
        _id:"2",
        question:"In what year did table tennis become an Olympic sport?",
        points:3,
        negativePoints:-1,
        options:[{
            _id:"1",
            text:"1981",
            isRight:false
        },{
            _id:"2",
            text:"1990",
            isRight:false
        },{
            _id:"3",
            text:"1988",
            isRight:true
        }]
    }]
},{
    _id:"3",
    genre:"BasketBall",
    description:"Take this quiz and check your knowledge about basketball",
    image:"https://eyofbaku2019.com/images/sport%20pages/basketball.jpg",
    questions:[{
        _id:"1",
        question:"How high from the ground is the ring of the Basket ?",
        points:2,
        negativePoints:-1,
        options:[{
            _id:"1",
            text:"8ft",
            isRight:false
        },{
            _id:"2",
            text:"5ft",
            isRight:false
        },{
            _id:"3",
            text:"10ft",
            isRight:true
        }]
    },{
        _id:"2",
        question:"Which country has won most Olympic title (Men) ?",
        points:3,
        negativePoints:-1,
        options:[{
            _id:"1",
            text:"Spain",
            isRight:false
        },{
            _id:"2",
            text:"USA",
            isRight:true
        },{
            _id:"3",
            text:"Brazil",
            isRight:false
        }]
    }]
}]