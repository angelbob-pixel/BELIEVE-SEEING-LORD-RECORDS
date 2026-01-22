import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, PlayCircle, Mail, Cross } from "lucide-react";

export default function MusicWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Believe Seeing Lord
        </motion.h1>
        <p className="max-w-xl text-gray-300 mb-8">
          Gospel trap beats inspired by God’s Word — created to remind the lost that grace is still available.
        </p>
        <Button className="rounded-2xl px-6 py-4 text-lg flex gap-2">
          <PlayCircle /> Listen Now
        </Button>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <motion.h2 className="text-3xl font-semibold mb-6">About the Vision</motion.h2>
        <p className="text-gray-300 leading-relaxed">
          Believe Seeing Lord is more than music — it’s a calling. Every beat starts with a title and is built
          to encourage people who feel distant from God, reminding them that it’s never too late to come back.
        </p>
      </section>

      {/* Music Section */}
      <section className="px-6 py-20 bg-zinc-900">
        <h2 className="text-3xl font-semibold text-center mb-12">Featured Beats</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Grace Still Knocking", "Faith Over Fear", "Prodigal Return"].map((track) => (
            <Card key={track} className="bg-black border-zinc-800 rounded-2xl shadow-lg">
              <CardContent className="p-6">
                <Music className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">{track}</h3>
                <Button variant="secondary" className="rounded-xl">Play</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="px-6 py-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Let’s Collaborate</h2>
        <p className="text-gray-300 mb-8">
          Looking for vocalists, creatives, and video directors who share the vision.
        </p>
        <Button className="rounded-2xl px-6 py-4 flex gap-2">
          <Mail /> Contact Me
        </Button>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 border-t border-zinc-800 text-center text-gray-500">
        © {new Date().getFullYear()} Believe Seeing Lord. All rights reserved.
      </footer>
    </div>
  );
}
