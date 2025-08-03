import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function Question() {
  return (
    <div className="min-h-screen bg-[#ffffff] p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-[#eb462d] text-sm font-medium mb-4">Quelles sont nos compétences ?</p>
          <h1 className="text-[#000000] text-4xl font-bold">Je sais a quoi vous pensez</h1>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Left Card */}
          <Card className="bg-[#ffffff] border-0 shadow-none">
            <CardContent className="p-0">
              <div className="mb-6">
                <h2 className="text-[#000000] text-2xl font-bold mb-4 leading-tight">
                  Why no one has come up with the idea yet: The turbo trick with Google ads!
                </h2>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-[#ffffff] text-[#4d4d4d] border-[#4d4d4d] rounded-sm">
                    ONLINE MARKETING
                  </Badge>
                  <Badge className="bg-[#ffffff] text-[#4d4d4d] border-[#4d4d4d] rounded-sm">
                    ONLINE MARKETING
                  </Badge>
                  <Badge className="bg-[#ffffff] text-[#4d4d4d] border-[#4d4d4d] rounded-sm">
                    ONLINE MARKETING
                  </Badge>
                  <Badge className="bg-[#ffffff] text-[#4d4d4d] border-[#4d4d4d] rounded-sm">
                    ONLINE MARKETING
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top Right Card with Chart */}
          <Card className="bg-gray-200 rounded-3xl border-0 shadow-none overflow-hidden">
            <CardContent className="p-8 h-64 relative">
              <div className="absolute right-8 bottom-8">
                <div className="flex items-end gap-2">
                  <div className="w-8 h-16 bg-[#eb462d] rounded-sm transform rotate-12"></div>
                  <div className="w-8 h-20 bg-[#eb462d] rounded-sm transform rotate-12"></div>
                  <div className="w-8 h-24 bg-[#eb462d] rounded-sm transform rotate-12"></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Middle Left Card with Question Mark */}
          <Card className="bg-gray-200 rounded-3xl border-0 shadow-none overflow-hidden">
            <CardContent className="p-8 h-64 relative flex items-center justify-center">
              <div className="flex items-center gap-8">
                <div className="w-24 h-24 bg-[#eb462d] rounded-full flex items-center justify-center">
                  <span className="text-[#ffffff] text-4xl font-bold">?</span>
                </div>
                <div className="text-[#4d4d4d] text-2xl font-bold">
                  go <span className="text-[#eb462d]">digital</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Middle Right Card */}
          <Card className="bg-[#ffffff] border-0 shadow-none">
            <CardContent className="p-0">
              <div className="mb-6">
                <h2 className="text-[#000000] text-2xl font-bold mb-4 leading-tight underline">
                  Why no one has come up with the idea yet: The turbo trick with Google ads!
                </h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-[#ffffff] text-[#4d4d4d] border-[#4d4d4d] rounded-sm">
                    ONLINE MARKETING
                  </Badge>
                  <Badge className="bg-[#ffffff] text-[#4d4d4d] border-[#4d4d4d] rounded-sm">
                    ONLINE MARKETING
                  </Badge>
                  <Badge className="bg-[#ffffff] text-[#4d4d4d] border-[#4d4d4d] rounded-sm">
                    ONLINE MARKETING
                  </Badge>
                  <Badge className="bg-[#ffffff] text-[#4d4d4d] border-[#4d4d4d] rounded-sm">
                    ONLINE MARKETING
                  </Badge>
                </div>
                <p className="text-[#4d4d4d] text-sm">Discover the secret turbo trick</p>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Left Card */}
          <Card className="bg-[#ffffff] border-0 shadow-none">
            <CardContent className="p-0">
              <div className="mb-6">
                <h2 className="text-[#000000] text-2xl font-bold mb-4 leading-tight">
                  Why no one has come up with the idea yet: The turbo trick with Google ads!
                </h2>
                <p className="text-[#4d4d4d] text-sm mb-4">Discover the secret turbo trick</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-[#ffffff] text-[#4d4d4d] border-[#4d4d4d] rounded-sm">
                    ONLINE MARKETING
                  </Badge>
                  <Badge className="bg-[#ffffff] text-[#4d4d4d] border-[#4d4d4d] rounded-sm">
                    ONLINE MARKETING
                  </Badge>
                  <Badge className="bg-[#ffffff] text-[#4d4d4d] border-[#4d4d4d] rounded-sm">
                    ONLINE MARKETING
                  </Badge>
                  <Badge className="bg-[#ffffff] text-[#4d4d4d] border-[#4d4d4d] rounded-sm">
                    ONLINE MARKETING
                  </Badge>
                </div>
                <p className="text-[#4d4d4d] text-sm mt-4">Discover the secret turbo trick</p>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Right Card with Euro Symbol */}
          <Card className="bg-gray-200 rounded-3xl border-0 shadow-none overflow-hidden">
            <CardContent className="p-8 h-64 relative">
              <div className="absolute right-8 bottom-8">
                <div className="w-24 h-24 bg-[#eb462d] rounded-full flex items-center justify-center">
                  <span className="text-[#ffffff] text-3xl font-bold">€</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
