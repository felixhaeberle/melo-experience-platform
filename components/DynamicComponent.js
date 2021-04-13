import dynamic from 'next/dynamic'

export default function DynamicComponent(componentURL) {
  const Component = dynamic(() => import(`${componentURL}`), { ssr: false })
  
  return (
    <Component />
  )
}