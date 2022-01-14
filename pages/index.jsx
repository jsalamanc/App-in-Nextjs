import { Container } from '../components/Container'
import  {ListData} from '../components/ListData.jsx'

export default function Home({data}) {

  return (
    <div lang='es'>
      <>
        <Container>
        <h1 className='font-bold text-blue-900 text-center capitalize text-2xl'>team of jsalamanc</h1>
        <section className='flex flex-wrap justify-center'>
          <ListData data={data} />
        </section>
        </Container>
      </>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch('https://reqres.in/api/users?page=2')
  const json = await res.json()
  return { data: json }
}
