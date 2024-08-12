"use client";

import { useState } from "react";
import { Button } from "./_components/ui/button";
import { SearchIcon, View } from "lucide-react";
import Header from "./_components/header";
import { Input } from "./_components/ui/input";
import Image from "next/image";

const Home = () => {
  const [] = useState();
  return (
    <div>
      {/* Header */}
       <Header/>
       <div className="p-5">
          <h2 className="text-xl font-bold">Olá, Erick!</h2>
          <p>Segunda-Feira, 12 de agosto.</p>

          <div className="mt-6 flex items-center gap-2">
            <Input placeholder="Faça sua busca..."/>
            <Button>
              <SearchIcon/>
            </Button>

          </div>

          <div className="relative h-[150px] w-full mt-6">
            <Image
            alt="Agende com os melhores na FSW BARBER."
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
            />
          </div>
       </div>
    </div>
  );
}

export default Home;
