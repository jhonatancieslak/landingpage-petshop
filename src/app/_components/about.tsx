import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6EC] py-16">
      <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Imagens */}
        <div className="relative">
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={about1Img}
              alt="Foto do Cachorro"
              fill
              quality={100}
              priority
              className="object-cover hover:scale-110 duration-300"
            />
          </div>

          <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden border-white rounded-lg">
            <Image
              src={about2Img}
              alt="Foto do Cachorro 2"
              fill
              quality={100}
              priority
            />
          </div>
        </div>

        {/* Texto e informações */}
        <div className="space-y-6 mt-10">
          <h2 className="text-4xl font-bold">SOBRE</h2>

          <p>
            Nosso pet shop é o lugar ideal para quem ama e cuida do seu pet com carinho!
            Oferecemos produtos de qualidade, serviços especializados e atendimento dedicado
            para garantir o bem-estar do seu amigo de quatro patas. Conte com a gente para
            deixar seu pet mais feliz, saudável e cheio de energia, sempre com muito amor e
            respeito aos animais!
          </p>

          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Check className="text-red-500" />
              Aberto desde 2021
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-red-500" />
              UTI com equipamentos de última geração
            </li>
            <li className="flex items-center gap-2">
              <Check className="text-red-500" />
              Qualidade é nossa prioridade
            </li>
          </ul>

          {/* Botões de ação */}
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-[#E84c3d] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
            >
              <WhatsappLogo className="w-5 h-5 text-white" />
              Contato Via WhatsApp
            </a>

            <a
              href="#"
              className="bg-blue-600 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
            >
              <MapPin className="w-5 h-5 text-white" />
              Endereço da Loja
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
