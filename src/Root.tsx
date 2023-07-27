import Footer from './Footer'
import Header from './Header'
import './Root.css'
import Sale from './Sale'

export default function Root() {

  return (
    <div className='root'>
      <Header />
      <main>
        <Sale />
      </main>
      <Footer />
    </div>
  )
}
