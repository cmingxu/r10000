import Link from 'next/link'

export const Nav = () => {
  return (
    <nav className='bg-slate-500 text-white font-bold p-2 h-full fixed top-0 right-0'>
      <ul>
        <li>
          <Link href="/">
            打分
          </Link>
        </li>
        <li>
          <Link href="/new">
            新评比活动
          </Link>
        </li>

        <li>
          <Link href="/result">
            评比结果
          </Link>
        </li>
      </ul>
    </nav>
  )
}
