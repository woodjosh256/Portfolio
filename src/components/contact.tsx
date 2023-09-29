export function Contact() {
    return (
        <div className="w-full bg-white shadow-lg rounded-lg p-4 mb-8">
            <h2 className="text-3xl font-sans font-bold text-center mb-2">Email me</h2>
            <form action="https://formspree.io/f/mknkkbql" method="POST" className="flex flex-col">
                <input
                    type="email"
                    name="_replyto"
                    placeholder="Your email"
                    className="border-solid border-2 border-dark-gray p-2 m-2 rounded-lg"
                    required
                />
                <input
                    type="text"
                    name="_subject"
                    placeholder="Subject"
                    className="border-solid border-2 border-dark-gray p-2 m-2 rounded-lg"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    className="border-solid border-2 border-dark-gray p-2 m-2 rounded-lg"
                    rows={5}
                    required
                ></textarea>
                <button type="submit" className="border-solid border-2 border-dark-gray pt-1 pb-1 pl-4 pr-4 w-auto m-auto hover:bg-selective-yellow hover:border-black ">
                    Send
                </button>
            </form>
        </div>
    );
}
