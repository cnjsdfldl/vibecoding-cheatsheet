import Intro from './sections/00-intro'
import AIFundamentals from './sections/01-ai-fundamentals'
import PromptEngineering from './sections/02-prompt-engineering'
import Vibe101 from './sections/03-vibe-101'
import Workflows from './sections/04-workflows'
import Tips from './sections/05-tips'
import AntiPatterns from './sections/06-anti-patterns'
import QuickRef from './sections/07-quick-ref'
import Glossary from './sections/08-glossary'
import LearningPath from './sections/09-learning-path'
import Resources from './sections/10-resources'

export default function Sections() {
  return (
    <>
      <Intro />
      <AIFundamentals />
      <PromptEngineering />
      <Vibe101 />
      <Workflows />
      <Tips />
      <AntiPatterns />
      <QuickRef />
      <Glossary />
      <LearningPath />
      <Resources />
    </>
  )
}
