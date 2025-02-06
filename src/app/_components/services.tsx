"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Snowflake, Router } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react";

const services = [
  {
    title: "Instalação de ar condicionado",
    description:
      "Realizamos a instalação profissional de sistemas de climatização para residências e empresas, garantindo eficiência, segurança e o melhor desempenho dos equipamentos.",
    icon: <Snowflake />,
    linkText:
      "Olá, vi no site sobre instalação de ar condicionado e gostaria de mais informações.",
  },
  {
    title: "Manutenção Preventiva e Corretiva",
    description:
      "Oferecemos planos de manutenção para prolongar a vida útil do seu ar condicionado, evitando falhas inesperadas e reduzindo custos com reparos.",
    icon: <Snowflake />,
    linkText:
      "Olá, vi no site sobre manutenção preventiva e corretiva e gostaria de mais informações.",
  },
  {
    title: "Limpeza e Higienização",
    description:
      "Manter seu equipamento limpo é essencial para um ar mais puro e um funcionamento mais eficiente. Nossos serviços garantem a eliminação de impurezas, mofo e bactérias.",
    icon: <Snowflake />,
    linkText:
      "Olá, vi no site sobre limpeza e higienização e gostaria de mais informações.",
  },
  {
    title: "Instalação de Rede e Cabeamento",
    description:
      "Oferecemos soluções completas para instalação e manutenção de redes de telecomunicação, garantindo conexões rápidas, seguras e eficientes para sua residência ou empresa.",
    icon: <Router />,
    linkText:
      "Olá, vi no site sobre instalação de rede e cabeamento e gostaria de mais informações.",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-white py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Serviços</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                >
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div className="flex gap-3">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h3 className="font-bold text-xl my-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm select-none">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                      </div>

                      <a
                        target="_blank"
                        href={`https://wa.me/5511940375580?text=Olá vim pelo site e gostaria de mais informações sobre ${item.title}`}
                        className="flex items-center justify-center gap-2 hover:bg-green-500 px-4 py-1 rounded-md duration-300"
                      >
                        <WhatsappLogo className="w-5 h-5" />
                        Entrar em contato
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
