import React from "react";
import { motion } from "framer-motion";

import discordIcon from "../assets/discord.png";
import githubIcon from "../assets/GithubLogo.png";
import gmailIcon from "../assets/gmail.png";
import linkedinIcon from "../assets/linkedin.png";
import instagramIcon from "../assets/instagram.png";

const contacts = [
  {
    name: "Discord",
    icon: discordIcon,
    url: "https://discord.com/channels/1082344415709909143",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    url: "https://github.com/ezequiel9git",
  },
  {
    name: "Gmail",
    icon: gmailIcon,
    url: "mailto:ezequielparradolopez@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: linkedinIcon,
    url: "https://www.linkedin.com/in/ezequiel-parrado-l%C3%B3pez/",
  },
  {
    name: "Instagram",
    icon: instagramIcon,
    url: "https://www.instagram.com/ezequielparrado/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-12">Contacto</h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 place-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={contact.icon}
                alt={contact.name}
                className="w-14 h-14 sm:w-16 sm:h-16 mb-2 grayscale group-hover:grayscale-0 transition duration-300"
              />
              <span className="text-sm text-gray-300 group-hover:text-white">
                {contact.name}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
