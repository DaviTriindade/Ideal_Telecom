import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import bgImg from "../../../public/bg.png";
import arImg from "../../../public/ar.png";
import Image from "next/image";

export function Hero() {
  return (
<section className="bg-gradient-to-r from-[#201ea1] to-[#346dd8] text-white relative overflow-hidden">

      <div>
        <Image
          src={bgImg}
          alt="Foto da mulher"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        ></Image>
        <div className="absolute  inset-0  bg-black  opacity-40  md:hidden"></div>
      </div>

      <div className="container  mx-auto  pt-16  pb-16  md:pb-0  px-4  relative">
        <article className="grid grid-cols-1  lg:grid-cols-2  gap-8">
          <div className="space-y-6">
            <h1 className="text-3xl  md:text-4xl  lg:text-5xl  font-bold  leading-10 ">IDEAL TELECOM</h1>
            <p className="lg:text-lg">
              Sofrendo com o calor? Nós temos a solução!
            </p>
            <a
              href="https://wa.me/5511940375580?text=Olá, vim pelo site e gostaria de mais informações"
              className="bg-green-500  px-5  py-2  rounded-md  font-semibold  flex  items-center  justify-center w-fit gap-2"
            >
              <WhatsappLogo className="w-5 h-5" />
              Contato via WhatsApp
            </a>

            <div className="flex mt-4">
              <div className="hidden lg:block max-w-[250px]">
                <Image
                  src={arImg}
                  alt="foto do ar"
                  quality={100}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="hidden md:block h-[500px] w-full relative">
            <Image
              src={bgImg}
              alt="Foto da mulher"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            ></Image>
          </div>
        </article>
      </div>
    </section>
  );
}
