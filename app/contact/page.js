import React from 'react'

export default function Contact() {
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg mb-8">We'd love to hear from you! Please feel free to contact us with any questions or comments.</p>
            <div className="flex flex-col md:flex-row md:space-x-8">
                <div className="mb-8 md:mb-0">
                    <h2 className="text-2xl font-bold mb-4">Address</h2>
                    <p className="text-lg">
                        Sector - 65, Phase 11, SAS Nagar<br />
                            Mohali, Pubjab
                    </p>
                </div>
                <div className="mb-8 md:mb-0">
                    <h2 className="text-2xl font-bold mb-4">Phone</h2>
                    <p className="text-lg">
                        +91 9814753106
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Email</h2>
                    <p className="text-lg">
                        <a href="mailto:contact@example.com">mouliksharma699@gmail.com</a>
                    </p>
                </div>
            </div>
        </main>
    )
}