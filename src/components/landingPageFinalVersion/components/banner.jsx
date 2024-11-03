import React from "react";
import Image from "next/image";
import Link from "next/link";

import mail from "@/src/assets/logos/mail.png";
import benkylogowhite from "@/src/assets/logos/Benky_logo_white 1.png";

import vectororange from "@/src/assets/newLogos/vectororange.png";
import vectorblue from "@/src/assets/newLogos/vectorblue.png";
import completephone from "@/src/assets/newLogos/complete-phone.png";
import circle from "@/src/assets/newLogos/circle.png";
import imagetrading from "@/src/assets/newLogos/imagetrading.png";
import imagecellphonehand from "@/src/assets/newLogos/imagecellphonehand.png";
import imageaccounts from "@/src/assets/newLogos/imageaccounts.png";
import rectangle from "@/src/assets/newLogos/rectangle.png";
import vectorheart from "@/src/assets/newLogos/vectorheart.png";
import Frame16 from "@/src/assets/newLogos/Frame16.png";
import Frame17 from "@/src/assets/newLogos/Frame17.png";
import Frame18 from "@/src/assets/newLogos/Frame18.png";
import LogoCliente from "@/src/assets/logos/logocliente.png";
import SectionAliados from "@/src/assets/logos/section-aliados.jpg";

