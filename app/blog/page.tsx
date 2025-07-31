import { PageLayout } from "@/components/page-layout"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Navigating Identity Loss in Motherhood: Finding Yourself Again",
      excerpt:
        "Becoming a mother is one of life's most profound transformations. While it brings immense joy, it can also trigger an identity crisis that many women struggle with in silence.",
      image: "/placeholder.svg?height=200&width=300",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Motherhood",
      slug: "navigating-identity-loss-motherhood",
    },
    {
      title: "The Quarter-Life Crisis: When Success Feels Empty",
      excerpt:
        "You've checked all the boxes—good job, nice apartment, social life—yet something feels missing. If you're feeling lost despite external success, you're not alone.",
      image: "/placeholder.svg?height=200&width=300",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Identity Crisis",
      slug: "quarter-life-crisis-success-feels-empty",
    },
    {
      title: "Starting Over in a New Country: The Expat Woman's Journey",
      excerpt:
        "Moving to a new country as a woman brings unique challenges. From rebuilding your identity to finding your tribe, here's how to thrive in your new home.",
      image: "/placeholder.svg?height=200&width=300",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Relocation",
      slug: "starting-over-new-country-expat-journey",
    },
    {
      title: "Empty Nest, Full Heart: Rediscovering Yourself After Kids Leave",
      excerpt:
        "When your children leave home, it's natural to feel lost. But this transition also offers a beautiful opportunity to reconnect with who you are beyond motherhood.",
      image: "/placeholder.svg?height=200&width=300",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Empty Nesting",
      slug: "empty-nest-rediscovering-yourself",
    },
    {
      title: "5 Signs You're Ready for a Life Transition (And How to Begin)",
      excerpt:
        "Sometimes we know something needs to change but aren't sure what or how. Here are the signs that indicate you're ready for transformation and steps to begin.",
      image: "/placeholder.svg?height=200&width=300",
      date: "February 20, 2024",
      readTime: "4 min read",
      category: "Personal Growth",
      slug: "signs-ready-life-transition",
    },
    {
      title: "The Power of Pause: Why Slowing Down Accelerates Growth",
      excerpt:
        "In our fast-paced world, we often think we need to keep moving to make progress. But sometimes, the most transformative thing you can do is pause.",
      image: "/placeholder.svg?height=200&width=300",
      date: "February 15, 2024",
      readTime: "5 min read",
      category: "Mindfulness",
      slug: "power-of-pause-slowing-down-growth",
    },
  ]

  const categories = [
    "All",
    "Motherhood",
    "Identity Crisis",
    "Relocation",
    "Empty Nesting",
    "Personal Growth",
    "Mindfulness",
  ]

  return (
    <PageLayout>
      <div className="py-12 md:py-24 lg:py-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-16 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2C3E50] mb-6">
            Insights & Inspiration
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Thoughtful reflections, practical guidance, and inspiring stories to support you through life's transitions.
          </p>
        </section>

        {/* Categories */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-[#2C3E50] text-[#2C3E50] hover:bg-[#2C3E50] hover:text-white transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Featured Post */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-16">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-full">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span className="bg-[#28A745] text-white px-3 py-1 rounded-full text-xs">Featured</span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2C3E50] mb-4">{blogPosts[0].title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-flex items-center text-[#28A745] hover:text-[#218838] font-medium transition-colors duration-300"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </Card>
        </section>

        {/* Blog Posts Grid */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#28A745] text-white px-3 py-1 rounded-full text-xs">{post.category}</span>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-[#2C3E50] group-hover:text-[#28A745] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-[#28A745] hover:text-[#218838] font-medium transition-colors duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-16 text-center">
          <div className="bg-[#E0F2F7] rounded-lg p-8">
            <h2 className="text-3xl font-serif font-bold text-[#2C3E50] mb-4">Never Miss an Insight</h2>
            <p className="text-gray-600 mb-6">Get weekly reflections and practical guidance delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:ring-[#28A745] focus:border-[#28A745]"
              />
              <button className="bg-[#28A745] text-white hover:bg-[#218838] rounded-full px-6 py-2 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
