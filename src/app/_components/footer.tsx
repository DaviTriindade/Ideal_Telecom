import elgin from "../../../public/elgin.png";
import consul from "../../../public/consul.png";
import samsung from "../../../public/samsung.png";
import midea from "../../../public/midea.png";
import philco from "../../../public/philco.png";
import gree from "../../../public/gree.png";
import Image from "next/image";
import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

const brands = [
  { name: "Elgin", logo: elgin },
  { name: "Midea", logo: midea },
  { name: "Consul", logo: consul },
  { name: "Gree", logo: gree },
  { name: "Samsung", logo: samsung },
  { name: "Philco", logo: philco },
];

export function Footer() {
  return (
    <section className="bg-[#346dd8] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8">
          <h4 className="text-3xl font-semibold mb-8 text-center">
            Marcas que trabalhamos
          </h4>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg flex items-center justify-center w-full h-24 overflow-hidden"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  quality={100}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Ideal Telecom</h3>
            <p className="mb-4">
              Seu conforto é nossa prioridade, sua confiança é nossa garantia.
            </p>
            <a href="https://wa.me/5511940375580?text=Olá vim pelo site e gostaria de mais informações" className="bg-green-500 px-4 py-2 rounded-md">
              Contato via WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Contatos</h3>
            <p>Email: ideal_telecom@yahoo.com.br</p>
            <p>Celular: (11) 9 4037-5580 - Márcia</p>
            <p>Celular: (11) 9 9390-1632 - Nelson</p>
            <p>São Paulo, SP</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Redes sociais</h3>
            <div className="flex gap-4">
              <a href="#">
                <FacebookLogo className="w-8 h-8" />
              </a>
              <a href="https://www.instagram.com/idealtelecom24?igsh=ZGFsYmhtdXkwc3lz" target="_blank">
                <InstagramLogo className="w-8 h-8" />
              </a>
              <a href="#">
                <YoutubeLogo className="w-8 h-8" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
