import { Card } from '../../components'
import { data } from './data'

export const Pricing = () => {
  return (
    <section className="container p-8 m-auto my-20 space-y-10">
      <div className="space-y-8 text-center">
        <h2 className="text-3xl font-bold">Our pricing plans</h2>
        <p className="text-gray">
          We only make money when our creators make money. Our plans are always
          affordable, and it’s completely free to get started.
        </p>
      </div>
      <ul>
        {data.map(item => {
          return <Card key={item.title} info={item} />
        })}
      </ul>
    </section>
  )
}
