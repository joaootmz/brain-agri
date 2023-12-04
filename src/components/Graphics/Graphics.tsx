import React from 'react';
import { BarGraphics } from './BarGraphics';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';

const Graphics: React.FC = () => {
  return(
  <>
              <Card className="col-span-3">
                <CardHeader>
                    <CardTitle>Dashboard Atualizado</CardTitle>
                    <CardDescription>
                        Confira em tempo real as culturas adicionadas.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <BarGraphics />
                </CardContent>
            </Card>
  
  </>);
}

export default Graphics;