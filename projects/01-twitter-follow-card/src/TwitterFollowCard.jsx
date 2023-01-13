export function TwitterFollowCard ({userName, name, isFollowing }) {
    return (
        <article className="tw-followCard">
        <header className="tw-followCard-header">
            <img 
            className="tw-followCard-avatar"
            alt="El avatar random 1" 
            src={'https://unavatar.io/${username}'} />
            <div className="tw-followCard-info">
                <strong className="tw-followCard-infoUserName">{name}</strong>
                <span className="tw-followCard-infoUserName">@{userName}</span>
            </div>
        </header>

        <aside>
            <button className="tw-followCard-button">
                Seguir
            </button>
        </aside>
    </article>
    )
}