import Footer from './Footer';
import Header from './Header';
import Sale from './Sale';
import Products from './Prouducts';
import './Root.css'

export default function Root() {

  return (
    <div className='root'>
      <Header />
      <main>
        <Sale />
        <Products />
      </main>
      <Footer />
    </div>
  )
}
