import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Nav } from "@/components/nav"

const teachers = [
  {
    name: "张三",
    school: "清华大学",
    age: "32",
    description: "清华大学数学老师",
    likeCnt: 100,
    dislikeCnt: 20,
  },
  {
    name: "张三",
    school: "清华大学",
    age: "41",
    description: "清华大学数学老师",
    likeCnt: 100,
    dislikeCnt: 20,
  },
  {
    name: "张三",
    school: "清华大学",
    age: "41",
    description: "清华大学数学老师",
    likeCnt: 100,
    dislikeCnt: 20,
  },
  {
    name: "张三",
    school: "清华大学",
    age: "41",
    description: "清华大学数学老师",
    likeCnt: 100,
    dislikeCnt: 20,
  },
  {
    name: "张三",
    school: "清华大学",
    age: "41",
    description: "清华大学数学老师",
    likeCnt: 100,
    dislikeCnt: 20,
  },
]

export default function ResultPage() {
  return (
    <div className="flex items-center justify-center space-y-6 min-h-screen p-1 font-[family-name:var(--font-geist-sans)] lg:mt-4">
    <Table className='max-w-[600px] mx-auto'>
      <TableCaption>教师评选结果汇总.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">姓名</TableHead>
          <TableHead>学校</TableHead>
          <TableHead>教龄</TableHead>
          <TableHead>简介</TableHead>
          <TableHead className="text-right">结果</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {teachers.map((th) => (
          <TableRow key={th.name}>
            <TableCell className="font-medium">{th.name}</TableCell>
            <TableCell>{th.school}</TableCell>
            <TableCell className='font-bold'>{th.age}</TableCell>
            <TableCell>{th.description}</TableCell>
            <TableCell className="flex flex-row p-0 h-16 justify-end">
              <div className="flex items-center text-lg p-2 font-bold -skew-x-6 text-white bg-green-500">{th.likeCnt}</div>
              <div className="flex items-center text-lg p-2 font-bold -skew-x-6 text-white bg-red-500">{th.dislikeCnt}</div>
          </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
        </TableRow>
      </TableFooter>
    </Table>

    <Nav />
  </div>
  )

}

