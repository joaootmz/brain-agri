import React from 'react';
import { BarGraphics } from './BarGraphics';
import PieGraphic from './PieGraphics';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';

const Graphics: React.FC = () => {
    return (
        <>
            <Card className="col-span-3">
                <CardHeader>
                    <CardTitle>Dashboard Atualizado</CardTitle>
                    <CardDescription>
                        Confira em tempo real as produções adicionadas.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='flex justify-between'>
                    <BarGraphics />
                    <PieGraphic />
                    </div>
                </CardContent>
            </Card>

        </>);
}

export default Graphics;