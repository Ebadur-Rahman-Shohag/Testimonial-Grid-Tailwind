import quoteImage from "../src/assets/images/bg-pattern-quotation.svg";
import danielImage from "../src/assets/images/image-daniel.jpg";
import jonathanImage from "../src/assets/images/image-jonathan.jpg";
import kiraImage from "../src/assets/images/image-kira.jpg";
import jeanetteImage from "../src/assets/images/image-jeanette.jpg";
import patrickImage from "../src/assets/images/image-patrick.jpg";
function App() {
  return (
    <>
      <section className="bg-gray-200">
        {/* Global Container */}
        <div className="container mx-auto max-w-7xl p-2 md:p-10">
          {/* Grid Container */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-4 md:grid-rows-2">
            {/* Box-1 */}
            <div className="relative p-10 rounded-xl text-white bg-purple-700 md:col-span-2">
              {/* Quotes Image */}
              <img
                src={quoteImage}
                className="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
              />
              {/* Box header */}
              <div className="flex z-10 space-x-4 ">
                <img
                  src={danielImage}
                  className="w-10 h-10 ring-2 ring-purple-300 rounded-full"
                />
                <div className="text-sm ">
                  <h4 className="sm:z-10">Daniel Clifford</h4>
                  <p className="sm:z-10">Verified Graduate</p>
                </div>
              </div>
              {/* Large Text */}
              <p className="relative z-10 mt-6 text-xl ">
                I received a job offer mid-course, and the subjects I learned
                were current, if not more so, in the company I joined. I
                honestly feel I got every penny&apos;s worth.
              </p>
              {/* Small Text */}
              <p className="mt-6 opacity-50 line-clamp-6">
                I was an EMT for many years before I joined the bootcamp.
                I&apos;ve been looking to make a transition and have heard some
                people who had an amazing experience here. I signed up for the
                free intro course and found it incredibly fun! I enrolled
                shortly thereafter. The next 12 weeks was the best - and most
                grueling - time of my life. Since completing the course,
                I&apos;ve successfully switched careers, working as a Software
                Engineer at a VR startup.
              </p>
            </div>
            {/* Box-2 */}
            <div className=" p-10 rounded-xl text-white bg-gray-600">
              {/* Box header */}
              <div className="flex  space-x-4 ">
                <img
                  src={jonathanImage}
                  className="w-10 h-10 ring-2 ring-purple-300 rounded-full"
                />
                <div className="text-sm">
                  <h4 className="opacity-90">Jonathan Walters</h4>
                  <p className="opacity-50">Verified Graduate</p>
                </div>
              </div>
              {/* Large Text */}
              <p className=" mt-6 text-xl">
                The team was very supportive and kept me motivated
              </p>
              {/* Small Text */}
              <p className="mt-6 opacity-50 line-clamp-6">
                I started as a total newbie with virtually no coding skills. I
                now work as a mobile engineer for a big company. This was one of
                the best investments I&apos;ve made in myself. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Atque ipsam veritatis
                natus illum ullam ab, nesciunt rerum nobis, quibusdam ad
                voluptatum rem necessitatibus facere nihil deleniti assumenda
                vel velit neque quia, nisi ipsum laudantium impedit eveniet
                iste. Pariatur, exercitationem consequuntur praesentium a est
                eum velit quos maiores ipsum facere tempora!
              </p>
            </div>
            {/* Box-3 */}
            <div className="hidden p-10 rounded-xl  text-gray-900 bg-white md:block md:row-span-2">
              {/* Box header */}
              <div className="flex  space-x-4 ">
                <img
                  src={kiraImage}
                  className="w-10 h-10 ring-2 ring-purple-300 rounded-full"
                />
                <div className="text-sm">
                  <h4 className="opacity-90">Kira Whittle</h4>
                  <p className="opacity-50">Verified Graduate</p>
                </div>
              </div>
              {/* Large Text */}
              <p className="  mt-6 text-xl">
                Such a life-changing experience. Highly recommended!
              </p>
              {/* Small Text */}
              <p className="mt-6 opacity-50 ">
                Before joining the bootcamp, I&apos;ve never written a line of
                code. I needed some structure from professionals who can help me
                learn programming step by step. I was encouraged to enroll by a
                former student of theirs who can only say wonderful things about
                the program. The entire curriculum and staff did not disappoint.
                They were very hands-on and I never had to wait long for
                assistance. The agile team project, in particular, was
                outstanding. It took my learning to the next level in a way that
                no tutorial could ever have. In fact, I&apos;ve often referred
                to it during interviews as an example of my developent
                experience. It certainly helped me land a job as a full-stack
                developer after receiving multiple offers. 100% recommend!
              </p>
            </div>
            {/* Box-4 */}
            <div className=" p-10 rounded-xl text-gray-900 bg-white">
              {/* Box header */}
              <div className="flex  space-x-4 ">
                <img
                  src={jeanetteImage}
                  className="w-10 h-10 ring-2 ring-purple-300 rounded-full"
                />
                <div className="text-sm">
                  <h4 className="opacity-90"> Jeanette Harmon</h4>
                  <p className="opacity-50">Verified Graduate</p>
                </div>
              </div>
              {/* Large Text */}
              <p className="  mt-6 text-xl">
                An overall wonderful and rewarding experience
              </p>
              {/* Small Text */}
              <p className="mt-6 opacity-50 ">
                Thank you for the wonderful experience! I now have a job I
                really enjoy, and make a good living while doing something I
                love.
              </p>
            </div>
            {/* Box-5 */}
            <div className=" p-10 rounded-xl text-white bg-gray-900 md:col-span-2">
              {/* Box header */}
              <div className="flex  space-x-4 ">
                <img
                  src={patrickImage}
                  className="w-10 h-10 ring-2 ring-purple-300 rounded-full"
                />
                <div className="text-sm">
                  <h4 className="opacity-90">Patrick Abrams</h4>
                  <p className="opacity-50">Verified Graduate</p>
                </div>
              </div>
              {/* Large Text */}
              <p className="  mt-6 text-xl">
                Awesome teaching support from TAs who did the bootcamp
                themselves. Getting guidance from them and learning from their
                experiences was easy.
              </p>
              {/* Small Text */}
              <p className="mt-6 opacity-50 ">
                The staff seem genuinely concerned about my progress which I
                find really refreshing. The program gave me the confidence
                necessary to be able to go out in the world and present myself
                as a capable junior developer. The standard is above the rest.
                You will get the personal attention you need from an incredible
                community of smart and amazing people.
              </p>
            </div>
            {/* Box-6 */}
            <div className=" p-10 rounded-xl text-gray-900 bg-white md:hidden">
              {/* Box header */}
              <div className="flex  space-x-4 ">
                <img
                  src={kiraImage}
                  className="w-10 h-10 ring-2 ring-purple-300 rounded-full"
                />
                <div className="text-sm">
                  <h4 className="opacity-90">Kira Whittle</h4>
                  <p className="opacity-50">Verified Graduate</p>
                </div>
              </div>
              {/* Large Text */}
              <p className="  mt-6 text-xl">
                Such a life-changing experience. Highly recommended!
              </p>
              {/* Small Text */}
              <p className="mt-6 opacity-50 line-clamp-6">
                Before joining the bootcamp, I&apos;ve never written a line of
                code. I needed some structure from professionals who can help me
                learn programming step by step. I was encouraged to enroll by a
                former student of theirs who can only say wonderful things about
                the program. The entire curriculum and staff did not disappoint.
                They were very hands-on and I never had to wait long for
                assistance. The agile team project, in particular, was
                outstanding. It took my learning to the next level in a way that
                no tutorial could ever have. In fact, I&apos;ve often referred
                to it during interviews as an example of my developent
                experience. It certainly helped me land a job as a full-stack
                developer after receiving multiple offers. 100% recommend!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
