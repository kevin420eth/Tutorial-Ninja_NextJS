async function getTicket(id) {
    // imitate delay
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
      next: {
        revalidate: 60
      }
    })
  
    if (!res.ok) {
      notFound()
    }
  
    return res.json()
  }



export default async function TicketDetails(params) {
    const id = params.ticket.id
    const ticket = await getTicket(id)
    console.log(ticket)

    return (
        <>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </>
    )
}
