"use client";

import Image from "next/image";
import { useState } from "react";
import { currentUser, mockTweets } from "@/app/lib/mockData";

function formatTime(date: Date): string {
  const diff = Math.floor((Date.now() - date.getTime()) / 1000);
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
  return `${Math.floor(diff / 86400)}d`;
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0F2F5]">
      <header className="sticky top-0 z-10 bg-contained shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
          <Image src="/uchile/uchile-logo.svg" alt="Universidad de Chile" width={150} height={50} />
          <div className="flex items-center gap-1.5" aria-label={`Usuario: ${currentUser.name}`}>
            <Image src="/uchile/user-icon.svg" alt="" width={20} height={20} className="p-0.5" />
            <p className="text-sm text-white">{currentUser.name}</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-5xl mx-auto flex items-center justify-end px-6 py-2">
            <div className="flex items-center gap-2 text-xs text-white/70 select-none">
              Modo Oscuro
              <button
                type="button"
                role="switch"
                aria-checked={darkMode}
                aria-label="Modo Oscuro"
                onClick={() => setDarkMode((v) => !v)}
                className={`inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors cursor-pointer ${darkMode ? "bg-primary" : "bg-[#CFD9DE]"}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${darkMode ? "translate-x-[18px]" : "translate-x-0.5"}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-8">
        <Image src="/uchile/facultad.svg" alt="" width={160} height={46} className="mx-auto mb-4 opacity-90" />
        <div className="flex items-center justify-between gap-6">
          <p className="text-muted text-lg max-w-md">
            Tu universidad en tiempo real. Diseñado con precisión, construido con velocidad.
          </p>
          <div className="flex flex-col gap-2 shrink-0">
            <a
              href="#"
              className="px-6 py-2 bg-primary text-white font-medium uppercase tracking-wide text-sm rounded shadow-sm hover:shadow-md hover:bg-primary-dark transition-all text-center"
            >
              Ver Publicaciones
            </a>
            <a
              href="#"
              className="px-6 py-2 border border-primary text-primary font-medium uppercase tracking-wide text-sm rounded hover:bg-primary/10 transition-colors text-center"
            >
              Crear Publicación
            </a>
          </div>
        </div>
      </main>

      <section className="max-w-2xl mx-auto px-6 pb-16">
        <h3 className="font-bold text-xl text-[#0F1419] mb-3">Publicaciones recientes</h3>
        <div className="space-y-2">
          {mockTweets.map((tweet) => (
            <article key={tweet.id} className="flex gap-3 p-4 bg-white shadow-sm hover:shadow-md rounded-lg transition-shadow">
              <Image
                src={tweet.author.avatar}
                alt={tweet.author.name}
                width={40}
                height={40}
                className="rounded-full shrink-0"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-1 flex-wrap text-[15px]">
                  <span className="font-bold text-[#0F1419]">{tweet.author.name}</span>
                  <span className="text-muted">@{tweet.author.username}</span>
                  <span className="text-muted">·</span>
                  <span className="text-muted">{formatTime(tweet.timestamp)}</span>
                </div>
                <p className="mt-1 text-[15px] text-[#0F1419] whitespace-pre-wrap">{tweet.content}</p>
                <div className="flex gap-6 mt-3 text-muted text-sm">
                  <span>💬 {tweet.replies}</span>
                  <span>🔁 {tweet.retweets}</span>
                  <span>❤️ {tweet.likes}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="bg-contained text-white">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center">
          <p className="font-medium mb-4">En caso de dudas, comunícate con nuestra Mesa de Ayuda</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <Image src="/uchile/web-icon-white.svg" alt="" width={18} height={18} />
              www.mesadeayuda.uchile.cl
            </span>
            <span className="flex items-center gap-2">
              <Image src="/uchile/mesadeayuda-icon-white.svg" alt="" width={18} height={18} />
              mesadeayuda.uchile.cl
            </span>
            <span className="flex items-center gap-2">
              <Image src="/uchile/telefono-icon-white.svg" alt="" width={18} height={18} />
              +56 2 29780911
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
