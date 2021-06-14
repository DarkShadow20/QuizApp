export type Option={
    id:string;
    text:string;
    isRight:boolean;
}

export type Question={
    id:string;
    question:string;
    points:number;
    negativePoints:number;
    options:Option[]
}

export type Quiz={
    id:string;
    genre:string;
    description:string;
    image:string;
    questions:Question[]
}

export type QuizDataBase=Quiz[];