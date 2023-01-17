import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {

    return (
        <section className='App'>
        <TwitterFollowCard userName="midudev">
         Miguel Ángel Durán
        </TwitterFollowCard> 
       
        <TwitterFollowCard  userName="miriamgonp">
        Miriam González
        </TwitterFollowCard> 

        <TwitterFollowCard userName="MoureDev"> 
        Brais Moure
        </TwitterFollowCard> 

        <TwitterFollowCard userName="dawntraoz">
        Alba Silvente
        </TwitterFollowCard> 
       
        <TwitterFollowCard userName="baumannzone">
        Jorge Baumann
        </TwitterFollowCard> 
         
        </section>  
    )
}