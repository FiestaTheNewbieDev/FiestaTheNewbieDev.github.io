import React from "react";
import TechnologyCard from "./components/TechnologyCard";
import LanguageCard from "./components/LanguageCard";
import ContactForm from "./components/ContactForm";
import ITechnology from "./interfaces/ITechnology";
import ILanguage from "./interfaces/ILanguage";
import IStudy from "./interfaces/IStudy";
import techData from "./data/technologies.json";
import languagesData from "./data/languages.json";
import studyData from "./data/studies.json";
import StudyCard from "./components/StudyCard";

export default function App() {
  const [technologies, setTechnologies] = React.useState<ITechnology[]>([]);
  const [languages, setLanguages] = React.useState<ILanguage[]>([]);
  const [studies, setStudies] = React.useState<IStudy[]>([]);

  React.useEffect(() => {
    setTechnologies(techData.sort((a, b) => b.mastery - a.mastery));
    setLanguages(languagesData.sort((a, b) => b.mastery - a.mastery));
    setStudies(studyData.sort((a, b) => b.endYear - a.endYear));
  }, []);

  return (
    <React.StrictMode>
      <header className="h-screen flex items-center justify-center px-[10%] md:px-[25%]">
        <div className="text-white text-center w-full">
          <h1 className="text-4xl font-semibold">Clément Fossorier</h1>
          <hr className="my-4" />
          <h2 className="text-2xl font-light">Étudiant en informatique</h2>
        </div>
      </header>
      <main className="bg-white max-w-screen-2xl mx-auto px-[10%] 2xl:rounded-t-md">
        <section className="pt-[5%] pb-[2.5%]">
          <h3>Profil</h3>
          <p className="text-center text-lg text-gray-500">
            Jeune étudiant en informatique et apprenti développeur.
          </p>
          <hr />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <div className="order-2 md:order-1">
              <h4>À mon propos</h4>
              <p className="text-gray-500 my-4">
                Je me nomme Clément Fossorier et je suis Étudiant en
                informatique ainsi qu'apprenti développeur! Je suis actuellement
                étudiant en année préparatoire à l’École des Technologies
                Numériques Avancées (ETNA) afin d’obtenir un diplôme de chargé
                de projets informatiques. Étant passionné par l'informatique et
                plus particulièrement le développement, j'ai appris à maîtriser
                les bases de plusieurs langages informatiques, parmis ceux-ci
                Java, PHP, HTML/CSS, Python et bien d'autres! Je vous invite
                d'ailleurs à visiter cette page pour en apprendre plus sur moi
                et connâitre l'ensemble de mes compétences.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                className="w-[65%] md:w-[75%] picture"
                alt="Clément Fossorier"
              />
            </div>
            <div className="order-3">
              <h4>Informations</h4>
              <p className="my-4">
                <span className="font-semibold">Nom:</span>
                <br />
                <span className="text-gray-500">Clément Fossorier</span>
              </p>
              <p className="my-4">
                <span className="font-semibold">Âge:</span>
                <br />
                <span className="text-gray-500">20 ans</span>
              </p>
              <p className="my-4">
                <span className="font-semibold">Localisation:</span>
                <br />
                <span className="text-gray-500">Région parisienne, France</span>
              </p>
            </div>
          </div>
        </section>

        <section className="py-[2.5%]">
          <h3>Compétences</h3>
          <hr />
          <h4>Technologies</h4>
          <div className="flex flex-wrap justify-center gap-4 my-8">
            {technologies.map((technology, index) => (
              <TechnologyCard key={index} {...technology} />
            ))}
          </div>
          <h4>Langues</h4>
          <div className="flex flex-wrap justify-center gap-4 my-8">
            {languages.map((language, index) => (
              <LanguageCard key={index} {...language} />
            ))}
          </div>
        </section>

        <section className="py-[2.5%]">
          <h3>Formation</h3>
          <hr />
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {studies.map((study, index) => (
              <StudyCard key={index} {...study} />
            ))}
          </ol>
        </section>

        <section className="pt-[2.5%] pb-[5%]">
          <h3>Contact</h3>
          <hr />
          <ContactForm />
        </section>
      </main>
    </React.StrictMode>
  );
}
