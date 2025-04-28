import React from "react";
import JoinUsCard from "../../components/JoinUsCard";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../../utils/motion";

const JoinUs = () => {
  return (
    <section className="px-[16px] lg:px-[40px] py-[80px] flex flex-col gap-[60px] overflow-x-hidden">
      <motion.h2
        variants={textVariant(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="text-text text-[26px] lg:text-[28px] font-[700] text-center"
      >
        ¿Por qué sumarte a WeHunter?
      </motion.h2>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <JoinUsCard
          number={1}
          title="Mostrá tu valor y construí tu marca personal"
          description="Tu perfil es tu carta de presentación: mostrá tu experiencia, especialización, herramientas y estilo de trabajo."
          text="En WeHunter posicionás tu marca personal como profesional del talento."
        />
      </motion.div>

      <motion.div
        variants={slideIn("left", "tween", 0.4, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className=" flex justify-end"
      >
        <JoinUsCard
          number={2}
          title="Visibilidad sin fronteras, potencial sin techo"
          description="Empresas de distintas industrias y países pueden encontrarte y contratarte."
          text="WeHunter te da visibilidad global para que escales tu negocio sin límites."
        />
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.5, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <JoinUsCard
          number={3}
          title="Acompañamiento experto para potenciar tu perfil"
          description="Contás con un Recruiter Advisor que monitorea tus métricas, te brinda feedback y te acompaña para que mejores tu posicionamiento y rendimiento."
          text="Estás respaldado por una red que quiere verte crecer."
        />
      </motion.div>

      <motion.div
        variants={slideIn("left", "tween", 0.4, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className=" flex justify-end"
      >
        <JoinUsCard
          number={4}
          title="Cobros claros y finanzas bajo control"
          description="Olvidate de perseguir pagos: administrá tus ingresos con orden y seguridad."
          text="Cobrás por cada búsqueda entregada, con medios de pago integrados y trazabilidad total."
        />
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.4, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <JoinUsCard
          number={5}
          title="Sistema de reputación que impulsa tu crecimiento"
          description="Cada búsqueda te suma visibilidad. Cuanto mejor tu desempeño, más alto te posicionás y más oportunidades recibís."
          text="Tu reputación es tu diferencial y tu motor de escalabilidad."
        />
      </motion.div>

      <motion.div
        variants={slideIn("left", "tween", 0.4, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className=" flex justify-end"
      >
        <JoinUsCard
          number={6}
          title="Libertad total para armar tu propio negocio"
          description="Definí tus precios, tiempos y tipo de búsquedas. ¿Querés escalar? Podés sumar otros reclutadores a tu equipo y convertirte en referente dentro de la comunidad."
          text="Vos decidís cómo crecer."
        />
      </motion.div>
      <button
        className="border-primary border-[1px] bg-primary text-white py-[9px] px-[24px] rounded-[6px]
          font-medium hover:text-primary hover:bg-white transition-colors lg:max-w-[271px] self-center"
      >
        Registrarme como reclutador
      </button>
    </section>
  );
};

export default JoinUs;
