import { Suspense } from "react";
import Celebration from "./confetti";

const TABNEWS_URL = "https://www.tabnews.com.br";
const CONTENTS_API_URL =
  "https://www.tabnews.com.br/api/v1/contents?strategy=new&per_page=1";

export const dynamic = "force-dynamic";

async function getTotalContents() {
  try {
    const response = await fetch(CONTENTS_API_URL, {
      cache: "no-store",
      signal: AbortSignal.timeout(4000),
    });

    if (!response.ok) {
      return null;
    }

    const total = Number(response.headers.get("x-pagination-total-rows"));

    return Number.isFinite(total) ? total : null;
  } catch {
    return null;
  }
}

const numberFormatter = new Intl.NumberFormat("pt-BR");

function CounterValue({ value }) {
  return <strong className="counter-value">{value}</strong>;
}

async function TotalContents() {
  const totalContents = await getTotalContents();

  return (
    <CounterValue
      value={
        totalContents === null ? "—" : numberFormatter.format(totalContents)
      }
    />
  );
}

export default function Home() {
  return (
    <main>
      <Celebration />
      <section className="card">
        <p className="badge">🚧 Em construção</p>
        <h1>Em Construção</h1>
        <p className="message">
          Estamos neste momento reconstruindo o Tabnews, um lugar na internet
          para quem trabalha com tecnologia e precisa consumir conteúdos com
          valor concreto.
        </p>

        <div className="counter">
          <span className="counter-label">
            Conteúdos publicados no TabNews
          </span>
          <Suspense fallback={<CounterValue value="—" />}>
            <TotalContents />
          </Suspense>
        </div>

        <a
          className="cta"
          href={TABNEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitar o TabNews oficial
          <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}
