import React from 'react'
import '@styles/globals.css'

export const metadata = {
    title: "Promptify",
    description: "Discorver and Share AI Prompts"
}

const RootLayout = () => {
    return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className='gradient' />
                </div>

                <main className='app'>
                    {childrem}
                </main>
            </body>
        </html>
    )
}

export default RootLayout

