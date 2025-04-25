export default function ContactForm() {
  return (
    <form className="max-w-[470px] p-[50px] bg-white rounded-xl shadow-lg space-y-4">
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
  );
}
