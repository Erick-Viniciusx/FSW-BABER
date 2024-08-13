"use client";

import { useState } from "react";
import { Button } from "./_components/ui/button";
import { SearchIcon, View } from "lucide-react";
import Header from "./_components/header";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  return (
    <div>
      {/* Header */}
       <Header/>
       <div className="p-5">
          <h2 className="text-xl font-bold">Olá, Erick!</h2>
          <p>Segunda-Feira, 12 de agosto.</p>

          {/* BUSCA */}
          <div className="mt-6 flex items-center gap-2">
            <Input placeholder="Faça sua busca..."/>
            <Button>
              <SearchIcon/>
            </Button>

          </div>

          {/* IMAGEM */}
          <div className="relative h-[150px] w-full mt-6">
            <Image
            alt="Agende com os melhores na FSW BARBER."
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
            />
          </div>

          {/* AGENDAMENTO */}
          <h2 className="mt-6 mb-3 text-xs font-bold uppercase text-gray-400">Agendamentos</h2>
          <Card className="">
            <CardContent className="flex justify-between p-0">
              
              {/* ESQUERDA */}
              <div className="flex flex-col gap-2 py-5 pl-5">
                <Badge className="w-fit">Confirmado</Badge>
                <h3 className="font-semibold">Corte de Cabelo</h3>

                <div className="flex items-center">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png"/>
                  </Avatar>
                  <p className="text-sm p-2">Barbearia FSW</p>
                </div>

              </div>

              {/* DIREITA */}
              <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
                <p className="text-sm">Agosto</p>
                <p className="text-2xl">05</p>
                <p className="text-sm">20:00</p>
              </div>
            </CardContent>
          </Card>

          <h2 className="mt-6 mb-3 text-xs font-bold uppercase text-gray-400">Recomendados</h2>
          <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map( barbershop => 
              (<BarbershopItem key={barbershop.id} barbershop={barbershop}/>

              ))}
          </div>
       </div>
    </div>
  );
}

export default Home;
