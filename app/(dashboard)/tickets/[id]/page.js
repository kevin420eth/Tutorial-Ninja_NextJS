import React from 'react'
import { Suspense } from "react";
import Loading from '@/app/(dashboard)/loading'
import TicketDetails from './TicketDetails';

export async function generateMetadata({ params }) {
    const id = params.id
    const res = await fetch(`http://localhost:4000/tickets/${id}`)
    const ticket = await res.json()

    return {
        title: `Dojo Helpdesk | ${ticket.title}`
    }
}

export const dynamicParams = true

export async function generateStaticParams() {
    const res = await fetch('http://localhost:4000/tickets')

    const tickets = await res.json()

    return tickets.map((ticket) => {
        return (
            {
                id: ticket.id
            }
        )
    })
}


export default function Ticket({ params }) {
    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <Suspense fallback={<Loading />}>
                <TicketDetails ticket={params} />
            </Suspense>
        </main>
    )
}
