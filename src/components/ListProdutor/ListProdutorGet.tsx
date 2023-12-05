import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import EditIcon from '@mui/icons-material/Edit';

interface MyData {
    documento: string;
    produtor: string;
    fazenda: string;
    cidade: string;
    estado: string;
    hectares: number | '';
    agricultavel: number | '';
    vegetacao: number | '';
    cultura: string;
  }

const fetchData = async () => {
    try {
      const response = await fetch('https://run.mocky.io/v3/20319d86-b78a-497c-9a50-e2d519317999');
  
      if (!response.ok) {
        throw new Error(`Erro ao obter dados da API. Status: ${response.status}`);
      }
  
      const data: MyData[] = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao obter dados da API:', error);
      throw error;
    }
  };

const ListProdutorGet: React.FC = () => {
    const [dados, setDados] = useState<MyData[]>([]);

    useEffect(() => {
        const obterDados = async () => {
          try {
            const dadosDaAPI = await fetchData();
            setDados(dadosDaAPI);
          } catch (error) {
            console.error('Erro ao obter dados:', error);
          }
        };
        console.log(dados)
    
      }, []);


    return (<>
        <div className="space-y-8">
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Olivia Martin</p>
                    <p className="text-sm text-muted-foreground">
                        Fazenda teste 1
                    </p>
                </div>
                <div className="ml-auto font-medium"><EditIcon /></div>
            </div>
            <div className="flex items-center">
                <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
                    <AvatarImage src="/avatars/02.png" alt="Avatar" />
                    <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Jackson Lee</p>
                    <p className="text-sm text-muted-foreground">Fazenda teste 2</p>
                </div>
                <div className="ml-auto font-medium">
                <div className="ml-auto font-medium"><EditIcon /></div>
                </div>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/03.png" alt="Avatar" />
                    <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
                    <p className="text-sm text-muted-foreground">
                        Fazenda teste 3
                    </p>
                </div>
                <div className="ml-auto font-medium"><EditIcon /></div>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/04.png" alt="Avatar" />
                    <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">William Kim</p>
                    <p className="text-sm text-muted-foreground">Fazenda teste 4</p>
                </div>
                <div className="ml-auto font-medium"><EditIcon /></div>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/05.png" alt="Avatar" />
                    <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Sofia Davis</p>
                    <p className="text-sm text-muted-foreground">Fazenda teste 5</p>
                </div>
                <div className="ml-auto font-medium"><EditIcon /></div>
            </div>
        </div>

    </>);
}

export default ListProdutorGet;