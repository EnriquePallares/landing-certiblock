import CustomLink from '@/components/ui/Link/Link';
import React from 'react';
export interface RegisterYourCompanyInterface {}

const RegisterYourCompany: React.FC<RegisterYourCompanyInterface> = () => {
  return (
    <section
      id="register-your-company"
      className="extend-bg-color rounded-t-3xl bg-blue-green md:rounded-t-[4.5rem]"
    >
      <div className="container mx-auto py-14 px-4 text-white md:py-20">
        <h3 className="mb-4 text-4xl font-medium">Registra tu empresa</h3>
        <p className="mb-8 text-xl font-light">
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
