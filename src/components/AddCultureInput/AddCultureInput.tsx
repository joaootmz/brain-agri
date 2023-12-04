"use client";
import React, { ChangeEvent, useEffect } from 'react';
import { useFormContext } from '@/context/formContext/FormContext';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { SheetClose, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from '../ui/sheet';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const estadosBrasileiros = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR',
    'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
];

const AddCultureInput: React.FC = () => {
    const { formState, setFormState, saveFormData, getFormData } = useFormContext();

  
    const handleInputChange = (field: keyof typeof formState, value: string | number) => {
      setFormState((prevFormState) => ({ ...prevFormState, [field]: value }));
    };

    const handleEstadoChange = (event: React.ChangeEvent<{ value: string }>) => {
        const selectedEstado = event.target.value 
        handleInputChange('estado', selectedEstado);
      };

    const handleSave = async () => {
      try {
        await saveFormData(formState);
        console.log('Dados salvos com sucesso!');
      } catch (error) {
        console.error('Erro ao salvar dados:', error);
      }
    };


    return (
        <>
            <SheetHeader>
                <SheetTitle>Adiocne um novo produtor rural</SheetTitle>
                <SheetDescription>
                    Preencha corretamente os dados abaixo para que possam ser atualizados em seu dashboard
                </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                        CPF ou CNPJ
                    </Label>
                    <Input
                        type="text"
                        id="documentoInput"
                        value={formState.documento}
                        className="col-span-3"
                        onChange={(e) =>handleInputChange('documento', e.target.value)}
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                        Nome do produtor
                    </Label>
                    <Input id="username" value={formState.produtor}
                    onChange={(e) =>handleInputChange('produtor', e.target.value)}
                    className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                        Nome da Fazenda
                    </Label>
                    <Input id="username" value={formState.fazenda} onChange={(e) =>handleInputChange('fazenda', e.target.value)}
                     className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                        Cidade
                    </Label>
                    <Input id="username" value={formState.cidade} onChange={(e) =>handleInputChange('cidade', e.target.value)} 
                    className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                        Estado
                    </Label>
                    <Select
                        value={formState.estado}
                        onValueChange={() => handleEstadoChange}
                    >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Selecione um estado" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectGroup>
                        {estadosBrasileiros.map((estado) => (
                            <SelectItem key={estado} value={estado}>
                                {estado}
                            </SelectItem >
                        ))}
                        </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                        Área total em hectares
                    </Label>
                    <Input id="username" value={formState.hectares} onChange={(e) =>handleInputChange('hectares', e.target.value)} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                        Área agricultável
                    </Label>
                    <Input id="username" value={formState.agricultavel} onChange={(e) =>handleInputChange('agricultavel', e.target.value)} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                        Área de vegetação
                    </Label>
                    <Input id="username" value={formState.vegetacao} onChange={(e) =>handleInputChange('vegetacao', e.target.value)} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                        Cultura a ser plantada
                    </Label>
                    <Input id="username" value={formState.cultura} onChange={(e) =>handleInputChange('cultura', e.target.value)} className="col-span-3" />
                </div>
            </div>
            <SheetFooter>
                <SheetClose asChild>
                    <Button type="submit" onClick={handleSave}>Salvar</Button>
                </SheetClose>
            </SheetFooter>
        </>
    )
}

export default AddCultureInput

