import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
export default function ContactForm() {
  return (
    <motion.div
      variants={fadeIn("left", "tween", 2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="overflow-x-hidden max-w-[470px] p-[50px] bg-white rounded-xl shadow-lg space-y-4"
    >
      <form>
        <input
          type="text"
          placeholder="Nombre"
          className="w-full border border-gray-300 rounded-md px-[20px] py-[13px] mb-[25px] focus:outline-none focus:border-primary text-[16px]"
        />
        <input
          type="email"
          placeholder="Mail"
          className="w-full border border-gray-300 rounded-md px-[20px] py-[13px] mb-[25px] focus:outline-none focus:border-primary text-[16px]"
        />
        <input
          type="text"
          placeholder="Telefono"
          className="w-full border border-gray-300 rounded-md px-[20px] py-[13px] mb-[25px] focus:outline-none focus:border-primary text-[16px]"
        />
        <textarea
          placeholder="Mensaje"
          rows="4"
          className="w-full border border-gray-300 rounded-md px-[20px] py-[13px] mb-[25px] focus:outline-none focus:border-primary text-[16px] resize-none"
        ></textarea>
        <button
          className="w-full border-primary border-[1px] bg-primary text-white py-[13px] px-[24px] rounded-[6px]
          font-medium hover:text-primary hover:bg-white transition-colors self-center"
        >
          Enviar mensaje
        </button>
      </form>
    </motion.div>
  );
}
