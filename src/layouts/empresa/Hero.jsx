import { MessageCircle, Star, Users } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";

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
        <motion.h1
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="font-[700] text-[26px] lg:text-[48px] text-text text-center lg:text-start"
        >
          Conectamos tu empresa con reclutadores freelance
        </motion.h1>
        <motion.p
          variants={slideIn("left", "tween", 0.4, 1.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-[18px] text-text text-center lg:text-start"
        >
          Gestionamos el match perfecto entre tus necesidades y el talento
          ideal, optimizando costos y tiempos sin perder calidad.
        </motion.p>
        <motion.div
          variants={slideIn("right", "tween", 0.6, 1.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col lg:flex-row gap-[20px]"
        >
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
        </motion.div>
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
