import { House, Mail, PhoneCall } from "lucide-react";
import React from "react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { textVariant, fadeIn, slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <section className="flex flex-col lg:flex-row px-[16px] lg:px-[145px] gap-[60px] lg:gap-[110px] py-[80px] justify-center">
      <article className="flex flex-col lg:max-w-[568px] gap-[50px]">
        <div className="flex flex-col gap-[8px]">
          <motion.h4
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-primary text-[18px] font-[600] text-center lg:text-start"
          >
            ¿Te quedó alguna duda?
          </motion.h4>
          <div className="flex flex-col gap-[12px]">
            <motion.h2
              variants={textVariant(0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-text text-[24px] lg:text-[40px] font-[700] text-center lg:text-start"
            >
              Contactate con nosotros
            </motion.h2>
            <motion.p
              variants={textVariant(0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="text-nav text-[16px]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
              adiqua minim veniam quis nostrud exercitation ullamco
            </motion.p>
          </div>
        </div>
        <div className="flex flex-col gap-[35px]">
          <motion.div
            variants={textVariant(0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-start gap-[24px]"
          >
            <div className="bg-[#F4F0FD] p-2 rounded-[5px] size-[70px] flex items-center justify-center">
              <House className="text-primary" size={32} />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="text-text text-[18px] font-[600]">Ubicación</p>
              <p className="text-nav text-[16px]">ejemplo de dirección</p>
            </div>
          </motion.div>

          <motion.div
            variants={textVariant(1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-start gap-[24px]"
          >
            <div className="bg-[#F4F0FD] p-2 rounded-[5px] size-[70px] flex items-center justify-center">
              <PhoneCall className="text-primary" size={32} />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="text-text text-[18px] font-[600]">Teléfono</p>
              <p className="text-nav text-[16px]">011 5555555 </p>
            </div>
          </motion.div>

          <motion.div
            variants={textVariant(1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-start gap-[24px]"
          >
            <div className="bg-[#F4F0FD] p-2 rounded-[5px] size-[70px] flex items-center justify-center">
              <Mail className="text-primary" size={32} />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="text-text text-[18px] font-[600]">Mail</p>
              <p className="text-nav text-[16px]">info@wehunter.com</p>
            </div>
          </motion.div>
        </div>
      </article>

      <ContactForm />
    </section>
  );
};

export default Contact;
