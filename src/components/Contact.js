import { ValidationError } from "@formspree/react"
import { useForm } from "@formspree/react"

export function Contact({ theme }) {
    const [state, handleSubmit] = useForm('mdobrznk')

    if (state.succeeded) {
        return <p>Thanks for contacting me!</p>
    }
    return (
        <div className={theme ? 'dark' : ''} id="contact">
            <div className="h-screen flex items-center md:w-2/4 m-auto">
                <form
                    className="mx-6 border-2 border-links-dark dark:border-links-clear rounded-md w-full flex items-center flex-col justify-center gap-4 py-12 text-text-dark dark:text-text-clear"
                    onSubmit={handleSubmit}
                >
                    <div className="w-11/12 flex flex-col gap-2 text-sm md:text-lg">
                        <label htmlFor="name" className="font-bold animate-pulse">Name:</label>
                        <input
                            type="text"
                            placeholder="Name"
                            id="name"
                            name="name"
                            required
                            className="w-11/12 border-b-[1px] border-b-links-dark dark:border-links-clear m-auto bg-transparent leading-7"
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                    </div>
                    <div className="w-11/12 flex flex-col gap-2 text-sm md:text-lg">
                        <label htmlFor="email" className="font-bold animate-pulse">Email</label>
                        <input
                            placeholder='Email'
                            id="email"
                            type="email"
                            name="email"
                            required
                            className="w-11/12 border-b-[1px] border-b-links-dark dark:border-links-clear m-auto bg-transparent leading-7"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className="w-11/12 flex flex-col gap-2 text-sm md:text-lg">
                        <label htmlFor="message" className="font-bold animate-pulse">Inser Your Message</label>
                        <textarea
                            placeholder='Insert your message here'
                            id="message"
                            name="message"
                            cols="30"
                            rows="10"
                            className="w-11/12 border-b-[1px] border-b-links-dark dark:border-links-clear m-auto bg-transparent leading-7"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button type="submit" className="bg-links-dark dark:bg-links-clear px-6 py-1 rounded-2xl mt-3 text-bg-clear" disabled={state.submitting}>Submit</button>
                </form>
            </div>
        </div>
    )
}