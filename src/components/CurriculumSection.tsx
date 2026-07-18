import { curriculum } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";

export default function CurriculumSection() {
    const { description, curriculumSpanish, curriculumEnglish } = curriculum;
    return (
        <section id="curriculum" className="py-12 bg-gradient-to-b from-muted/10 to-background my-10">
            <div className="container max-w-4xl mx-auto px-6 md:px-4">
                <MotionWrapper>
                    <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
                    📄 Mi Currículum
                    </h2>
                </MotionWrapper>

                <p className="text-muted-foreground pl-4 py-4 relative">{description}</p>

                <a
                    href={curriculumSpanish}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 inline-flex items-center gap-x-2 rounded-s-lg text-sm font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                    Hoja de Vida - Español
                </a>

                <a
                    href={curriculumEnglish}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 inline-flex items-center gap-x-2 rounded-e-lg text-sm font-medium border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                    Hoja de Vida - Inglés
                </a>
                
            </div>
        </section>
    );
}