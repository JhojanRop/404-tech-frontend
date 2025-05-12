import { useRouter } from "next/navigation";

export default function IconButton({ icon, quantity, href }: { icon: React.ReactElement, quantity?: number, href?: string }) {
  const afterClassName = quantity ? "after:content-[attr(data-q)] after:w-5 after:h-5 after:absolute after:-top-2 after:-right-1 after:rounded-full after:bg-viridian-600 after:text-black after:text-sm after:flex after:justify-center after:items-center" : ""
  const router = useRouter()

  const routeChange = () => {
    if (href) {
      router.push(href)
    }
  }
  return (
    <button 
      onClick={routeChange} 
      data-q={quantity} 
      className={`w-10 h-10 rounded-full flex justify-center items-center border border-white relative cursor-pointer ${afterClassName}`}>
      {icon}
    </button>
  )
}