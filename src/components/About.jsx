import { Atom, Handshake, Users } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <section className="py-[80px] px-[16px] lg:px-[40px]  lg:flex gap-[60px]">
      <img
        src="./about.webp"
        alt="about img"
        className="lg:h-[343px] lg:w-[609px] rounded-[32px] mb-[20px] lg:mb-0"
      />
      <div className="flex flex-col gap-[12px] justify-center">
        <h2 className="text-text text-[26px] lg:text-[28px] font-[700] text-center lg:text-start">
          ¿Qué hacemos?
        </h2>
        <article className="flex gap-[14px] ">
          <Atom className="size-[30px] text-primary self-center" />
          <p className="text-text text-[18px]">
            Conectamos empresas con reclutadores freelance para crear relaciones
            estratégicas que impulsan el éxito en cada contratación.
          </p>
        </article>
        <article className="flex gap-[14px] ">
          <Users className="size-[30px] text-primary self-center" />
          <p className="text-text text-[18px]">
            Juntos, transformamos el reclutamiento en un proceso más eficiente,
            flexible y accesible.
          </p>
        </article>
        <article className="flex gap-[14px] ">
          <Handshake className="size-[30px] text-primary self-center" />
          <p className="text-text text-[18px]">
            Unimos talento con oportunidades. Unimos empresas con expertos.
            Creamos conexiones que generan resultados.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
