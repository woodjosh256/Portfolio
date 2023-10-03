export function Contact() {
    return (
        <div className="w-full p-4 pl-4 pr-4 md:pl-[16.6%] md:pr-[16.6%] lg:pl-[25%] lg:pr-[25%] flex-grow">
            <h3 className="text-4xl font-bold font-slab text-center mb-4">Email</h3>
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
                <button type="submit" className="border-solid border-2 text-xl font-bold border-dark-gray pt-1 pb-1 pl-4 pr-4 w-auto m-auto hover:bg-selective-yellow hover:border-black ">
                    Send
                </button>
            </form>
        </div>
    );
}
