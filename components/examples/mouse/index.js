import dynamic from 'next/dynamic'

const Mouse = dynamic(() => import('./mouse'), { ssr: false })

export default function MousePage() {
  return ( 
    <Mouse />
  )
}