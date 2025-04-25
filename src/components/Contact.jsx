import { House, Mail, PhoneCall } from "lucide-react";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="flex flex-col lg:flex-row px-[16px] lg:px-[145px] gap-[60px] lg:gap-[110px] py-[80px] justify-center">
      <article className="flex flex-col lg:max-w-[568px] gap-[50px]">
        <div className="flex flex-col gap-[8px]">
          <h4 className="text-primary text-[18px] font-[600] text-center lg:text-start">
            ¿Te quedó alguna duda?
          </h4>
          <div className="flex flex-col gap-[12px]">
            <h2 className="text-text text-[24px] lg:text-[40px] font-[700] text-center lg:text-start">
              Contactate con nosotros
            </h2>
            <p className="text-nav text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
              adiqua minim veniam quis nostrud exercitation ullamco
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[35px]">
          <div className="flex items-start gap-[24px]">
            <div className="bg-[#F4F0FD] p-2 rounded-[5px] size-[70px] flex items-center justify-center">
              <House className="text-primary" size={32} />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="text-text text-[18px] font-[600]">Ubicación</p>
              <p className="text-nav text-[16px]">ejemplo de dirección</p>
            </div>
          </div>
          <div className="flex items-start gap-[24px]">
            <div className="bg-[#F4F0FD] p-2 rounded-[5px] size-[70px] flex items-center justify-center">
              <PhoneCall  className="text-primary" size={32} />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="text-text text-[18px] font-[600]">Teléfono</p>
              <p className="text-nav text-[16px]">011 5555555 </p>
            </div>
          </div>
          <div className="flex items-start gap-[24px]">
            <div className="bg-[#F4F0FD] p-2 rounded-[5px] size-[70px] flex items-center justify-center">
              <Mail className="text-primary" size={32} />
            </div>
            <div className="flex flex-col gap-[10px]">
              <p className="text-text text-[18px] font-[600]">Mail</p>
              <p className="text-nav text-[16px]">info@wehunter.com</p>
            </div>
          </div>
        </div>
      </article>
     <ContactForm />
    </section>
  );
};

export default Contact;
