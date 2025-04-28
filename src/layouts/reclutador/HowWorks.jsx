import React from "react";
import HowWorksCard from "../../components/HowWorksCard";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const HowWorks = () => {
  return (
    <section className="py-[80px] px-[16px] lg:px-[40px] flex flex-col gap-[60px] items-center ">
      <motion.h2
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-text text-[26px] lg:text-[28px] font-[700] text-center"
      >
        ¿Cómo funciona WeHunter para vos?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] items-center justify-center">
        <motion.div
          variants={fadeIn("right", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <HowWorksCard
            number={1}
            title="Armá tu perfil y destacá lo que sabés hacer"
            description="Cargá tu experiencia, áreas de especialización, tarifas y servicios que ofrecés. Tu perfil será validado por nuestro equipo, y podés sumar servicios adicionales como evaluaciones o asesoramiento. Tu marca personal, tu recorrido y tus habilidades son lo que te posicionan. Vos elegís cómo trabajar, cuánto cobrar y qué mostrar."
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.6, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <HowWorksCard
            number={2}
            title="Recibí búsquedas reales, elegidas para vos"
            description="Las empresas te seleccionan según tu perfil, experiencia y reputación dentro de la plataforma. Tu calificación es clave: no es solo una opinión, es tu diferencial. Cuanto mejor tu desempeño, más búsquedas te llegan. WeHunter te abre las puertas a más y mejores oportunidades."
          />
        </motion.div>
        <motion.div
          variants={fadeIn("right", "tween", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <HowWorksCard
            number={3}
            title="Presentá candidatos validados, todo desde un solo lugar"
            description="Accedé a la descripción detallada del puesto y subí tus candidatos con CV, evaluación, informe de entrevista y validación de identidad, todo desde tu dashboard. Gestioná el proceso con chat en tiempo real y recibí feedback sin salir de la plataforma.
            Olvidate de los mails sueltos: WeHunter formaliza tu trabajo y te da herramientas para crecer."
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.6, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <HowWorksCard
            number={4}
            title="Cobrás por tu trabajo, claro y seguro"
            description="La empresa paga por adelantado y vos cobrás al entregar el servicio acordado. Todo se maneja con medios de pago integrados y seguros, sin correr atrás de nadie.
            Tus ingresos están protegidos y vos tenés el control de tu negocio."
          />
        </motion.div>
      </div>
      <button
        className="border-primary border-[1px] bg-primary text-white py-[9px] px-[24px] rounded-[6px]
          font-medium hover:text-primary hover:bg-white transition-colors lg:max-w-[271px]"
      >
        Registrarme como reclutador
      </button>
    </section>
  );
};

export default HowWorks;
