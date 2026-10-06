import React from "react";
import { Icon } from "@iconify/react";

const tiktok = "https://www.tiktok.com/@grupotempestad";
const instagram = "https://www.instagram.com/tempestad_oficial_";
const facebook = "https://www.facebook.com/GrupoTempestadLV/?locale=es_LA";
const youtube = "https://www.youtube.com/watch?v=gBCjO9BkctA";
const whatsapp = "https://api.whatsapp.com/send?phone=7022095174";

export default function Socials() {
  return (
    <div className="Socials">
      <span className="social-heading">Para contrataciones, contáctanos</span>
      <a className="Icons" href={whatsapp} target="_blank" rel="noopener noreferrer">
        <Icon icon="logos:whatsapp-icon" />
        <div className="whatsapp">
          <span className="icon-label">WhatsApp</span>
          <span className="whatsapp-number">(702) 209-5174</span>
        </div>
      </a>
      <span className="social-heading">Síguenos en nuestras redes sociales</span>
      <a className="Icons" href={tiktok} target="_blank" rel="noopener noreferrer">
        <Icon icon="logos:tiktok-icon" />
        <span className="icon-label">TikTok</span>
      </a>
      <a className="Icons" href={instagram} target="_blank" rel="noopener noreferrer">
        <Icon icon="skill-icons:instagram" />
        <span className="icon-label">Instagram</span>
      </a>
      <a className="Icons" href={facebook} target="_blank" rel="noopener noreferrer">
        <Icon icon="logos:facebook" />
        <span className="icon-label">Facebook</span>
      </a>
      <a className="Icons" href={youtube} target="_blank" rel="noopener noreferrer">
        <Icon icon="logos:youtube-icon" />
        <span className="icon-label">YouTube</span>
      </a>
    </div>
  );
}
