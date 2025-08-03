import Image from "next/image"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"

export default function Suivis() {
  const blogPosts = [
    {
      id: 1,
      image: "/placeholder.svg?height=200&width=400",
      category: "ONLINE MARKETING",
      readTime: "16 MIN READ TIME",
      title: "Why no one has come up with the idea yet: The turbo trick with Google ads!",
      description:
        "Discover the secret turbo trick that takes your Google ads to the next level. Why no one has discovered it before and how you can use it to revolutionize your online marketing.",
      featured: true,
      overlayText: "100€ SO GÜNSTIG!",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=200&width=400",
      category: "ONLINE MARKETING",
      readTime: "4 MIN READ TIME",
      title: "Success with Webflow: relounge.club & marketer UX",
      description:
        "Find out how relounge.club overcame technical hurdles and generated more leads with Webflow & marketer UX.",
      featured: true,
      overlayText: "reLounge",
      subtitle: "Mehr Leads durch Webauftritt",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=200&width=400",
      category: "ONLINE MARKETING",
      readTime: "12 MIN READ TIME",
      title: "Expert explains: How much does advertising cost on Google? Sample calculation &...",
      description:
        "Learn from Google Ads expert Aleksey Rogalev how much advertising costs on Google. Get to know the important figures and calculate in 5 minutes whether it's worth it for you.",
      featured: true,
      overlayText: "GOOGLE ADS BUDGET",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=200&width=400",
      category: "SEO",
      readTime: "",
      title: "Search engine optimization: The complete guide of Goog...",
      description:
        "I'll clear up the most important SEO myths and show you what really works. Simple instructions for your website.",
      featured: false,
    },
  ]

  return (
    <div className="bg-[#f7f7f7] min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold text-[#000000]">Nous suivre</h1>
          <div className="flex gap-2">
            <Button className="rounded-full bg-[#ffffff] border-[#f2f2f2]">
              <ChevronLeft className="h-4 w-4 text-[#4d4d4d]" />
            </Button>
            <Button className="rounded-full bg-[#ffffff] border-[#f2f2f2]">
              <ChevronRight className="h-4 w-4 text-[#4d4d4d]" />
            </Button>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-[#ffffff] rounded-2xl overflow-hidden shadow-sm">
              {/* Featured Image */}
              <div className="relative h-48 overflow-hidden">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                {post.featured && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      {post.id === 1 && (
                        <div>
                          <div className="text-2xl font-bold mb-2">100€</div>
                          <div className="bg-red-600 px-3 py-1 rounded text-sm font-bold">SO GÜNSTIG!</div>
                        </div>
                      )}
                      {post.id === 2 && (
                        <div>
                          <div className="text-2xl font-bold mb-2">reLounge</div>
                          <div className="text-lg font-semibold">
                            Mehr Leads
                            <br />
                            durch Webauftritt
                          </div>
                        </div>
                      )}
                      {post.id === 3 && (
                        <div>
                          <div className="text-xl font-bold">GOOGLE ADS</div>
                          <div className="text-2xl font-bold text-yellow-400">BUDGET</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {post.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-600 text-white font-bold">UX</Badge>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary" className="bg-[#f2f2f2] text-[#4d4d4d] text-xs font-medium">
                    {post.category}
                  </Badge>
                  {post.readTime && <span className="text-xs text-[#4d4d4d] font-medium">{post.readTime}</span>}
                </div>

                <h3 className="text-lg font-bold text-[#000000] mb-3 line-clamp-2">{post.title}</h3>

                <p className="text-[#4d4d4d] text-sm mb-4 line-clamp-3">{post.description}</p>

                <Button
                  className="flex items-center gap-2 text-[#3884ff] text-sm font-medium hover:underline bg-transparent"
                >
                  Read more
                  <ArrowRight className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Button
            className="bg-[#ffffff] border-[#f2f2f2] text-[#4d4d4d] px-8 py-3 rounded-full hover:bg-[#f2f2f2]"
          >
            View all blog posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
