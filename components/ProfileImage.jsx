import Image from "next/image"

export default function ProfileImage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-full bg-blue-100 blur-2xl"></div>

      <Image
        src="/profile.jpg"
        alt="Joseph Anselm"
        width={260}
        height={260}
        className="relative rounded-full border-4 border-white shadow-xl"
      />
    </div>
  )
}
