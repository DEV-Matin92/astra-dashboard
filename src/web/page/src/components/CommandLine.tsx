
interface CommandLineComponentProps {
    commandName: string,
    commandDescription: string
}

export default function CommandLineComponent({ commandName, commandDescription }: CommandLineComponentProps) {

    return (
        <div className="w-full h-20 flex">
            
            <p> { commandName } </p>

            <p> { commandDescription } </p>
        
        </div>
    )

}
