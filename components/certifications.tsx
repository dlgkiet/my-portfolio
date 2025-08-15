"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";

export default function Certifications() {
  const { t } = useLanguage();

  return (
    <section
      id="certifications"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50/50 to-blue-50/50 dark:from-slate-900/50 dark:to-slate-800/50"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full border border-blue-200/50 dark:border-blue-700/50">
            <Award className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">
              {t("Certifications")}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
            {t("Certifications")}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300">
            {t("Professional certificates and achievements")}
          </p>
        </motion.div>

        {/* Certifications Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-800 dark:to-slate-900/50 border-0 shadow-2xl shadow-blue-500/10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
            <CardContent className="relative p-6 md:p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <motion.div
                  className="relative group flex-shrink-0"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500">
                    <Award className="h-10 w-10 lg:h-12 lg:w-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-xs">🏅</span>
                  </div>
                </motion.div>
                <div className="flex-1 space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* TOEIC */}
                    <div className="space-y-4">
                      <h5 className="font-semibold text-slate-800 dark:text-slate-200 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                        TOEIC English Certificate
                      </h5>
                      <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50">
                        <span className="text-lg font-bold text-slate-900 dark:text-white">
                          845/990
                        </span>
                      </div>
                    </div>
                    {/* Acumatica */}
                    <div className="space-y-4">
                      <h5 className="font-semibold text-slate-800 dark:text-slate-200 flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                        Acumatica Application Developer
                      </h5>
                      <a
                        href="https://badges.acumatica.com/APD-16a9072c-c34a-f011-babb-0afff66e2369.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50 hover:bg-blue-100/30 dark:hover:bg-blue-900/30 transition"
                      >
                        <span className="text-lg font-bold text-blue-700 dark:text-blue-300">
                          Acumatica
                        </span>
                        <span className="ml-auto text-sm text-slate-500 dark:text-slate-400 underline">
                          View Certificate
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
