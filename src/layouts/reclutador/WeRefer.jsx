import { Rocket, RocketIcon } from "lucide-react";
import React from "react";

const WeRefer = () => {
  return (
    <section className="lg:px-[40px] pb-[80px]">
      <article
        className="flex flex-col lg:flex-row gap-[56px] py-[56px] px-[16px] lg:px-[80px] items-center
        bg-gradient-to-r from-[#8F68FC] to-[#5A189A] shadow-[0px_10px_12px_0px_#00000014] lg:rounded-[20px]"
      >
        <div>
          <RocketIcon className="size-[80px] text-white " />
        </div>
        <div className="flex flex-col gap-[24px]">
          <h2 className="text-[26px] lg:text-[28px] font-[700] text-white text-center lg:text-start">
            WeRefer: Ganá por recomendar talento como vos
          </h2>
          <p className="text-white text-[20px] lg:text-[24px]">
            ¿Conocés a otros reclutadores que también buscan trabajar con
            libertad, visibilidad y sin intermediarios? Invitálos a sumarse a
            WeHunter. Por cada reclutador que se registre con tu invitación,
            comisionás sobre sus tres primeras búsquedas completadas. Más
            colegas en la red, más oportunidades para vos.
            <br />
            <br />
            Compartí tu link. Crecé en comunidad. Generá ingresos extra.
          </p>
          <button
            className="border-white border-[1px]  text-white py-[9px] px-[24px] rounded-[6px]
          font-medium hover:text-primary hover:bg-white transition-colors lg:max-w-[252px] "
          >
            Asigná tu reclutador ahora
          </button>
        </div>
      </article>
    </section>
  );
};

export default WeRefer;
