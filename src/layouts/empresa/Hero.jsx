import { Building, MessageCircle, Star, Users } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <main className="flex items-center mt-2 lg:mt-0">
      <div className="flex flex-col gap-[20px] lg:w-[50%] pr-[29px] pl-[40px]">
        <div className="flex gap-[16px] ">
          <span className="flex gap-[4px] text-[12px] text-primary text-center">
            <Star />
            Conócenos sin costo
          </span>
          <span className="flex gap-[4px] text-[12px] text-primary text-center">
            <Users />
            Reclutadores expertos
          </span>
          <span className="flex gap-[4px] text-[12px] text-primary text-center">
            <MessageCircle />
            Contacto directo
          </span>
        </div>
        <h1 className="font-[700] text-[26px] lg:text-[48px] text-text text-center lg:text-start">
          Conectamos tu empresa con reclutadores freelance
        </h1>
        <p className="text-[18px] text-text">
          Gestionamos el match perfecto entre tus necesidades y el talento
          ideal, optimizando costos y tiempos sin perder calidad.
        </p>
        <div className="flex flex-col lg:flex-row gap-[20px]">
          <button
            className="border-primary border-[1px] text-primary py-[9px] px-[24px] rounded-[6px]
          font-medium hover:text-white hover:bg-primary transition-colors"
          >
            Iniciar Sesión
          </button>
          <button
            className="border-primary border-[1px] bg-primary text-white py-[9px] px-[24px] rounded-[6px]
          font-medium hover:text-primary hover:bg-white transition-colors"
          >
            Registarme
          </button>
        </div>
      </div>
      <img
        src="./company-hero.webp"
        alt="Hero-img"
        className="hidden lg:block w-[744px] h-[806px] "
      />
    </main>
  );
};

export default Hero;
