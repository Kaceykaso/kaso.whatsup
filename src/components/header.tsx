import { useState } from 'react'
import '/src/css/header.css'
import '/src/css/modal.css'
import EventModal from './event-modal'

type Header = {

}

export function Header() {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const handleModalOpen = () => {
        setModalOpen(true);
    }
    const handleModalClose = () => {
        setModalOpen(false);
    }
    return (
        <header className="main message-list">
            <div className="message -left nes-balloon from-left">
                <h1 className="title">Whatcha doing, Kaso?</h1>
            </div>
            <div className="message -right nes-balloon from-right">
                <p>Check out when I have free time, and set up a meeting!</p>
            </div>
            <button className="nes-btn is-primary" title="Create a new event or meeting" onClick={handleModalOpen}>Create an Event</button>
            <EventModal
                hasCloseBtn={true}
                isOpen={isModalOpen}
                onClose={handleModalClose}>
                <p>Schedule</p>
                <form>
                    <input type="text" className="nes-input title" placeholder="Event Title" title="Event Title" />
                    <input type="text" className="nes-input name" placeholder="Your name" title="Your name" />
                    <input type="email" className="nes-input email" placeholder="Your email" title="Your email address" />
                    <input type="submit" title="Create Event" className="submit nes-btn is-primary" value="Create Event" />
                </form>
            </EventModal>
	    </header>
    )
}