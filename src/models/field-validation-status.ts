export type IMessageFormatValidation = [boolean, string[] | null]

export interface IFieldValidationStatus {
    error?: IMessageFormatValidation
    success?: IMessageFormatValidation
}
