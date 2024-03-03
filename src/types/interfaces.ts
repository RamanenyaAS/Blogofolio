export interface IButton{
    text: string,
    isDisabled: boolean,
    clickFunction: () => void,
    typeButton: string
}

export interface ITabs{
    text: string,
    typeButton: string,
    isDisabled: boolean
}