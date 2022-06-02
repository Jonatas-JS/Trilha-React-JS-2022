// JSX = JavaScript + XML
import {Post} from './Post'

export function App() {
  return (
    <div>
      <Post 
        author="Jonatas Fernandes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorem similique earum exercitationem amet facilis expedita, dolore officia repudiandae fugiat magnam nam eum adipisci, illum mollitia atque ex libero! Magnam."
      />
      <Post 
      author="Diego Fernandes"
      content="Um post muito legal."
      />
    </div>
  )
}
