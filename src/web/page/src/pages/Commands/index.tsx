import { useState } from "react"


export default function CommandsPages() {

    const [ commmands, setCommands ] = useState({})

    return (
        <>

            <main>

                {
                    JSON.stringify(
                        commmands
                    )
                }

            </main>

        </>
    )

}
