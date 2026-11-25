import Link from "next/link"
const Header = () => {
  return (
    <nav className="w-full flex justify-between p-4 align-middle">
      <Link href="/" className="flex items-center">
        <div className="">Yet Another To-do App</div>
      </Link>
    </nav>
  )
}

export default Header
