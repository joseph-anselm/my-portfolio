import Container from "./Container"
import ProfileImage from "./ProfileImage"

export default function Hero() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hey! I am{" "}
              <span className="text-blue-600">Joseph Anselm</span>
            </h1>

            <p className="mt-6 text-gray-600 max-w-xl">
              I design and build high-quality digital products, web applications,
              and scalable solutions while delivering exceptional customer service.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                My Portfolio
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition"
              >
                Reach Out
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <ProfileImage />
          </div>

        </div>
      </Container>
    </section>
  )
}
