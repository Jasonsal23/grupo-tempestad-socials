import React from "react";
import { Icon } from "@iconify/react";

const tiktok = "https://www.tiktok.com/@grupotempestad";
const instagram = "https://www.instagram.com/tempestad_oficial_";
const facebook = "https://www.facebook.com/GrupoTempestadLV/?locale=es_LA";
const youtube = "https://www.youtube.com/watch?v=gBCjO9BkctA";
const whatsapp = "https://api.whatsapp.com/send?phone=7022095174";

export default function Socials() {
  const openLinkInNewTab = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="Socials">
      <span className="social-heading">Para contrataciones, contáctanos</span>
      <div className="Icons" onClick={() => openLinkInNewTab(whatsapp)}>
        <Icon icon="logos:whatsapp-icon" />
        <div className="whatsapp">
          <span className="icon-label">WhatsApp</span>
          <span className="whatsapp-number">(702) 209-5174</span>
        </div>
      </div>
      <span className="social-heading">Síguenos en nuestras redes sociales</span>
      <div className="Icons" onClick={() => openLinkInNewTab(tiktok)}>
        <Icon icon="logos:tiktok-icon" />
        <span className="icon-label">TikTok</span>
      </div>
      <div className="Icons" onClick={() => openLinkInNewTab(instagram)}>
        <Icon icon="skill-icons:instagram" />
        <span className="icon-label">Instagram</span>
      </div>
      <div className="Icons" onClick={() => openLinkInNewTab(facebook)}>
        <Icon icon="logos:facebook" />
        <span className="icon-label">Facebook</span>
      </div>
      <div className="Icons" onClick={() => openLinkInNewTab(youtube)}>
        <Icon icon="logos:youtube-icon" />
        <span className="icon-label">YouTube</span>
      </div>
    </div>
  );
}
