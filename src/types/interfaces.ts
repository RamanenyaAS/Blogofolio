export interface IButton{
    text: string,
    isDisabled: boolean,
    typeButton: string
}

export interface ITabs{
    text: string,
    typeButton: string,
    isDisabled: boolean
}
export interface IPost{
        "id": number,
        "image": string,
        "text": string,
        "date": string,
        "lesson_num": number,
        "title": string,
        "description": string,
        "author": number
}

export interface IPost {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    description: string,
    author: number
}