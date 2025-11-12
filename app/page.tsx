"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Example dataset (based on WHO, CDC global trends)
// antibiotic_use is an index with 2000 = 100 (shows relative change)
// resistance_rate is percent of sampled bacteria showing resistance
const misuseData = [
  { year: 2000, antibiotic_use: 100, resistance_rate: 10 },
  { year: 2005, antibiotic_use: 130, resistance_rate: 15 },
  { year: 2010, antibiotic_use: 160, resistance_rate: 22 },
  { year: 2015, antibiotic_use: 190, resistance_rate: 30 },
  { year: 2020, antibiotic_use: 230, resistance_rate: 40 },
  { year: 2024, antibiotic_use: 260, resistance_rate: 47 },
];

const misusePie = [
  { name: "Human misuse", value: 50 },
  { name: "Animal agriculture", value: 35 },
  { name: "Proper use", value: 15 },
];

const COLORS = ["#006B3F", "#C9A900", "#00C49F"];

export default function Home() {
  const [tab, setTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-6 flex flex-col md:flex-row items-center justify-between border-b pb-4">
          <div className="flex items-center gap-4">
            <Image
              src="/balqa-logo.png"
              alt="Al-Balqa Applied University Logo"
              width={80}
              height={80}
              className="rounded-md"
            />
            <div>
              <h1 className="text-3xl font-bold text-green-700">
                Antibiotics: Discovery, Benefits, Misuse, and Solutions
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Presented by <strong>Mohammad Asri Dwekat</strong> — Al-Balqa
                Applied University, Engineering Technology College
              </p>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="flex gap-2 mb-6">
          {["overview", "charts", "tables", "solutions", "about"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-lg font-medium capitalize transition-all ${
                tab === t
                  ? "bg-green-700 text-white shadow-sm"
                  : "bg-white text-green-700 border border-green-700 hover:bg-green-50"
              }`}
            >
              {t}
            </button>
          ))}
        </nav>

        {/* Main Content */}
        <main className="bg-white rounded-xl shadow-sm p-6">
          {tab === "overview" && (
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-green-700">
                Overview
              </h2>

              <p className="mb-4 text-gray-700">
                Before antibiotics were discovered, small cuts, sore throats, or
                pneumonia could lead to severe infections and death. Hospitals
                could only support patients while their body fought the
                infection. Many common procedures were risky because infections
                could not be treated.
              </p>

              <p className="mb-4 text-gray-700">
                In 1928, Alexander Fleming discovered penicillin by accident.
                He noticed a mold on a culture plate that had killed nearby
                bacteria. Later work by other scientists made penicillin into a
                medicine that could be produced and used widely. Antibiotics
                saved millions of lives.
              </p>

              <p className="mb-4 text-gray-700">
                Over time, antibiotics were used more and often in the wrong way.
                People take antibiotics for viral infections, stop treatment too
                early, or use leftover drugs. Farmers sometimes use antibiotics
                to make animals grow faster. These practices let bacteria
                develop resistance. Resistant infections are harder to treat and
                cause many deaths worldwide.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 border rounded">
                  <h3 className="font-medium mb-2 text-green-700">
                    Quick Facts
                  </h3>
                  <ul className="text-sm text-gray-700 list-disc list-inside">
                    <li>Penicillin discovered in 1928 by Alexander Fleming</li>
                    <li>Mass production began in the 1940s</li>
                    <li>Overuse of antibiotics now reduces their effectiveness</li>
                    <li>WHO lists antibiotic resistance as a top health threat</li>
                  </ul>
                </div>

                <div className="p-4 border rounded">
                  <h3 className="font-medium mb-2 text-green-700">
                    Why It Matters
                  </h3>
                  <p className="text-sm text-gray-800 mb-2">
                    Without effective antibiotics, surgeries, childbirth, and
                    common infections could become dangerous again.
                  </p>
                  <p className="text-sm text-gray-800">
                    Reducing misuse protects antibiotics for future patients.
                  </p>
                </div>
              </div>
            </section>
          )}

          {tab === "charts" && (
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-green-700">
                Charts
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Antibiotic Use Over Time */}
                <div className="p-4 border rounded">
                  <h3 className="font-medium mb-2">
                    Global Antibiotic Use (index scale)
                  </h3>
                  <p className="text-sm text-gray-700 mb-2">
                    The index sets the year 2000 equal to 100. A value of 260
                    means 2.6 times the baseline use in 2000.
                  </p>
                  <div className="mb-3 p-3 bg-gray-50 border rounded text-sm text-gray-700">
                    Index explanation: the numbers are relative. 2000 = 100. If
                    2024 = 260, global antibiotic use is about 2.6 times higher
                    than in 2000. This makes it easier to show change over time.
                  </div>
                  <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                      <LineChart data={misuseData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="antibiotic_use"
                          stroke="#006B3F"
                          strokeWidth={3}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Resistance Rates */}
                <div className="p-4 border rounded">
                  <h3 className="font-medium mb-2">Bacterial Resistance Rate (%)</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    This shows the share of bacteria samples that are resistant.
                    Higher percent means more resistance in samples.
                  </p>
                  <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                      <LineChart data={misuseData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="resistance_rate"
                          stroke="#C9A900"
                          strokeWidth={3}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Pie Chart */}
                <div className="p-4 border rounded col-span-full">
                  <h3 className="font-medium mb-2">Sources of Antibiotic Misuse</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    This chart shows common drivers of misuse worldwide.
                  </p>
                  <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                      <PieChart>
                        <Pie
                          data={misusePie}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={100}
                          label
                        >
                          {misusePie.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </section>
          )}

          {tab === "tables" && (
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-green-700">
                Data Table
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-green-700 text-white">
                      <th className="border-b p-2">Year</th>
                      <th className="border-b p-2">Antibiotic Use (index)</th>
                      <th className="border-b p-2">Resistance Rate (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {misuseData.map((r) => (
                      <tr key={r.year} className="odd:bg-gray-50">
                        <td className="p-2 border-b">{r.year}</td>
                        <td className="p-2 border-b">{r.antibiotic_use}</td>
                        <td className="p-2 border-b">{r.resistance_rate}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {tab === "solutions" && (
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-green-700">
                Solutions to Reduce Misuse
              </h2>

              <p className="mb-4 text-gray-700">
                Reducing misuse requires actions by health systems, doctors,
                pharmacists, farmers, governments, and the public. Here are key
                and proven approaches.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded">
                  <h3 className="font-medium mb-2 text-green-700">
                    1. Antibiotic Stewardship
                  </h3>
                  <p className="text-sm text-gray-800 mb-2">
                    Stewardship programs guide doctors to prescribe the right
                    antibiotic, dose, and duration. They monitor and improve
                    prescribing in hospitals and clinics.
                  </p>
                </div>

                <div className="p-4 border rounded">
                  <h3 className="font-medium mb-2 text-green-700">
                    2. Better Diagnostics
                  </h3>
                  <p className="text-sm text-gray-800 mb-2">
                    Quick tests help doctors know if an infection is bacterial
                    or viral. This prevents unnecessary antibiotic use.
                  </p>
                </div>

                <div className="p-4 border rounded">
                  <h3 className="font-medium mb-2 text-green-700">
                    3. Public Education
                  </h3>
                  <p className="text-sm text-gray-800 mb-2">
                    Teach people when antibiotics are needed, why they must finish
                    the course, and why not to use leftovers or share drugs.
                  </p>
                </div>

                <div className="p-4 border rounded">
                  <h3 className="font-medium mb-2 text-green-700">
                    4. Regulation and Access Control
                  </h3>
                  <p className="text-sm text-gray-800 mb-2">
                    Enforce prescription-only rules, control over-the-counter
                    sales, and regulate use in farming and aquaculture.
                  </p>
                </div>

                <div className="p-4 border rounded">
                  <h3 className="font-medium mb-2 text-green-700">
                    5. Surveillance and Data
                  </h3>
                  <p className="text-sm text-gray-800 mb-2">
                    Track antibiotic use and resistance patterns. Good data helps
                    target interventions and measure progress.
                  </p>
                </div>

                <div className="p-4 border rounded">
                  <h3 className="font-medium mb-2 text-green-700">
                    6. Alternatives in Agriculture
                  </h3>
                  <p className="text-sm text-gray-800 mb-2">
                    Use better hygiene, vaccines, and farming practices to reduce
                    the need for antibiotics in animals.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 border rounded bg-gray-50">
                <h3 className="font-medium mb-2 text-green-700">How to talk about solutions in your presentation</h3>
                <ul className="text-sm text-gray-700 list-disc list-inside">
                  <li>Explain one or two stewardship examples from hospitals.</li>
                  <li>Show how diagnostics reduce unnecessary prescriptions.</li>
                  <li>Mention policy steps like prescription control and farm rules.</li>
                </ul>
              </div>
            </section>
          )}

          {tab === "about" && (
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-green-700">
                About & Sources
              </h2>
              <p className="text-gray-700 text-sm mb-3">
                This project was created by students of the Engineering
                Technology College at Al-Balqa Applied University. It explains
                the history of antibiotics, their benefits, and the problem of
                misuse. It also lists common solutions.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>
                  WHO Fact Sheet on Antimicrobial Resistance —{" "}
                  <a
                    href="https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 underline"
                  >
                    who.int
                  </a>
                </li>
                <li>
                  CDC Antibiotic Use & Resistance Data —{" "}
                  <a
                    href="https://www.cdc.gov/antibiotic-use/data-research/facts-stats/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 underline"
                  >
                    cdc.gov
                  </a>
                </li>
                <li>
                  Global antibiotic consumption trends —{" "}
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8654683/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 underline"
                  >
                    PMC research
                  </a>
                </li>
              </ul>
            </section>
          )}
        </main>

        <footer className="mt-6 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Al-Balqa Applied University — Engineering
          Technology College
        </footer>
      </div>
    </div>
  );
}
