import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

import AddCultureInput from '../AddCultureInput/AddCultureInput';



const TopMenu: React.FC = () => {
    return (
        <div className="bg-gray-800 p-4">
            <div className="container flex items-center justify-between">
                <nav className="space-x-3">
                    <a href="#" className="text-white">Teste Brain Agriculture</a>
                </nav>
            </div>
        </div>
    );
};

export default TopMenu;
