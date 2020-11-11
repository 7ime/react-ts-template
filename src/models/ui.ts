export type LinkTarget = '_blank' | '_self' | '_parent' | '_top'

export interface ParentClass {
    parentClass?: string
}

export type MessageFormatValidation = [boolean, string[] | null]

export interface FieldValidationStatus {
    error?: MessageFormatValidation
    success?: MessageFormatValidation
}
