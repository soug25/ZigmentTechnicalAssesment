// types/formSchema.ts
export interface FormFieldValidation {
    pattern?: string;
    message?: string;
    required?: boolean;
  }
  
  export interface FormFieldOption {
    value: string;
    label: string;
  }
  
  export type FormFieldType = 
    'text' | 'email' | 'textarea' | 
    'select' | 'radio' | 'checkbox';
  
  export interface FormField {
    id: string;
    type: FormFieldType;
    label: string;
    placeholder?: string;
    required?: boolean;
    validation?: FormFieldValidation;
    options?: FormFieldOption[];
  }
  
  export interface FormSchema {
    formTitle: string;
    formDescription: string;
    fields: FormField[];
  }
  
  export interface FormSubmissionData {
    [key: string]: string | string[];
  }