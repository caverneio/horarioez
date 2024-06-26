"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowBigDownIcon } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/ui/github";
import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import U1Img from "./u1.png";
import U2Img from "./u2.jpeg";

export default function Page() {
  return (
    <div className="w-full h-full">
      <LampDemo />
      <div className="w-full mb-32">
        <iframe
          width="640"
          height="360"
          src="https://www.youtube.com/embed/uQ-DevFsYHw"
          title="Horario EZ en 90 segundos"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="mx-auto w-full sm:w-1/2 p-4"
        ></iframe>
      </div>

      <div className="flex flex-col w-full items-center">
        <h2 className="font-bold text-4xl italic text-primary text-center">
          <span className="font-mono text-6xl">126</span> horarios creados
        </h2>
        <div className="grid grid-cols-3 w-2/3 gap-4 my-4">
          <p className="p-6 bg-muted rounded-lg col-span-2">
            Buenazo, Anthony. Demasiado útil. Muchas gracias!
          </p>
          <div className="">
            <Image src={U1Img} alt="U1" className="rounded-full w-12 h-12" />
            <p>Kevin D.</p>
          </div>
        </div>

        <div className="grid grid-cols-3 w-2/3 gap-4 my-4">
          <div className="flex flex-col items-end">
            <Image src={U2Img} alt="U2" className="rounded-full w-12 h-12" />
            <p>Mary M.</p>
          </div>
          <p className="p-6 bg-muted rounded-lg col-span-2">
            Gracias Tony! Me salvaste la vida con esto. ¡Sigue así!
          </p>
        </div>
      </div>

      <div className="container px-32 my-8">
        <h2 className="font-bold text-4xl text-primary">FAQ</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-a">
            <AccordionTrigger className="text-primary-foreground text-lg">
              ¿Por qué Google dice que no es seguro?
            </AccordionTrigger>
            <AccordionContent>
              Te aparece el mensaje de &quot;Google no ha verificado esta
              aplicación&quot; porque google <strong>aún</strong> no ha
              verificado la aplicación. Esta se encuentra en proceso de
              verificación, que puede tomar unas semanas. Esto se debe a que
              usamos la API de Google Calendar para crear eventos en tu
              calendario. La aplicación es Open Source, por lo que puedes
              revisar el{" "}
              <a
                className="text-primary"
                href="https://github.com/caverneio/horarioez"
                target="_blank"
                rel="noopener noreferrer"
              >
                código fuente
              </a>{" "}
              y verificar que no hay nada malicioso. <br /> Para continuar, dale
              click a &quot;Avanzado&quot; y luego a &quot;Ir a utec.fyi&quot;.
              No olvides marcar la casilla de permisos para Google Calendar.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-b">
            <AccordionTrigger className="text-primary-foreground text-lg">
              ¿Es gratis?
            </AccordionTrigger>
            <AccordionContent>
              Crear la primera semana de tu calendario es gratis. Considera
              yapearme 5 so si quieres tener tu calendario hasta la semana 16.
              :D
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-c">
            <AccordionTrigger className="text-primary-foreground text-lg">
              Los cursos se repiten en mi calendario
            </AccordionTrigger>
            <AccordionContent>
              Probablemente se deba a que has creado el horario más de una vez.
              Cada horario se crea en un calendario distinto. Por lo tanto, no
              debes eliminar evento por evento, sino un calendario completo.
              Puedes eliminarlos manualmente desde Google Calendar siguiendo{" "}
              <a
                className="text-primary"
                href="https://support.google.com/calendar/answer/37188?hl=en&co=GENIE.Platform%3DAndroid&oco=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                esta guía
              </a>
              .
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-d">
            <AccordionTrigger className="text-primary-foreground text-lg">
              ¿Qué datos se guardan?
            </AccordionTrigger>
            <AccordionContent>
              Guardamos tu dirección correo y un contador de cuántos horarios se
              han creado. No guardamos tu consolidado de matrícula ni tu horario
              en sí. Cuando finalices, puedes desvincular tu cuenta de google a
              la app siguiente{" "}
              <a
                className="text-primary"
                href="https://support.google.com/accounts/answer/13533235?hl=en&sjid=3062595385943356500-SA#zippy=%2Cshare-access-to-your-google-account-with-a-third-party"
                target="_blank"
                rel="noopener noreferrer"
              >
                estos pasos
              </a>
              .
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex items-center justify-center w-full my-5">
        <Button variant="secondary" asChild>
          <a
            href="https://github.com/caverneio/horarioez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="w-6 h-6 inline-block mr-2" />
            Proudly open-source
          </a>
        </Button>
      </div>
    </div>
  );
}

function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Horario EZ
      </motion.h1>

      <motion.p
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 text-center text-lg text-slate-300"
      >
        Tu horario UTEC en Google Calendar al toque!
      </motion.p>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        href="/go"
        className="my-8 bg-gradient-to-br from-primary to-primary-light py-4 px-8 rounded-lg text-white text-xl font-medium tracking-tight text-center md:text-2xl"
      >
        Comenzar
      </motion.a>

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 0.8, y: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 text-center text-lg text-slate-300"
      >
        Mira el tutorial <ArrowBigDownIcon className="inline" />
      </motion.p>
    </LampContainer>
  );
}

const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background w-full z-0",
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-primary via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-background  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-primary text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-background  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-background blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-primary opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-primary/80 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-primary/80 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-background "></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
