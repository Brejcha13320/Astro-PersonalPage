import { education } from "@/lib/data";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import TimelineItem from "./TimelineItem";

export default function EducationSection() {
  const { description, items } = education;
  return (
    <section
      id="formación"
      className="py-12 bg-gradient-to-b from-muted/10 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🎓 Formación Académica
          </h2>
        </MotionWrapper>

        <p className="text-muted-foreground pl-4 py-4 relative">{description}</p>

        <h2 className="text-2xl font-bold pl-4 mb-5 mt-8 text-center md:text-left">
            Premios y Participaciones
        </h2>

        <p className="text-muted-foreground pl-4 py-4 relative">
          <strong className="text-black dark:text-white">Becas de Rendimiento Académico: </strong>
          A lo largo de mi carrera universitaria, obtuve un total de 7 becas de rendimiento académico gracias a mis destacadas calificaciones. Estas becas no solo reconocieron mi dedicación y excelencia académica, sino que también jugaron un papel fundamental en la financiación de mi educación.
        </p>

        <p className="text-muted-foreground pl-4 py-4 relative">
          <strong className="text-black dark:text-white">
            Artículo Publicado en la revista Visión Electrónica:
          </strong>
          Implementation of a queue with priority with parameterizable variables to improve QoS Java. El artículo fue aprobado el 20/11/2019, en la revista "Visión electrónica" ISSN: 1909 9746,  e-ISSN:  2248-4728, categorizada a 2019 según Publindex como C.
          &nbsp;
          <a
            className="text-sm font-semibold rounded-lg border border-transparent focus:outline-none disabled:opacity-50 disabled:pointer-events-none text-blue-500 hover:text-blue-400 focus:text-blue-400"
            href="https://drive.google.com/file/d/1-6L9PCIupsyW6fpR-1bOVnEnUkaXziUJ/view"
            target="_blank">
              Ver Articulo
          </a>
        </p>

        <h2 className="text-2xl font-bold pl-4 mb-5 mt-8 text-center md:text-left">
            Idiomas
        </h2>

        <div className="space-y-5 pl-4 py-4 relative mb-10">
          <div>
            <div className="mb-2 flex justify-between items-center">
              <h3 className="text-sm font-semibold ">
                Español (Nativo)
              </h3>
              <span className="text-sm ">100%</span>
            </div>
            <div
              className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
              role="progressbar"
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                style={{width: "100%" }}
              ></div>
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between items-center">
              <h3 className="text-sm font-semibold ">
                Ingles (Intermedio)
              </h3>
              <span className="text-sm ">70%</span>
            </div>
            <div
              className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
              role="progressbar"
              aria-valuenow={70}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                style={{width: "70%" }}
              ></div>
            </div>
          </div>

        </div>

        <h2 className="text-2xl font-bold pl-4 mb-5 mt-8 text-center md:text-left">
            Estudios
        </h2>

        <div className="mb-10">
          {items.map((edu, index) => (
            <TimelineItem
              key={edu.institution}
              title={`🎓 ${edu.degree}`}
              subtitle={`🏛️ ${edu.institution}`}
              date={`📅 ${edu.period}`}
              isLast={index === items.length - 1}
              index={index}
            >
              <p className="text-sm text-muted-foreground mb-3">
                📍 {edu.location}
              </p>

              {edu.achievements && edu.achievements.length > 0 && (
                <motion.div
                  className="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-purple-500/20 dark:bg-card/10 dark:border-purple-500/10 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-3">
                    <div className="h-6 w-6 flex items-center justify-center rounded-full bg-purple-500/10 mr-2">
                      <Award className="h-4 w-4 text-purple-500" />
                    </div>
                    <h4 className="text-sm font-medium">
                      ✨ Achievements & Activities
                    </h4>
                  </div>
                  <ul className="list-none ml-4 space-y-2 text-sm">
                    {edu.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        className="text-muted-foreground relative pl-6"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        viewport={{ once: true }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </TimelineItem>
          ))}
        </div>

      </div>
    </section>
  );
}
