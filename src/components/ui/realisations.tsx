import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Award } from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#ffffff] p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#000000] mb-4">Nos realisations</h1>
          <p className="text-[#4d4d4d] text-lg mb-6">
            IOI vous accompagne avec des solutions digitales efficaces pour faire évoluer votre activité et fixer de
            nouveaux standards.
          </p>

          {/* Search Section */}
          {/* <div className="flex gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af] w-4 h-4" />
              <Input placeholder="Search service" className="pl-10 bg-[#ffffff] border-[#e5e7eb]" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-48 bg-[#ffffff] border-[#e5e7eb]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="websites">Websites</SelectItem>
                <SelectItem value="apps">Applications</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-[#e5e7eb] rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-6 right-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-yellow-700" />
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#000000] mb-4">
                Websites & Landing Pages
                <br />
                DEEDAEDAED
              </h3>
              <p className="text-[#4d4d4d] text-sm mb-6">
                A two-hour meeting is all it takes: We create professional texts, a flawless design and develop your
                site according to the latest technical standards.
              </p>
              <Button className="bg-[#3884ff] hover:bg-[#2563eb] text-white rounded-full px-6">Learn more →</Button>
            </div>
            <div className="mt-8">
              <Image
                src="/placeholder.svg?height=200&width=350"
                alt="Website mockups on devices"
                width={350}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#e5e7eb] rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-6 right-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-yellow-700" />
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#000000] mb-4">
                Websites & Landing Pages
                <br />
                DEEDAEDAED
              </h3>
              <p className="text-[#4d4d4d] text-sm mb-6">
                A two-hour meeting is all it takes: We create professional texts, a flawless design and develop your
                site according to the latest technical standards.
              </p>
              <Button className="bg-[#3884ff] hover:bg-[#2563eb] text-white rounded-full px-6">Learn more →</Button>
            </div>
            <div className="mt-8">
              <Image
                src="/placeholder.svg?height=200&width=350"
                alt="Website mockups on devices"
                width={350}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#e5e7eb] rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-6 right-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-yellow-700" />
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#000000] mb-4">
                Websites & Landing Pages
                <br />
                DEEDAEDAED
              </h3>
              <p className="text-[#4d4d4d] text-sm mb-6">
                A two-hour meeting is all it takes: We create professional texts, a flawless design and develop your
                site according to the latest technical standards.
              </p>
              <Button className="bg-[#3884ff] hover:bg-[#2563eb] text-white rounded-full px-6">Learn more →</Button>
            </div>
            <div className="mt-8">
              <Image
                src="/placeholder.svg?height=200&width=350"
                alt="Website mockups on devices"
                width={350}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#e5e7eb] rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-6 right-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-yellow-700" />
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#000000] mb-4">
                Websites & Landing Pages
                <br />
                DEEDAEDAED
              </h3>
              <p className="text-[#4d4d4d] text-sm mb-6">
                A two-hour meeting is all it takes: We create professional texts, a flawless design and develop your
                site according to the latest technical standards.
              </p>
              <Button className="bg-[#3884ff] hover:bg-[#2563eb] text-white rounded-full px-6">Learn more →</Button>
            </div>
            <div className="mt-8">
              <Image
                src="/placeholder.svg?height=200&width=350"
                alt="Website mockups on devices"
                width={350}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Single Card Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#e5e7eb] rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-6 right-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-yellow-700" />
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#000000] mb-4">
                Websites & Landing Pages
                <br />
                DEEDAEDAED
              </h3>
              <p className="text-[#4d4d4d] text-sm mb-6">
                A two-hour meeting is all it takes: We create professional texts, a flawless design and develop your
                site according to the latest technical standards.
              </p>
              <Button className="bg-[#3884ff] hover:bg-[#2563eb] text-white rounded-full px-6">Learn more →</Button>
            </div>
          </div>
          <div className="flex items-end">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Website mockups on devices"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Bottom Button */}
        <div className="text-center">
          <Button
            className="border-[#dbdbdb] text-[#4d4d4d] hover:bg-[#e5e7eb] rounded-full px-8 bg-transparent"
          >
            Voir plus de Service →
          </Button>
        </div>
      </div>
    </div>
  )
}
