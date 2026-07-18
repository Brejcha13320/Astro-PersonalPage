import { carrer } from "@/lib/data";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";

function SkillTag({ skill, index }: { skill: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.05 * index,
      }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-3 py-1 bg-muted/80 backdrop-blur-sm rounded-md text-sm border border-purple-500/10 shadow-sm"
    >
      {skill}
    </motion.div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const carrerCategoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function CarrerSection(){
    const { description, items, phrase, info } = carrer;
    return (
        <section id="trayectoria" className="py-12 bg-gradient-to-b from-muted/20 to-background">
            <div className="container max-w-4xl mx-auto px-6 md:px-4">
                <MotionWrapper>
                    <h2 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center md:inline-block">
                        🧭 Trajectoria Profesional
                    </h2>
                </MotionWrapper>

                <p className="text-muted-foreground pl-4 py-10 mb-4 relative">{description}</p>
                
                <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}>
                        
                        <motion.div variants={carrerCategoryVariants}>
                            <GlassCard className="p-4">
                            <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                                <span className="mr-2 text-xl">💻</span> Ingeniería de Software
                            </h3>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {items.softwareEngineering.map((skill, index) => (
                                <SkillTag key={skill} skill={skill} index={index} />
                                ))}
                            </div>
                            </GlassCard>
                        </motion.div>

                        <motion.div variants={carrerCategoryVariants}>
                            <GlassCard className="p-4">
                            <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                                <span className="mr-2 text-xl">👥</span> Liderazgo Técnico
                            </h3>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {items.technicalLeadership.map((skill, index) => (
                                <SkillTag key={skill} skill={skill} index={index} />
                                ))}
                            </div>
                            </GlassCard>
                        </motion.div>

                        <motion.div variants={carrerCategoryVariants}>
                            <GlassCard className="p-4">
                            <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                                <span className="mr-2 text-xl">📁</span> Gestión de Proyectos
                            </h3>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {items.projectManagement.map((skill, index) => (
                                <SkillTag key={skill} skill={skill} index={index} />
                                ))}
                            </div>
                            </GlassCard>
                        </motion.div>

                        <motion.div variants={carrerCategoryVariants}>
                            <GlassCard className="p-4">
                            <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                                <span className="mr-2 text-xl">🤝</span> Colaboración Profesional
                            </h3>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {items.collaboration.map((skill, index) => (
                                <SkillTag key={skill} skill={skill} index={index} />
                                ))}
                            </div>
                            </GlassCard>
                        </motion.div>

                        <motion.div variants={carrerCategoryVariants}>
                            <GlassCard className="p-4">
                            <h3 className="text-lg font-medium mb-3 text-center md:text-left flex items-center">
                                <span className="mr-2 text-xl">🧠</span> Competencias Profesionales
                            </h3>
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                {items.professionalSkills.map((skill, index) => (
                                <SkillTag key={skill} skill={skill} index={index} />
                                ))}
                            </div>
                            </GlassCard>
                        </motion.div>

                </motion.div>

                <MotionWrapper>
                    <div className="mt-10 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm backdrop-filter p-4 rounded-lg border border-purple-500/20 dark:border-purple-500/10 shadow-sm">
                    <p className="text-muted-foreground pl-4 py-2 mb-4 relative">
                        <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
                        {phrase}
                    </p>
                    </div>
                </MotionWrapper>

                <div className="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
                    <div className="border border-neutral-800 rounded-xl">
                        <div className="p-4 lg:p-8 bg-gradient-to-bl from-neutral-800 via-neutral-900 to-neutral-950 rounded-xl">
                            <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                                {info.map((item) => (
                                    <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                                        <img className="flex-shrink-0 size-6 sm:size-8 mx-auto" src={item.icon} />
                                        <div className="mt-3 sm:mt-5">
                                            <h3 className="text-lg sm:text-3xl font-semibold text-white">{item.count}</h3>
                                            <p className="mt-1 text-sm sm:text-base text-neutral-400">
                                                {item.title}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}