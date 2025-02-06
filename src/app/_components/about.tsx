import Image from "next/image";
import about from "../../../public/about.png";
import { Check } from "lucide-react";

export function About() {
  return (
    <section className="bg-white  py-16">
      <div className="container  px-4  mx-auto">
        <div className="grid  grid-cols-1  lg:grid-cols-2  gap-12  items-center">
          <div className="relative  w-full  h-[400px]  rounded-3xl  overflow-hidden">
            <Image
              src={about}
              alt="foto de tecnico"
              fill
              quality={100}
              priority
              className="object-cover  hover:scale-110  duration-300"
            ></Image>
          </div>

          <div className="space-y-6  mt-10">
            <h2 className="text-4xl  font-bold">SOBRE</h2>

            <p>
              A <strong>Ideal Telecom</strong> é uma empresa especializada em
              soluções de climatização, oferecendo serviços de instalação e
              manutenção de ar-condicionado com qualidade e eficiência. Contamos
              com uma equipe experiente e comprometida em garantir conforto
              térmico e o bom funcionamento dos equipamentos, sempre priorizando
              a satisfação dos nossos clientes. Trabalhamos com tecnologia de
              ponta e as melhores práticas do mercado para proporcionar um
              atendimento ágil, seguro e confiável. Seja para a climatização do
              seu lar ou para garantir um ambiente agradável em seu negócio, a <strong>Ideal Telecom</strong> está pronta para oferecer o melhor serviço.
            </p>

            <ul className="space-y-4">
              <li className="flex  items-center  gap-2">
                <Check className="text-blue-500" />
                Qualidade é nossa prioridade.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
