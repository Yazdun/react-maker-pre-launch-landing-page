import { Card } from '../../components'
import { data } from './data'

export const Pricing = () => {
  return (
    <section className="container p-5 m-auto my-20 space-y-10 md:space-y-20">
      <div className="space-y-8 text-center md:max-w-[32.563rem] m-auto">
        <h2 className="text-3xl font-bold">Our pricing plans</h2>
        <p className="text-gray">
          We only make money when our creators make money. Our plans are always
          affordable, and it’s completely free to get started.
        </p>
      </div>
      <ul className="flex flex-col gap-20 md:gap-10 md:flex-row">
        {data.map(item => {
          return <Card key={item.title} info={item} />
        })}
      </ul>
    </section>
  )
}
