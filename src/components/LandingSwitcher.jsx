import { useState } from "react";
import ReclutadoresLanding from "../layouts/reclutador/ReclutadoresLanding";
import EmpresasLanding from "../layouts/empresa/EmpresasLanding";

export default function LandingSwitcher() {
  const [activeTab, setActiveTab] = useState("reclutadores");

  return (
    <div>
      <div className="flex justify-center gap-[16px]">
        <button
          className={` py-[15px] font-medium cursor-pointer ${
            activeTab === "reclutadores"
              ? "text-primary border-b-2 border-primary"
              : "text-nav"
          }`}
          onClick={() => setActiveTab("reclutadores")}
        >
          Reclutadores
        </button>
        <button
          className={` py-[15px] font-medium cursor-pointer ${
            activeTab === "empresas"
              ? "text-primary border-b-2 border-primary"
              : "text-nav"
          }`}
          onClick={() => setActiveTab("empresas")}
        >
          Empresas
        </button>
      </div>

      
        {activeTab === "reclutadores" ? <ReclutadoresLanding /> : <EmpresasLanding />}
      
    </div>
  );
}
