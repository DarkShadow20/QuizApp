export type Option={
    _id:string;
    text:string;
    isRight:boolean;
}

export type Question={
    _id:string;
    question:string;
    points:number;
    negativePoints:number;
    options:Option[]
}

export type Quiz={
    _id:string;
    genre:string;
    description:string;
    image:string;
    questions:Question[]
}

export type QuizDataBase=Quiz[];