export const Banner = () => {
    return (
      <div className="flex flex-col h-full" id="home">
        <div className="flex-grow">
          <div className="h-screen flex flex-col justify-center items-center px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-center mb-6">
              <div className="pb-1">
                <span className="font-extrabold text-blue_custom">At </span>
                <span className="font-extrabold text-transparent bg-gradient-to-b from-pink_custom via-lightpink_custom to-yellow_custom bg-clip-text">
                  Benky{" "}
                </span>
                <span className="font-semibold text-blue_custom">
                  , we&apos;re not just
                </span>
              </div>
              <div className="flex justify-center">
                <span className="font-semibold text-blue_custom pr-3">
                  another
                </span>
                <div className="flex flex-col items-center">
                  <span className="font-extrabold text-blue_custom relative inline-block">
                    Fintech.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 334 21"
                      fill="none"
                      className="absolute left-0 -bottom-5 w-full h-auto"
                    >
                      <path
                        d="M6 15C128.228 3.28989 198.672 3.05737 328 15"
                        stroke="#F87B27"
                        strokeWidth="12"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </h1>
            <p className="w-2/3 lg:w-1/2 text-base text-paragraph mb-6 text-center">
              We&apos;re passionate advocates for breaking down financial
              barriers and ensuring that transactions are easy, safe, and fast
              for everyone.
            </p>
            <button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-3xl px-10 font-light bg-gradient-to-b from-pink_custom via-lightpink_custom to-yellow_custom text-white text-base transition hover:scale-110 mb-20">
              <span className="pr-2">Contact</span>
              <Image src={mail} alt="mail icon" width={20} height={20} />
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
            </button>
          </div>

          <div className="relative flex flex-col items-center">
            <Image
              src={vectorblue}
              alt="vector rounded blue"
              width={1600}
              height={800}
              className="absolute -top-40 md:-top-60 left-0 w-full"
            />
          </div>

          <section
            className="grid grid-cols-12 mt-0 md:mt-48 relative"
            id="aboutUs"
          >
            <div className="flex col-span-12 md:col-span-6 justify-center items-center ">
              <div className="relative w-full h-96 inset-0 flex justify-center items-center">
                <Image
                  src={circle}
                  alt="circle"
                  className="min-[0px]:hidden min-[800px]:flex inset-0 w-full 2xl:w-4/5 object-cover"
                />
                <Image
                  src={LogoCliente}
                  alt="telephone"
                  className="absolute inset-0 w-1/3 2xl:w-1/3 m-auto "
                  style={{ background: "rgb(36,186,254)" }}
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 flex items-center h-full">
              <div className="p-10 2xl:p-22 m-10 bg-white rounded-2xl shadow-lg">
                <h4 className="flex flex-col">
                  <span className="text-sm 2xl:text-4xl font-medium text-transparent bg-gradient-to-b from-whiteblue_custom via-whiteblue_custom2 to-whiteblue_custom3 bg-clip-text tracking-widest">
                    Quienes somos
                  </span>
                  <div className="text-3xl 2xl:text-6xl">
                    <span className="font-medium">Que es </span>
                    <span className="font-bold text-transparent bg-gradient-to-b from-pink_custom via-lightpink_custom to-yellow_custom bg-clip-text">
                      HouseMedia
                    </span>
                  </div>
                </h4>
                <p className="text-sm 2xl:text-2xl border-l-8 border-blue-500 pl-2 mt-2 text-paragraph">
                  En House Media sabemos que la creatividad publicitaria no
                  consiste solo en lanzar un mensaje para que las campañas
                  tengan éxito, debemos seducir, motivar y llegar al corazón de
                  las personas.
                </p>
              </div>
            </div>
          </section>
          <section className="mt-36">
            <Image
              src={SectionAliados}
              alt="Aliados"
              className="image-section"
              width={"100%"}
              style={{ width: "100% !important" }}
            />
          </section>

          <section className="grid grid-cols-12 relative gap-6 mx-10 md:mx-20 py-20 md:my-16 z-10">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col items-center text-center border bg-white rounded-xl p-6">
              <Image
                className="rounded-xl w-full mb-4"
                src={imagetrading}
                alt="logo benky"
              />
              <h4 className="text-lg font-bold mb-2">Acompañamiento:</h4>
              <p className="text-xs">
                Te acompañamos desde el inicio en la creación de tu proyecto, a
                partir de la creatividad y la estrategia, asesorándote y
                orientándote.
              </p>
            </div>

            <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col items-center text-center border bg-white rounded-xl p-6">
              <Image
                className="rounded-xl w-full mb-4"
                src={imagecellphonehand}
                alt="logo benky"
              />
              <h4 className="text-lg font-bold mb-2">Creación:</h4>
              <p className="text-xs">
                somos un equipo de creativos apasionados que prosperamos
                desarrollando ideas frescas e innovadoras
              </p>
            </div>

            <div className="col-span-12 md:col-span-12 lg:col-span-4 flex flex-col items-center text-center border bg-white rounded-xl p-6">
              <Image
                className="rounded-xl w-full mb-4"
                src={imageaccounts}
                alt="logo benky"
              />
              <h4 className="text-lg font-bold mb-2">Resultado:</h4>
              <p className="text-xs">
                Nos enorgullece nuestra capacidad de convertir ideas creativas
                en resultados tangibles, y estamos comprometidos a ayudar a
                nuestros clientes a alcanzar sus metas.
              </p>
            </div>
          </section>

          <section className="relative flex flex-col py-28 bg-whiteblue_custom2">
            <div className="w-full flex justify-center items-center">
              <Image
                className="absolute -top-32 w-full h-1/2 md:h-full"
                src={rectangle}
                alt="imagen vector ondas"
              />
              <Image
                className="absolute w-full h-1/2 md:h-full top-0"
                src={vectorheart}
                alt="imagen vector corazon"
              />
            </div>
            <div className="relative z-10 flex flex-col mx-10 md:mx-20 text-white">
              <h3 className="text-2xl lg:text-3xl xl:text-4xl">
                <span>Insights about </span>
                <span className="font-bold">Latino population</span>
              </h3>
              <div className="flex flex-col lg:flex-row justify-between mt-20 gap-10">
                <div className="p-2">
                  <Image
                    width={70}
                    height={70}
                    src={Frame16}
                    alt="simbolo circular con un sumar"
                  />
                  <h4 className="text-base lg:text-lg 2xl:text-2xl mt-4 font-bold">
                    Latino Demographic And Economic Importance In The US:
                  </h4>
                  <p className="text-xs lg:text-sm 2xl:text-lg font-light">
                    The Latino population in the US accounts for 1 out of every
                    5 residents. Their growing participation in the labor force
                    has exceeded that of other groups, reflecting their rising
                    economic impact and influence within the country.
                  </p>
                </div>
                <div className="p-2">
                  <Image
                    width={70}
                    height={70}
                    src={Frame17}
                    alt="simbolo circular con un megafono"
                  />
                  <h4 className="text-base lg:text-lg 2xl:text-2xl mt-4 font-bold">
                    Impact of Labor Market Strength on Remittances:
                  </h4>
                  <p className="text-xs lg:text-sm 2xl:text-lg font-light">
                    A strong US labor market has led to an increase in
                    remittances to Latin American countries, including Colombia,
                    Mexico, El Salvador, and Guatemala. This highlights the
                    close link between economic prosperity in the US and
                    financial support provided to families abroad.
                  </p>
                </div>
                <div className="p-2">
                  <Image
                    width={70}
                    height={70}
                    src={Frame18}
                    alt="Simbolo accion en bolsa"
                  />
                  <h4 className="text-base lg:text-lg 2xl:text-2xl mt-4 font-bold">
                    Improvements in Economic Well-being:
                  </h4>
                  <p className="text-xs lg:text-sm 2xl:text-lg font-light">
                    Latinos have seen significant improvements in economic
                    well-being, with a marked decrease in poverty rates since
                    2000. This decline showcases the resilience and upward
                    mobility within the Latino community, which contributes to
                    overall economic growth and stability.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="grid grid-cols-12 justify-around bg-gradient-to-b text-white z-10 bg-darkblue_custom px-10 md:px-24 py-20 h-scren">
          <div className="col-span-12 lg:col-span-6 flex flex-col mb-15 items-center md:items-start">
            <Image
              src={benkylogowhite}
              width={150}
              height={150}
              alt="logo Benky"
            />
            <ul className="grid grid-cols-12 text-sm w-full text-center my-10">
              <li className="col-span-4 lg:col-span-2 mt-2">
                <Link href="">Home</Link>
              </li>
              <li className="col-span-4 lg:col-span-3 mt-2">
                <Link href="">About Us</Link>
              </li>
              <li className="col-span-4 lg:col-span-3 mt-2">
                <Link href="">How it Works</Link>
              </li>
              <li className="col-span-4 lg:col-span-2 mt-3 md:mt-2">
                <Link href="">Coverage</Link>
              </li>
              <li className="col-span-4 lg:col-span-2 mt-3 md:mt-2">
                <Link href="">Services</Link>
              </li>
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-6 flex flex-col mb-5 px-0 lg:pl-10">
            <h5 className="text-xl font-bold">Subscribe</h5>
            <div className="flex items-center mt-5 w-auto rounded-3xl border border-white bg-darkblue_custom">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow h-10 bg-darkblue_custom text-white rounded-3xl pl-4 border-none focus:outline-none focus:ring-0 w-3/5"
              />
              <button className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-3xl px-10 font-light text-white text-base duration-500 bg-gradient-to-b from-pink_custom via-lightpink_custom to-yellow_custom w-2/5">
                <div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">
                  Subscribe
                </div>
                <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
            <p className="text-xs font-light pt-3">
              By subscribing you agree to with our{" "}
              <span className="underline">Privacy Policy</span>
            </p>
          </div>

          <span className="col-span-12 border-b-2 w-full"></span>
          <div className="col-span-12 md:col-span-7 pt-10">
            <ul className="flex flex-col md:flex-row gap-3 md:gap-0 text-xs text-center md:justify-between">
              <li>Privacy</li>
              <li>Terms and conditions</li>
              <li>Cookies settings</li>
              <li className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                >
                  <path
                    d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
                    fill="white"
                  />
                </svg>
                info@benky.io
              </li>
              <li className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M3.54 2C3.6 2.89 3.75 3.76 3.99 4.59L2.79 5.79C2.38 4.59 2.12 3.32 2.03 2H3.54ZM13.4 14.02C14.25 14.26 15.12 14.41 16 14.47V15.96C14.68 15.87 13.41 15.61 12.2 15.21L13.4 14.02ZM4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.51C18 12.96 17.55 12.51 17 12.51C15.76 12.51 14.55 12.31 13.43 11.94C13.33 11.9 13.22 11.89 13.12 11.89C12.86 11.89 12.61 11.99 12.41 12.18L10.21 14.38C7.38 12.93 5.06 10.62 3.62 7.79L5.82 5.59C6.1 5.31 6.18 4.92 6.07 4.57C5.7 3.45 5.5 2.25 5.5 1C5.5 0.45 5.05 0 4.5 0Z"
                    fill="white"
                  />
                </svg>
                +1 (333) 1234 5678
              </li>
            </ul>
          </div>
          <p className="col-span-12 md:col-span-5 pt-10 pb-16 text-xs flex justify-center md:justify-end">
            © 2024 Banky.co All rights reserved.
          </p>
        </div>
      </div>
    );
};
