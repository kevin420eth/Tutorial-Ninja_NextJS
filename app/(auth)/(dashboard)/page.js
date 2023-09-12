import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>Hello</p>

      <div className="flex justify-center my-8">
        <Link href='/tickets'>
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>
      <div className="card">
        <h1>New member of the web dev team...</h1>
        <p>Lorem ipsum dolor</p>
      </div>
      <div className="card">
        <h1>New website live</h1>
        <p>Lorem ipsum dolor</p>
      </div>
    </main>
  )
}
