import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        AERO9610 - The Space Segment
      </h1>
      <p className="mb-4">
        {`Hello, welcome! This website contains my resources for students 
        taking AERO9610 - The Space Segment. Right now it's mainly a place
        for hosting my notes for Princeton's Spacecraft Control Toolbox (SCT)
        but may include other stuff in the future. You can find each week's
        tutorial by clicking on the links below. Happy studying! 🚀`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
