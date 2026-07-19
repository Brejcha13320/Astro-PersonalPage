import { certifications } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function companyUrl(company: string){
    const lowerCompany = company.toLowerCase();
    let urlCompany = '';
    switch (lowerCompany) {
      case 'udemy':
        urlCompany = "/images/udemy.png";
        break;
      case 'platzi':
        urlCompany = "/images/platzi.png";
        break;
    }
    return urlCompany;
}

export default function CarrerSection(){
    const { description, heads, rows } = certifications;
    return (
        <section id="certificaciones" className="py-12 bg-gradient-to-b from-muted/20 to-background">
            <div className="container max-w-4xl mx-auto px-6 md:px-4">
                <MotionWrapper>
                    <h2 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center md:inline-block">
                        📜 Certificaciones
                    </h2>
                </MotionWrapper>

                <p className="text-muted-foreground pl-4 py-10 mb-4 relative">{description}</p>

                <motion.div
                    className="space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}>

                    <div className="scroller-auto max-h-[30rem]">
                        <div className="max-w-[54rem] border rounded-lg shadow overflow-hidden">
                            <table className="divide-y w-full">
                                <thead>
                                    <tr className="divide-x">
                                        {heads.map((item) => (
                                            <th scope="col" className="px-6 py-3 text-center text-xs font-medium uppercase">
                                                {item}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {rows.map((item, index) => (
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                { index + 1 }
                                            </td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                <div className="flex gap-3 items-center">
                                                    <img
                                                    className="rounded w-8"
                                                    src={companyUrl(item.company)}
                                                    alt={item.company}/>
                                                    { item.name }
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                                                { item.date }
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                                                <a 
                                                    className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                                                    type="button"
                                                    href={item.urlCertification}
                                                    target="_blank">
                                                    Ver
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </motion.div>

            </div>
        </section>
    );
}