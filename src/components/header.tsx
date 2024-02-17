type Header = {

}

export function Header() {
    return (
        <header className="main message-list">
            <div className="message -left nes-balloon from-left">
                <h1 className="title">Whatcha doing, Kaso?</h1>
            </div>
            <div className="message -right nes-balloon from-right">
                <p>Check out when I have free time, and set up a meeting!</p>
            </div>
            <button className="nes-btn is-primary" title="Create a new meeting or event">Create an Event</button>
	    </header>
    )
}