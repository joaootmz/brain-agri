"use client";

import React, { useState, useEffect } from 'react';
import { useFormContext } from '@/context/formContext/FormContext';
import AddCultureInput from '../AddCultureInput/AddCultureInput';
import ListProdutorGet from './ListProdutorGet';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import AddIcon from '@mui/icons-material/Add';


import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';

const ListProdutor: React.FC = () => {
    const { formState, getFormData } = useFormContext();

    useEffect(() => {
        getFormData();
      }, []);
    return (
        <>
            <Card className="col-span-3">
                <CardHeader>
                    <div className='flex justify-between'>
                        <CardTitle>Produtores rurais</CardTitle>
                        <Sheet>
                        <SheetTrigger asChild className='cursor-pointer'>
                            <AddIcon />
                        </SheetTrigger>
                        <SheetContent className="w-[50%]">
                            <AddCultureInput />
                        </SheetContent>
                    </Sheet>
                        
                    </div>
                    <CardDescription>
                        Listagem atualizada dos produtores rurais atualizado.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ListProdutorGet />
                </CardContent>
            </Card>

        </>)
}

export default ListProdutor;