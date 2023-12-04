"use client";

import React, { useState, useEffect } from 'react';
import { useFormContext } from '@/context/formContext/FormContext';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';

const ListProdutor: React.FC = () => {
    const { formState, getFormData } = useFormContext();

    useEffect(() => {
        getFormData();
        console.log(formState)
      }, []);
    return (
        <>
            <Card className="col-span-3">
                <CardHeader>
                    <CardTitle>Produtores rurais</CardTitle>
                    <CardDescription>
                        Listagem atualizada dos produtores rurais atualizado.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <h2>aqui vai a lista</h2>
                </CardContent>
            </Card>

        </>)
}

export default ListProdutor;