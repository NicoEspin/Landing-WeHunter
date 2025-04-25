import React from "react";
import HowWorksCard from "../../components/HowWorksCard";

const HowWorks = () => {
  return (
    <section className="py-[80px] px-[16px] lg:px-[40px] flex flex-col gap-[60px] items-center ">
      <h2 className="text-text text-[26px] lg:text-[28px] font-[700] text-center">
        Asigná el reclutador ideal en 3 simples pasos:
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px] items-center justify-center">
        <HowWorksCard
          height="230px"
          number={1}
          title="Publicá tu búsqueda"
          description="Cargá los detalles clave del puesto y lo que necesitás del perfil. En minutos, tu vacante está lista."
        />
        <HowWorksCard
          height="230px"
          number={2}
          title="Elegí el reclutador según su especialización"
          description="Seleccioná uno o varios reclutadores según industria, nivel de experiencia y tipo de posición."
        />
        <HowWorksCard
          height="230px"
          number={3}
          title="Gestioná todo desde tu dashboard"
          description="Hacelo todo desde tu dashboard: seguimiento, feedback y control de cada etapa del proceso."
        />
      </div>
      <button
        className="border-primary border-[1px] bg-primary text-white py-[9px] px-[24px] rounded-[6px]
          font-medium hover:text-primary hover:bg-white transition-colors lg:max-w-[271px]"
      >
        Registrarme como empresa
      </button>
    </section>
  );
};

export default HowWorks;
