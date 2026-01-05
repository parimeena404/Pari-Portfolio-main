"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AwardIcon, TrophyIcon, CodeIcon, GraduationCapIcon, UsersIcon, ZapIcon } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      title: "Quantum Computing (Basics) Course",
      description: "CDAC Thiruvananthapuram - Credential ID CDACH/QML/3860",
      icon: <CodeIcon className="h-10 w-10 text-yellow-500" />,
      period: "Jun 2025",
    },
    {
      title: "Building LLM Applications with Prompt Engineering",
      description: "NVIDIA - Advanced training in prompt engineering and LLM applications",
      icon: <CodeIcon className="h-10 w-10 text-yellow-500" />,
      period: "May 2025",
      credential: "v4rq1bLWQO-q2Ymc5WeYfw",
      certificate: "/Certificate Buliding LLM.jpeg",
    },
    {
      title: "Cyber Physical Systems Workshop",
      description: "iHub - AWADHH @ IIT Ropar - Credential ID CPS070",
      icon: <GraduationCapIcon className="h-10 w-10 text-yellow-500" />,
      period: "Apr 2025",
      certificate: "/Certificate CPS Workshop.jpeg",
    },
    {
      title: "CyberSecurity Workshop",
      description: "CyberGlow Programming and Computer training institute Indore",
      icon: <AwardIcon className="h-10 w-10 text-yellow-500" />,
      period: "Apr 2025",
      certificate: "/Certificate Cyber Workshop.jpeg",
    },
    {
      title: "Python Programming",
      description: "Skill India Digital Hub - Basic Python Programming Certification",
      icon: <CodeIcon className="h-10 w-10 text-yellow-500" />,
      period: "Apr 2025",
    },
    {
      title: "TCS iON Career Edge - Young Professional",
      description: "TCS iON - Skills: Soft Skills & Business Etiquette",
      icon: <GraduationCapIcon className="h-10 w-10 text-yellow-500" />,
      period: "Mar 2025",
      credential: "240640-27881079-1016",
    },
    {
      title: "Digital Business Skills Course",
      description: "HP LIFE - Digital Business Skills Certification",
      icon: <AwardIcon className="h-10 w-10 text-yellow-500" />,
      period: "Feb 2025",
    },
    {
      title: "Freedom with AI Masterclass",
      description: "Freedom With AI - Advanced AI Training and Certification",
      icon: <CodeIcon className="h-10 w-10 text-yellow-500" />,
      period: "Feb 2025",
    },
    {
      title: "Mastercard - Advisors & Consulting Services",
      description: "Forage - Skills: Strategic Communications, Data Analysis, Critical Thinking",
      icon: <AwardIcon className="h-10 w-10 text-yellow-500" />,
      period: "Feb 2025",
      credential: "24tLTjRneb8wYf4d7",
      certificate: "/Certificate Mastercard forage.jpeg",
    },
    {
      title: "McKinsey Forward Program",
      description: "McKinsey & Company - Professional Development Program",
      icon: <GraduationCapIcon className="h-10 w-10 text-yellow-500" />,
      period: "2025",
      certificate: "/Certificate McKinsey forward program.jpeg",
    },
    {
      title: "I Love Hackathon Winner",
      description: "Won I Love Indore Hackathon - Stock Saarthi Project",
      icon: <TrophyIcon className="h-10 w-10 text-yellow-500" />,
      period: "2025",
      certificate: "/Certificate ILoveHackathon.jpeg",
    },
    {
      title: "Nobel Thoughts Internship",
      description: "Successfully completed internship at Nobel Thoughts",
      icon: <AwardIcon className="h-10 w-10 text-yellow-500" />,
      period: "2025",
      certificate: "/certificate Nobel intern.jpeg",
    },
    {
      title: "Edunet Foundation Internship",
      description: "Successfully completed internship at Edunet Foundation",
      icon: <AwardIcon className="h-10 w-10 text-yellow-500" />,
      period: "2025",
      certificate: "/certificate edunet intern.jpeg",
    },
    {
      title: "Petals 6th Edition - Published Writer",
      description: "Caroling Pen Publishing - Published writing contribution",
      icon: <GraduationCapIcon className="h-10 w-10 text-yellow-500" />,
      period: "Feb 2025",
    },
    {
      title: "What Is Generative AI?",
      description: "LinkedIn Learning - Skills: Generative AI Tools, Artificial Intelligence",
      icon: <CodeIcon className="h-10 w-10 text-yellow-500" />,
      period: "Feb 2025",
    },
    {
      title: "Digital Skills: Artificial Intelligence",
      description: "Accenture in India - AI fundamentals and applications",
      icon: <CodeIcon className="h-10 w-10 text-yellow-500" />,
      period: "Jan 2025",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            My <span className="text-purple-600">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognition and awards received for technical excellence, leadership, and innovation.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="mb-4">{achievement.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{achievement.description}</p>
                  {achievement.period && (
                    <p className="text-purple-600 dark:text-purple-400 text-sm mt-1">{achievement.period}</p>
                  )}
                  {achievement.certificate && (
                    <a
                      href={achievement.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 text-sm mt-2 inline-block"
                    >
                      View Certificate →
                    </a>
                  )}
                  {achievement.link && (
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 text-sm mt-2"
                    >
                      View Project →
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
