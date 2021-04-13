import dynamic from 'next/dynamic'

const Scroll = dynamic(() => import('./scroll'), { ssr: false })

export default function ScrollPage() {
  return ( 
    <Scroll />
  )
}