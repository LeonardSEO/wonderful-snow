import React, { useState } from 'react';

const StepCard = ({ emoji, title, description, substeps }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 mb-6 transition-all duration-300 hover:shadow-xl">
    <div className="flex items-center mb-4">
      <span className="text-4xl mr-4">{emoji}</span>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="list-disc pl-5 space-y-2">
      {substeps.map((step, index) => (
        <li key={index} className="text-sm text-gray-700">{step}</li>
      ))}
    </ul>
  </div>
);

const RecommendationSection = ({ title, steps, gradientClass }) => (
  <div className={`p-8 rounded-lg shadow-2xl mb-12 ${gradientClass}`}>
    <h2 className="text-3xl font-bold mb-6 text-white text-center">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {steps.map((step, index) => (
        <StepCard key={index} {...step} />
      ))}
    </div>
  </div>
);

const VisualAIRecommendations = () => {
  const [activeTab, setActiveTab] = useState('automate');

  const automationSteps = [
    {
      emoji: "📋",
      title: "1. Inventariseer",
      description: "Maak een lijst van te automatiseren processen.",
      substeps: [
        "Identificeer dagelijkse, wekelijkse en maandelijkse taken",
        "Focus op processen zoals data-analyse en rapportages",
        "Betrek teamleden bij het identificeren van taken"
      ]
    },
    {
      emoji: "🤖",
      title: "2. Creëer GPT's",
      description: "Ontwikkel aangepaste GPT's voor elk proces.",
      substeps: [
        "Analyseer processen en bepaal AI-functionaliteiten",
        "Creëer GPT's met specifieke instructies",
        "Test elke GPT grondig met verschillende scenario's"
      ]
    },
    {
      emoji: "⚙️",
      title: "3. Implementeer Workflow",
      description: "Zet een gestroomlijnd proces op met de @-functie.",
      substeps: [
        "Begin met de eerste GPT in je workflow",
        "Gebruik @-functie om naar volgende GPT te schakelen",
        "Documenteer de stappen voor teamgebruik"
      ]
    },
    {
      emoji: "📈",
      title: "4. Optimaliseer",
      description: "Verbeter processen op basis van feedback en resultaten.",
      substeps: [
        "Verzamel feedback van teamleden",
        "Analyseer output en efficiëntie",
        "Pas GPT's en workflows aan voor betere prestaties"
      ]
    }
  ];

  const llmSteps = [
    {
      emoji: "🔍",
      title: "1. Perplexity Research",
      description: "Gebruik Perplexity AI voor diepgaande research.",
      substeps: [
        "Start onderzoek met Perplexity voor feitelijke info",
        "Pas prompttechnieken toe voor gedetailleerde resultaten",
        "Vergelijk resultaten met andere bronnen"
      ]
    },
    {
      emoji: "✍️",
      title: "2. Claude voor Content",
      description: "Benut Claude's capaciteiten voor contentgeneratie.",
      substeps: [
        "Gebruik voor hoogwaardige, originele content",
        "Integreer Perplexity-inzichten in Claude-prompts",
        "Benut Claude's analytische vaardigheden"
      ]
    },
    {
      emoji: "🔗",
      title: "3. Interne Linking",
      description: "Optimaliseer interne linking met AI en sitemapgegevens.",
      substeps: [
        "Gebruik 'Sitemap to Clipboard' Chrome-extensie",
        "Voer links en richtlijnen in Claude in",
        "Genereer suggesties voor natuurlijke linkplaatsing"
      ]
    },
    {
      emoji: "🔄",
      title: "4. Integreer & Optimaliseer",
      description: "Combineer LLM's voor optimale resultaten.",
      substeps: [
        "Gebruik Perplexity voor initiële research",
        "Verwerk info met Claude voor analyse en content",
        "Evalueer en pas workflow regelmatig aan"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">AI Aanbevelingen voor Teamoptimalisatie</h1>
      
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setActiveTab('automate')}
          className={`px-6 py-2 rounded-l-lg ${activeTab === 'automate' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Automatiseren met GPT's
        </button>
        <button
          onClick={() => setActiveTab('llm')}
          className={`px-6 py-2 rounded-r-lg ${activeTab === 'llm' ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
        >
          Gebruik van LLM's
        </button>
      </div>

      {activeTab === 'automate' && (
        <RecommendationSection
          title="Processen Automatiseren met GPT's"
          steps={automationSteps}
          gradientClass="bg-gradient-to-br from-blue-500 to-purple-600"
        />
      )}

      {activeTab === 'llm' && (
        <RecommendationSection
          title="Gebruik van Andere LLM's"
          steps={llmSteps}
          gradientClass="bg-gradient-to-br from-green-500 to-teal-600"
        />
      )}
    </div>
  );
};

export default VisualAIRecommendations;