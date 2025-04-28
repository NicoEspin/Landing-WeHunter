import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";

const FreelanceCalculator = () => {
  return (
    <section className="py-[80px] px-[16px] lg:px-[40px] lg:flex gap-[86px] overflow-x-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col gap-[12px] max-w-[665px]"
      >
        <h2 className="text-text text-[26px] lg:text-[28px] font-[700] text-center lg:text-start">
          Calculadora Freelance: Valorá tu trabajo con claridad
        </h2>
        <p className="text-text text-[18px]">
          ¿No sabés cuánto cobrar por tus servicios de reclutamiento? Usá
          nuestra herramienta para estimar precios según tu país, experiencia y
          el tipo de servicio que ofrecés.
        </p>
        <p className="text-primary text-[20px] lg:text-[24px] py-[16px]">
          Calculá, ajustá y armá tu estrategia como profesional independiente.
        </p>
        <button
          className="border-primary border-[1px] bg-primary text-white py-[9px] px-[24px] rounded-[6px]
          font-medium hover:text-primary hover:bg-white transition-colors lg:max-w-[177px]"
        >
          Usar calculadora
        </button>
      </motion.div>
      <motion.img
        variants={slideIn("right", "tween", 0.4, 1.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        src="./calculator.webp"
        alt="calculator"
        className="aspect-square lg:max-w-[435px] self-center"
      />
    </section>
  );
};

export default FreelanceCalculator;
