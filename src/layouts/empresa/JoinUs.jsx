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
        Elegí al experto adecuado, optimizá tu contratación y encontrá talento
        sin complicaciones.
      </motion.h2>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <JoinUsCard
          number={1}
          title="Definición de la búsqueda"
          description="Publicá tu vacante en minutos con nuestra estructura automatizada. Incluí los puntos clave para que el reclutador entienda exactamente qué perfil necesitás: tareas, conocimientos, experiencia, actividad, categoría, zona, condiciones de contratación y más."
          text="Transformamos la contratación de reclutadores en un proceso ágil, sin correos ni intermediarios innecesarios."
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
          title="Selección de reclutador"
          description="Asigná en segundos reclutadores especializados según el tipo de puesto y tu industria.Todo queda registrado en la plataforma garantizando trazabilidad, agilidad y transparencia desde el primer contacto."
          text="Pasá del reclutamiento tradicional al reclutamiento del futuro: más rápido, más eficiente y con los expertos adecuados desde el primer momento."
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
          title="Servicios al alcance de tu bolsillo"
          description="Contratá solo los servicios que se ajusten a tus necesidades y presupuesto, y potenciá tus búsquedas con el nivel de acompañamiento que elijas.Cada reclutador ofrece desde opciones básicas hasta soluciones integrales: screening de CVs, pruebas técnicas, evaluaciones psicotécnicas, verificación de identidad y más."
          text="Adaptá cada proceso a tu medida y optimizá tus recursos sin resignar calidad."
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
          title="Presentación de candidatos: Talento validado, sin vueltas"
          description="Olvídate de filtrar cientos de CVs. Recibí candidatos preseleccionados y validados por expertos según tus criterios.Cada reclutador detalla plazos, servicios y costos.Desde tu dashboard, gestioná todo el proceso con seguimiento en tiempo real y feedback integrado."
          text="Con WeHunter, elegís rápido y contratás mejor, sin perder tiempo."
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
          title="Pagos y cobros seguros"
          description="En WeHunter gestionas pagos con integraciones seguras y confiables. La empresa paga de forma segura y el reclutador cobra una vez entregado el servicio acordado, sin riesgos ni intermediarios."
          text="Seguridad y claridad para ambas partes, desde el acuerdo hasta el cierre."
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
          title="Calidad y mejora continua"
          description="Cada búsqueda es monitoreada por un Recruiter Advisor que supervisa tiempos, desempeño y cumplimiento de estándares.
            Además, empresas y talentos califican el servicio del reclutador, construyendo una reputación visible que impulsa la mejora continua."
          text="En WeHunter, el feedback no es solo una opinión, es una herramienta para crecer."
        />
      </motion.div>
      <button
        className="border-primary border-[1px] bg-primary text-white py-[9px] px-[24px] rounded-[6px]
          font-medium hover:text-primary hover:bg-white transition-colors lg:max-w-[252px] self-center"
      >
        Asigná tu reclutador ahora
      </button>
    </section>
  );
};

export default JoinUs;
