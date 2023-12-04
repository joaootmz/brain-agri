"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { saveFormData, updateFormData, getFormData } from '@/service/FormService';
import { v4 as uuidv4 } from 'uuid';


interface FormData {
    id: string;
    documento: string;
    produtor: string;
    fazenda: string;
    cidade: string;
    estado: string;
    hectares: number | '';
    agricultavel: number | '';
    vegetacao: number | '';
    cultura: string
}

interface FormContextProps {
    formState: FormData;
    setFormState: React.Dispatch<React.SetStateAction<FormData>>;
    saveFormData: (data: FormData) => Promise<void>;
    getFormData: () => Promise<void>;
    updateFormData: (data: FormData) => Promise<void>;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

interface FormProviderProps {
    children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
    const [formState, setFormState] = useState<FormData>({
        id: uuidv4(),
        documento: '',
        produtor: '',
        fazenda: '',
        cidade: '',
        estado: '',
        hectares: '',
        agricultavel: '',
        vegetacao: '',
        cultura: '',
    });

    const saveFormDataWithContext = async (data: FormData): Promise<void> => {
        try {
            await saveFormData(data, setFormState);
        } catch (error) {
            console.error('Error saving data:', error);
            throw error;
        }
    };

    const getFormDataWithContext = async (): Promise<void> => {
        try {
            await getFormData(setFormState);
        } catch (error) {
            console.error('Error getting data:', error);
            throw error;
        }
    };

    const updateFormDataWithContext = async (data: FormData): Promise<void> => {
        try {
            await updateFormData(data, setFormState);
        } catch (error) {
            console.error('Error updating data:', error);
            throw error;
        }
    };

    return (
        <FormContext.Provider value={{ formState, setFormState, saveFormData: saveFormDataWithContext, getFormData: getFormDataWithContext, updateFormData: updateFormDataWithContext }}>
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = (): FormContextProps => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useFormContext must be used within a FormProvider');
    }
    return context;
};
