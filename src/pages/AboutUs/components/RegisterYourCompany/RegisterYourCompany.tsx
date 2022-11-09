import CustomLink from '@/components/ui/Link/Link';
import React from 'react';
export interface RegisterYourCompanyInterface {}

const RegisterYourCompany: React.FC<RegisterYourCompanyInterface> = () => {
  return (
    <section
      id="register-your-company"
      className="bg-blue-green rounded-t-3xl md:rounded-t-[4.5rem] extend-bg-color"
    >
      <div className="container mx-auto py-14 md:py-20 px-4 text-white">
        <h3 className="text-4xl font-medium mb-4">Registra tu empresa</h3>
        <p className="text-xl font-light mb-8">
          Si te interesa certificar documentos desde el origen y generar
          archivos apoyados en blockchain inscribe tu empresa para empezar a
          crear con nosotros.
        </p>

        <div className="flex justify-end">
          <CustomLink
            to="/register"
            text="INICIAR REGISTRO"
            className="bg-primary text-dark-blue-0"
          />
        </div>
      </div>
    </section>
  );
};

export default RegisterYourCompany;
