import { useEffect, useState } from "react"
import { api } from "../../packages/api.service"


export default function HomePage() {

    const [bot, setBot] = useState(JSON.stringify({}))

    useEffect(() => {

        const fetchData = async () => {

            const response = await api.getBot()

            console.log(response.data)
            
            setBot(
                JSON.stringify( response.data )
            )
        
        }

        fetchData()

    })

    return (
        <div className="text-6xl text-black">
            HomePage

            <p>
                {  
                    bot
                }
            </p>

        </div>
    )

}