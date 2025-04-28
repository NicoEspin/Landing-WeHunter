import React from "react";
import SearchCard from "./SearchCard";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";

const Search = () => {
  return (
    <section className="px-[16px] lg:px-[40px] pb-[80px] flex flex-col overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[56px]">
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SearchCard
            title="Nuestra solución"
            description="Conectamos empresas con reclutadores freelance validados, combinando inteligencia artificial, procesos ágiles y transparencia total para asegurar el mejor match de talento."
          />
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.4, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SearchCard
            title="Reclutadores especializados"
            description="Todos los reclutadores cuentan con experiencia validada y enfoque en industrias específicas, lo que asegura búsquedas más eficientes, enfocadas y alineadas con tus necesidades."
          />
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.6, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SearchCard
            title="Contratación sin complicaciones"
            description="Asigná un reclutador en minutos, recibí candidatos en pocos días y gestioná todo desde la plataforma. Sin costos ocultos ni procesos desordenados."
          />
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.8, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SearchCard
            title="Servicios al alcance de tu bolsillo"
            description="Contratá solo los servicios que se ajusten a tus necesidades y presupuesto, y potenciá tus búsquedas con el nivel de acompañamiento que elijas. Cada reclutador ofrece desde opciones básicas hasta soluciones integrales."
          />
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 1.0, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SearchCard
            title="Seguimiento y optimización"
            description="Nuestros Recruiters Advisors monitorean métricas de desempeño de cada reclutador. Esto nos permite garantizar estándares altos en la comunidad y asegurar que trabajes con profesionales realmente comprometidos."
          />
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 1.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SearchCard
            title="Pagos y cobros seguros"
            description="Pagás solo por lo que contratás, y el cobro se activa una vez finalizado el servicio.La plataforma gestiona todo con integraciones seguras y confiables, para que el proceso sea claro, protegido y sin sorpresas."
          />
        </motion.div>
      </div>
      <button
        className="mt-[60px] border-primary border-[1px] bg-primary text-white py-[9px] px-[24px] rounded-[6px]
          font-medium hover:text-primary hover:bg-white transition-colors lg:max-w-[271px] self-center"
      >
        Publicá tu búsqueda ahora
      </button>
    </section>
  );
};

export default Search;
