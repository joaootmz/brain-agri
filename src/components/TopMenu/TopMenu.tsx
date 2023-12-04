import React from 'react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import AddCultureInput from '../AddCultureInput/AddCultureInput';



const TopMenu: React.FC = () => {
    return (
        <div className="bg-gray-800 p-4">
            <div className="container flex items-center justify-between">
                <nav className="space-x-3">
                    <Sheet>
                        <SheetTrigger asChild>
                            <a href="#" className="text-white">Adicionar produtor rural</a>
                        </SheetTrigger>
                        <SheetContent>
                            <AddCultureInput />
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </div>
    );
};

export default TopMenu;
