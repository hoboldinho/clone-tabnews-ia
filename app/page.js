const formas = [
  "DESMINERALIZA",
  "DESMINERALIZE",
  "DESMINERALIZEMOS",
  "DESMINERALIZAI",
  "DESMINERALIZEM",
];

export default function Home() {
  return (
    <main>
      <ul>
        {formas.map((forma) => (
          <li key={forma}>{forma}</li>
        ))}
      </ul>
    </main>
  );
}
