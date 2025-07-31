import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Baby, Search, MapPin, Heart } from "lucide-react"
import Image from "next/image"

export function TransitionTypesSection() {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 text-center">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2C3E50] mb-6">
        I Specialize in Supporting Women Through
      </h2>
      <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
        Life's most profound transitions often happen to women. You're not alone in feeling overwhelmed, lost, or
        uncertain about your next steps.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card className="bg-white border border-[#E0F2F7] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
          <CardHeader className="text-center">
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
              <Image
                src="/images/motherhood-transition.png"
                alt="Motherhood transition"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <Baby className="w-12 h-12 text-[#28A745] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <CardTitle className="text-2xl font-bold text-[#2C3E50] group-hover:text-[#28A745] transition-colors duration-300">
              Motherhood Transitions
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
            <p className="mb-4">
              Supporting new mothers, those returning to work, and women experiencing identity shifts beyond the role of
              "mom."
            </p>
            <ul className="text-left space-y-2 text-sm">
              <li>• Loss of identity beyond motherhood</li>
              <li>• Guilt around working vs. staying home</li>
              <li>• Overwhelm and lack of time for self</li>
              <li>• Finding balance that works for you</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white border border-[#E0F2F7] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
          <CardHeader className="text-center">
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
              <Image
                src="/images/identity-crisis.png"
                alt="Identity crisis and life reassessment"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <Search className="w-12 h-12 text-[#28A745] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <CardTitle className="text-2xl font-bold text-[#2C3E50] group-hover:text-[#28A745] transition-colors duration-300">
              Feeling Lost & Identity Crisis
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
            <p className="mb-4">
              For women who have "checked all the boxes" but still feel stuck, unfulfilled, or disconnected from their
              true selves.
            </p>
            <ul className="text-left space-y-2 text-sm">
              <li>• Questioning life choices and direction</li>
              <li>• Feeling numb despite external success</li>
              <li>• Inner restlessness and desire for change</li>
              <li>• Fear of starting over or wasting time</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white border border-[#E0F2F7] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
          <CardHeader className="text-center">
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
              <Image
                src="/images/relocation-moving.png"
                alt="Relocation and moving transitions"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <MapPin className="w-12 h-12 text-[#28A745] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <CardTitle className="text-2xl font-bold text-[#2C3E50] group-hover:text-[#28A745] transition-colors duration-300">
              Relocation & Moving
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
            <p className="mb-4">
              Supporting women adjusting to new countries, cities, or life circumstances, especially expats and trailing
              spouses.
            </p>
            <ul className="text-left space-y-2 text-sm">
              <li>• Loss of community and support system</li>
              <li>• Identity disruption in new environment</li>
              <li>• Cultural adjustment and belonging</li>
              <li>• Career redefinition or starting over</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white border border-[#E0F2F7] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
          <CardHeader className="text-center">
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
              <Image
                src="/images/empty-nesting.png"
                alt="Empty nesting and rediscovering self"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <Heart className="w-12 h-12 text-[#28A745] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <CardTitle className="text-2xl font-bold text-[#2C3E50] group-hover:text-[#28A745] transition-colors duration-300">
              Empty Nesting & Rediscovery
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
            <p className="mb-4">
              Helping women 45+ rediscover themselves after years of caregiving as their children become independent.
            </p>
            <ul className="text-left space-y-2 text-sm">
              <li>• Sense of purposelessness or emptiness</li>
              <li>• Grief over changing role as caregiver</li>
              <li>• Questioning what's next in life</li>
              <li>• Reconnecting with dreams and passions</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
