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

// Sample cleaned dataset (based on historical sources and simple interpolation)
const historicalData = [
  { year: 1900, pneumonia_per_100k: 200, bacterial_illness_per_100k: 250, life_expectancy: 47 },
  { year: 1910, pneumonia_per_100k: 184, bacterial_illness_per_100k: 240, life_expectancy: 48 },
  { year: 1920, pneumonia_per_100k: 210, bacterial_illness_per_100k: 235, life_expectancy: 49 },
  { year: 1930, pneumonia_per_100k: 190, bacterial_illness_per_100k: 220, life_expectancy: 51 },
  { year: 1940, pneumonia_per_100k: 170, bacterial_illness_per_100k: 180, life_expectancy: 53 },
  { year: 1945, pneumonia_per_100k: 120, bacterial_illness_per_100k: 120, life_expectancy: 55 },
  { year: 1950, pneumonia_per_100k: 40, bacterial_illness_per_100k: 60, life_expectancy: 63 },
  { year: 1960, pneumonia_per_100k: 20, bacterial_illness_per_100k: 30, life_expectancy: 67 },
];

const pieBeforeAfter = [
  { name: "Bacterial infections (before)", value: 40 },
  { name: "Other causes (before)", value: 60 },
  { name: "Bacterial infections (after)", value: 10 },
  { name: "Other causes (after)", value: 90 },
];

const COLORS = ["#006B3F", "#C9A900", "#00C49F", "#FFBB28"];

export default function Home() {
  const [tab, setTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6 flex flex-col md:flex-row items-center md:items-end justify-between border-b pb-4">
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
                Penicillin: Before and After
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Presented by <strong>Mohammad Asri Dwekat</strong> | Al-Balqa Applied University | Engineering Technology College
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

        {/* Main content */}
        <main className="bg-white rounded-xl shadow-sm p-6">
          {tab === "overview" && (
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-green-700">Overview</h2>
              <p className="mb-4 text-gray-700">
                Before antibiotics were discovered, many people died from bacterial infections like pneumonia,
                infected wounds, and blood infections. There were no medicines that could kill bacteria safely.
              </p>

              <p className="mb-4 text-gray-700">
                In 1928, a Scottish scientist named <strong>Alexander Fleming</strong> made an amazing discovery by accident.
                He was working at St. Mary’s Hospital in London with dishes that had bacteria growing on them.
                He went on vacation and forgot to clean one dish. When he came back, he saw that a green mold was
                growing on it, and the bacteria around the mold were gone. The mold was later named <em>Penicillium notatum</em>.
                Fleming found that this mold made a natural chemical that killed bacteria. He called it <strong>penicillin</strong>.
              </p>

              <p className="mb-4 text-gray-700">
                Fleming’s discovery was only the beginning. A few years later, during World War II,
                scientists named <strong>Howard Florey</strong> and <strong>Ernst Chain</strong> found a way to make penicillin in large amounts.
                It was then used to treat soldiers and civilians. Penicillin saved millions of lives and
                became known as the first true antibiotic. The charts below show how death rates from infections
                dropped after penicillin and other antibiotics were introduced.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded">
                  <h3 className="font-medium mb-2 text-green-700">Quick Facts</h3>
                  <ul className="text-sm text-gray-700 list-disc list-inside">
                    <li>Discovered: <strong>1928</strong> by Alexander Fleming</li>
                    <li>Widespread use: <strong>1940s</strong> during World War II</li>
                    <li>Pneumonia death rates dropped by over 80% by the 1950s</li>
                    <li>Other improvements: sanitation, vaccines, and hospitals</li>
                  </ul>
                </div>

                <div className="p-4 border rounded">
                  <h3 className="font-medium mb-2 text-green-700">Highlights</h3>
                  <p className="text-sm text-gray-800 mb-2">
                    Explore the charts and tables to see how penicillin changed health and life expectancy.
                  </p>
                  <p className="text-sm text-gray-800">
                    This data comes from historical CDC records and simple estimates for clarity.
                  </p>
                </div>
              </div>
            </section>
          )}

          {tab === "charts" && (
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-green-700">Charts</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Chart 1: Pneumonia */}
                <div className="p-4 border rounded">
                  <h3 className="font-medium mb-2">Pneumonia death rate (per 100k)</h3>
                  <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                      <LineChart data={historicalData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pneumonia_per_100k" stroke="#006B3F" strokeWidth={3} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Chart 2: Bacterial illness */}
                <div className="p-4 border rounded">
                  <h3 className="font-medium mb-2">Bacterial illness rate (per 100k)</h3>
                  <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                      <LineChart data={historicalData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="bacterial_illness_per_100k" stroke="#C9A900" strokeWidth={3} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Chart 3: Life expectancy */}
                <div className="p-4 border rounded">
                  <h3 className="font-medium mb-2">Life expectancy (years)</h3>
                  <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                      <BarChart data={historicalData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="life_expectancy" fill="#006B3F" barSize={20} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Chart 4: Before vs After */}
                <div className="p-4 border rounded">
                  <h3 className="font-medium mb-2">Simplified causes: before vs after</h3>
                  <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                      <PieChart>
                        <Pie
                          data={pieBeforeAfter.slice(0, 2)}
                          dataKey="value"
                          nameKey="name"
                          cx="25%"
                          cy="50%"
                          outerRadius={70}
                          label
                        >
                          {pieBeforeAfter.slice(0, 2).map((entry, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Pie
                          data={pieBeforeAfter.slice(2)}
                          dataKey="value"
                          nameKey="name"
                          cx="75%"
                          cy="50%"
                          outerRadius={70}
                          label
                        >
                          {pieBeforeAfter.slice(2).map((entry, index) => (
                            <Cell key={index} fill={COLORS[(index + 2) % COLORS.length]} />
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
              <h2 className="text-2xl font-semibold mb-4 text-green-700">Data Tables</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-green-700 text-white">
                      <th className="border-b p-2">Year</th>
                      <th className="border-b p-2">Pneumonia / 100k</th>
                      <th className="border-b p-2">Bacterial illness / 100k</th>
                      <th className="border-b p-2">Life expectancy (yrs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {historicalData.map((r) => (
                      <tr key={r.year} className="odd:bg-gray-50">
                        <td className="p-2 border-b">{r.year}</td>
                        <td className="p-2 border-b">{r.pneumonia_per_100k}</td>
                        <td className="p-2 border-b">{r.bacterial_illness_per_100k}</td>
                        <td className="p-2 border-b">{r.life_expectancy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {tab === "about" && (
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-green-700">About and Sources</h2>
              <p className="text-gray-700 text-sm mb-3">
                This website is a student project at the Engineering Technology College,
                Al-Balqa Applied University. It shows the effect of penicillin on public health.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                <li>CDC historical vital statistics (1900–1950)</li>
                <li>World War II medical research on antibiotics</li>
                <li>Public health and mortality archives</li>
              </ul>
            </section>
          )}
        </main>

        <footer className="mt-6 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Al-Balqa Applied University | Engineering Technology College
        </footer>
      </div>
    </div>
  );
}
