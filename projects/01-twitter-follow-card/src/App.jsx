import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true,
    },
    {
      userName: 'miriamgonp',
      name: 'Miriam González',
      isFollowing: true
    },
    {
      userName: 'MoureDev',
      name: 'Brais Moure',
      isFollowing: false
    },
    {
      userName: 'dawntraoz',
      name: 'Alba Silvente',
      isFollowing: false
    },
    {
        userName: 'baumannzone',
        name: 'Jorge Baumann',
        isFollowing: true
      }
  ]

export function App () {
    return (
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) =>(
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                            </TwitterFollowCard>
                    ))
            }
             
        </section>  
    )
}