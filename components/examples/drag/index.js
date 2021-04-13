import dynamic from 'next/dynamic'

const Drag = dynamic(() => import('./drag'), { ssr: false })

export default function DragPage() {
  return (
    <Drag />
  )
}