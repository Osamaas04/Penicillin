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
                Antibiotics: Discovery, Benefits, and Misuse
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Presented by <strong>Mohammad Asri Dwekat</strong> | Al-Balqa
                Applied University | Engineering Technology College
              </p>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="flex gap-2 mb-6">
          {["overview", "charts", "tables", "about"].map((t) => (
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
                Before antibiotics were discovered, even small cuts, sore
                throats, or pneumonia could lead to serious infections and death.
                Hospitals were full of patients with untreatable bacterial
                diseases. Many died from infections that today would be easily
                cured.
              </p>

              <p className="mb-4 text-gray-700">
                In 1928, Alexander Fleming accidentally discovered penicillin in
                his London laboratory. He noticed that a mold called{" "}
                <em>Penicillium</em> had killed the bacteria on a culture plate
                he had forgotten to clean. This discovery changed medicine
                forever and saved millions of lives during World War II and
                beyond.
              </p>

              <p className="mb-4 text-gray-700">
                However, in recent decades, antibiotics have been used too much
                and often in the wrong way. Many people take antibiotics when
                they are not needed, such as for viral infections like the flu.
                In some cases, people stop treatment too early or use leftover
                drugs. This misuse has led bacteria to evolve resistance, making
                infections harder to treat again.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 border rounded">
                  <h3 className="font-medium mb-2 text-green-700">
                    Quick Facts
                  </h3>
                  <ul className="text-sm text-gray-700 list-disc list-inside">
                    <li>Penicillin discovered in 1928 by Alexander Fleming</li>
                    <li>Mass production began in the 1940s</li>
                    <li>
                      Overuse of antibiotics now threatens to reverse medical
                      progress
                    </li>
                    <li>
                      WHO warns antibiotic resistance is one of the biggest
                      health threats
                    </li>
                  </ul>
                </div>

                <div className="p-4 border rounded">
                  <h3 className="font-medium mb-2 text-green-700">
                    Why It Matters
                  </h3>
                  <p className="text-sm text-gray-800 mb-2">
                    Without effective antibiotics, surgeries, childbirth, and
                    common infections could once again become dangerous.
                  </p>
                  <p className="text-sm text-gray-800">
                    Understanding and preventing antibiotic misuse helps protect
                    this life-saving medicine for the future.
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
                  <h3 className="font-medium mb-2">
                    Bacterial Resistance Rate (%)
                  </h3>
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
                  <h3 className="font-medium mb-2">
                    Sources of Antibiotic Misuse
                  </h3>
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
                            <Cell
                              key={index}
                              fill={COLORS[index % COLORS.length]}
                            />
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
                      <th className="border-b p-2">Antibiotic Use (Index)</th>
                      <th className="border-b p-2">
                        Resistance Rate (% of bacteria)
                      </th>
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

          {tab === "about" && (
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-green-700">
                About & Sources
              </h2>
              <p className="text-gray-700 text-sm mb-3">
                This project was created by students of the{" "}
                <strong>Engineering Technology College</strong> at{" "}
                <strong>Al-Balqa Applied University</strong>. It explains the
                history of antibiotics, their life-saving impact, and the danger
                of misuse.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>
                  WHO Fact Sheet on Antimicrobial Resistance —{" "}
                  <a
                    href="https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance"
                    target="_blank"
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
                    className="text-green-700 underline"
                  >
                    cdc.gov
                  </a>
                </li>
                <li>
                  Global antibiotic consumption trends —{" "}
                  <a
                    href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12121568/"
                    target="_blank"
                    className="text-green-700 underline"
                  >
                    PMC Research Paper
                  </a>
                </li>
              </ul>
            </section>
          )}
        </main>

        <footer className="mt-6 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Al-Balqa Applied University | Engineering
          Technology College
        </footer>
      </div>
    </div>
  );
}
