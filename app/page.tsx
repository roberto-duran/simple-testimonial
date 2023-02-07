import { Testimony } from "@/models/testimony"
import BoxTemplate from "./components/BoxTemplate"

export default function Home() {

  const dummyData: Testimony[] = [
    {
      id: 1,
      name: 'Daniel Clifford',
      title: 'Verified Graduate',
      header: "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.",
      testimony: `"I was an EMT for many years before I joined the bootcamp. I've been
      looking to make a transition and have heard some people who had an
      amazing experience here. I signed up for the free intro course and
      found it incredibly fun! I enrolled shortly thereafter. The next 12
      weeks was the best - and most grueling - time of my life. Since
      completing the course, I've successfully switched careers, working
      as a Software Engineer at a VR startup. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Ratione vero repudiandae, quasi atque
      officiis eum consectetur odio amet dolorem deleniti repellat
      expedita aut sunt laudantium cum itaque nam voluptatum quod! Quo
      totam sequi omnis deserunt? Sit nam molestiae excepturi,
      perspiciatis labore deleniti eum, eligendi quisquam quod sed nobis
      exercitationem tempora! "`,
      img: 'image-daniel.jpg',
      bgColor: 'bg-purple-700',
      quoteIcon: true,
      gridCols: 'md:col-span-2',
      lineClamp: 'line-clamp-6'
    },
    {
      id: 2,
      name: 'Jonathan Walters',
      title: 'Verified Graduate',
      header: `The team was very supportive and kept me motivated`,
      testimony: `"I started as a total newbie with virtually no coding skills. I now
      work as a mobile engineer for a big company. This was one of the
      best investments I've made in myself. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Atque ipsam veritatis natus illum
      ullam ab, nesciunt rerum nobis, quibusdam ad voluptatum rem
      necessitatibus facere nihil deleniti assumenda vel velit neque quia,
      nisi ipsum laudantium impedit eveniet iste. Pariatur, exercitationem
      consequuntur praesentium a est eum velit quos maiores ipsum facere
      tempora! "`,
      img: 'image-jonathan.jpg',
      bgColor: 'bg-gray-600',
      gridCols: '',
      lineClamp: 'line-clamp-6'
    },
    {
      id: 3,
      name: 'Kira Whittle',
      title: 'Verified Graduate',
      header: `Such a life-changing experience. Highly recommended!`,
      testimony: `"Before joining the bootcamp, I've never written a line of code. I
      needed some structure from professionals who can help me learn
      programming step by step. I was encouraged to enroll by a former
      student of theirs who can only say wonderful things about the
      program. The entire curriculum and staff did not disappoint. They
      were very hands-on and I never had to wait long for assistance. The
      agile team project, in particular, was outstanding. It took my
      learning to the next level in a way that no tutorial could ever
      have. In fact, I've often referred to it during interviews as an
      example of my developent experience. It certainly helped me land a
      job as a full-stack developer after receiving multiple offers. 100%
      recommend!"`,
      img: 'image-kira.jpg',
      bgColor: 'bg-white',
      gridCols: 'md:row-span-2',
      lineClamp: ''
    },
    {
      id: 4,
      name: 'Jeanette Harmon',
      title: 'Verified Graduate',
      header: `An overall wonderful and rewarding experience`,
      testimony: `"Thank you for the wonderful experience! I now have a job I really
      enjoy, and make a good living while doing something I love."`,
      img: 'image-jeanette.jpg',
      bgColor: 'bg-white',
      gridCols: '',
      lineClamp: 'line-clamp-6'
    },
    {
      id: 5,
      name: 'Patrick Abrams',
      title: 'Verified Graduate',
      header: `Awesome teaching support from TAs who did the bootcamp themselves.
      Getting guidance from them and learning from their experiences was
      easy.`,
      testimony: `"The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people."`,
      img: 'image-patrick.jpg',
      bgColor: 'bg-gray-900',
      gridCols: 'md:col-span-2',
      lineClamp: 'line-clamp-6'
    }
  ];

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-4 md:grid-rows-2">
      {dummyData.map((testimony) => (
        <BoxTemplate key={testimony.id} testimony={testimony} />
      ))}
    </div>

  )
}
