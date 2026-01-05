"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BriefcaseIcon, CalendarIcon, UsersIcon } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Smart India Hackathon 2025 (SIH)",
      role: "Frontend Developer & Team Coordinator",
      period: "December 2025",
      description: [
        "Developed 'Krishi Bhandu' - a Flutter-based mobile application for farmers.",
        "Led major work in API integration and frontend development.",
        "Managed team coordination, meetings, and project management throughout the hackathon.",
        "Handled frontend-API mapping and ensured seamless integration of all components.",
        "Coordinated timelines and deliverables to meet hackathon deadlines.",
      ],
      achievements: [
        "Grand Finale Winner - Smart India Hackathon 2025",
      ],
    },
    {
      title: "GDGOC IET DAVV",
      role: "Creative Team Lead",
      period: "July 2024 – Present",
      description: [
        "Core Team Member (July 2024 - August 2024), promoted to Creative Team Lead (September 2024).",
        "Led content strategy and social media initiatives to enhance community engagement.",
        "I Love Hackathon (Dec 2024): Led frontend development for Stock Saarthi, a Web3-based platform.",
        "DAVV Youth Fest (Feb 2025): Contributed to event organization and technical coordination.",
        "IIT Indore Hackathon (Aug 2025): Contributed to project development and team collaboration.",
        "Navonmesh Hackathon Raipur (Nov 2025): Handled frontend and API integration.",
        "Built multiple Flutter and API-based projects including a Geolocation-based Attendance Tracking System.",
      ],
      achievements: [
        "Ranked 3rd in Code Series",
        "Winner - I Love Hackathon (Dec 2024)",
      ],
    },
    {
      title: "DAVV State-Level Youth Fest",
      role: "Core Organizing Team Member",
      period: "February 2025",
      description: [
        "Part of the Core Organizing Team for the state-level youth fest hosted by DAVV.",
        "Contributed to planning, logistics, and event execution, coordinating with multiple colleges across the state.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Work <span className="text-purple-600">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey, leadership roles, and team experiences.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-purple-200 dark:bg-purple-900 transform md:translate-x-[-50%] hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:mb-8 ${
                index % 2 === 0 ? "md:pr-12 md:ml-auto md:mr-[50%]" : "md:pl-12 md:mr-auto md:ml-[50%]"
              }`}
            >
              {/* Timeline dot */}
              <div
                className="hidden md:block absolute top-6 w-5 h-5 rounded-full bg-purple-600 border-4 border-white dark:border-gray-950 z-10 
                              left-[-10px] md:left-auto md:right-[-10px] md:translate-x-[0%]
                              ${index % 2 === 0 ? 'md:left-auto md:right-[-10px]' : 'md:right-auto md:left-[-10px]'}"
              ></div>

              <Card className="border-l-4 border-l-purple-600">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-4 text-purple-600 dark:text-purple-400">
                    <BriefcaseIcon className="h-4 w-4 mr-1" />
                    <span>{exp.role}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
                        <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 mr-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.achievements && exp.achievements.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                        <UsersIcon className="h-4 w-4 mr-1 text-purple-600" />
                        Achievements
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-600 dark:text-gray-400 text-sm flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-1.5 mr-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
